"""
Automatic portfolio screenshots.

For each project, this opens the live site in a headless browser, walks
through a fixed list of scenes, and saves 800x500 JPEGs into images/.
It then points script.js at the new images (with a cache-busting
version) so visitors see them straight away.

Usage:
    python tools/screenshots.py              # only projects whose repo changed
    python tools/screenshots.py persona      # just these projects
    python tools/screenshots.py --all        # every project
    python tools/screenshots.py --check      # just list changed projects

Change detection uses the latest commit on each repo's main branch,
stored in tools/screenshot-state.json. A commit younger than
MIN_AGE_MINUTES is skipped until the next run, so the live site has
time to finish deploying first.
"""

import json
import os
import shutil
import tempfile
import re
import sys
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "images"
SCRIPT_JS = ROOT / "script.js"
HTML_FILES = ["index.html", "projects.html", "contact.html"]
STATE_FILE = ROOT / "tools" / "screenshot-state.json"

OWNER = "Mikey-0000"
PAGES = "https://mikey-0000.github.io"
VIEWPORT = {"width": 1280, "height": 800}
OUT_SIZE = (800, 500)
MIN_AGE_MINUTES = 8

HIDE_CANVAS = "(() => { const s = document.createElement('style'); s.textContent = 'canvas{display:none!important}'; document.head.appendChild(s); })()"


# ------------------------------------------------------------------
# Scenes. Each project is a sequence of steps run in one browser tab:
#   ("go", path)        open a page on the project's site
#   ("wait", ms)        pause
#   ("js", code)        run JavaScript in the page
#   ("key", key)        press a key (Playwright key names)
#   ("click", x, y)     click at viewport coordinates
#   ("type", text)      type text with the keyboard
#   ("waitfor", css)    wait until an element exists
#   ("shot", n)         save images/<prefix>-<n>.jpg
# Shot numbers set the order in the portfolio gallery (1 = first).
# ------------------------------------------------------------------

PROJECTS = {
    "source-code": {
        "repo": "source-code",
        "prefix": "source",
        "base": f"{PAGES}/source-code/",
        # Uses the game's own test hooks (window.__eden), as its e2e test does
        "steps": [
            ("go", "?skipboot=1"), ("waitfor", ".title"), ("wait", 4500), ("shot", 1),
            ("js", "[...document.querySelectorAll('.title *')].find(e => e.children.length === 0 && e.textContent.trim() === 'NEW GAME').click()"),
            ("wait", 4500),
            ("js", "(() => { const g = window.__eden.game; g.dialogue.open = false; g.dialogue.root.hidden = true; })()"),
            ("wait", 1500), ("shot", 2),
            ("js", "(() => { window.__eden.story.data.editorRevealed = true; window.__eden.game.openPanel(true); })()"),
            ("wait", 800),
            ("js", "(() => { const t = document.querySelector('.ce-ta'); t.focus(); t.select(); })()"),
            ("type", "player.speed = 3.5;\nplayer.jumpHeight = 120;\nworld.gravity = 0.3;\n"),
            ("wait", 700), ("shot", 3),
            ("key", "Control+Enter"), ("wait", 250), ("shot", 4),
            ("js", "(() => { const g = window.__eden.game; g.closePanel(); const w = g.world; w.exitOpen = true; w.x = w.level.exit[0] * 32 + 9; w.y = w.level.exit[1] * 32 + 4; })()"),
            ("waitfor", ".card.complete"), ("wait", 1200), ("shot", 5),
            ("js", "(async () => { const g = window.__eden.game; g.overlay.hidden = true; g.paused = false; window.__eden.story.data.editorRevealed = true; await g.loadLevel(3, false); g.dialogue.open = false; g.dialogue.root.hidden = true; })()"),
            ("wait", 1800), ("shot", 6),
            ("js", "(async () => { const g = window.__eden.game; g.overlay.hidden = true; g.paused = false; await g.loadLevel(5, false); g.dialogue.open = false; g.dialogue.root.hidden = true; })()"),
            ("wait", 1800), ("shot", 7),
            ("js", "(() => { window.__eden.game.hide(); window.__eden.enterRoot(); })()"),
            ("wait", 1800), ("shot", 8),
        ],
    },
    "ashen-hollow": {
        "repo": "ashen-hollow",
        "prefix": "ashen",
        "base": f"{PAGES}/ashen-hollow/",
        "steps": [
            ("go", ""), ("wait", 6000), ("shot", 4),
            ("click", 640, 400), ("key", "Enter"), ("wait", 2500),
            ("key", "Enter"), ("wait", 3000), ("shot", 2),
            ("key", "Enter"), ("wait", 1500), ("key", "Enter"), ("wait", 1500),
            ("key", "Enter"), ("wait", 4000), ("shot", 1),
            ("key", "i"), ("wait", 1500), ("shot", 3),
        ],
    },
    "gaming-map-revamp": {
        "repo": "Gaming-Map-Revamp",
        "prefix": "gaming",
        "base": f"{PAGES}/Gaming-Map-Revamp/",
        "steps": [
            ("go", ""), ("wait", 6000), ("shot", 1),
            ("js", "window.scrollTo(0, document.body.scrollHeight * 0.55)"), ("wait", 2500), ("shot", 2),
            ("go", "minecraft.html"), ("wait", 4000), ("shot", 3),
            ("go", "figures.html"), ("wait", 4000), ("shot", 4),
        ],
    },
    "persona": {
        "repo": "Persona",
        "prefix": "persona",
        "base": f"{PAGES}/Persona/",
        "steps": [
            ("go", ""), ("wait", 2500),
            ("js", "[...document.querySelectorAll('button')].find(b => /Enter silent/i.test(b.textContent))?.click()"),
            ("wait", 6000), ("js", "window.scrollTo(0, 0)"), ("wait", 800), ("shot", 1),
            ("js", "document.querySelector('#p3').scrollIntoView()"), ("wait", 2500), ("shot", 2),
            ("js", "document.querySelector('#p4').scrollIntoView()"), ("wait", 1500),
            ("js", "[...document.querySelectorAll('#p4 button')].find(b => /Switch on/i.test(b.textContent))?.click()"),
            ("wait", 2500), ("shot", 3),
            ("js", "document.querySelector('#p5').scrollIntoView()"), ("wait", 4000), ("shot", 4),
            ("js", "(() => { const p = document.querySelector('#ph-home'); const el = p.closest('[class*=phone]') || p.parentElement; el.scrollIntoView({block: 'center'}); })()"),
            ("wait", 3000), ("shot", 5),
            ("js", "document.querySelector('#velvet').scrollIntoView()"), ("wait", 2500), ("shot", 6),
        ],
    },
    "zelda": {
        "repo": "Zelda",
        "prefix": "zelda",
        "base": f"{PAGES}/Zelda/public/",
        "steps": [
            ("go", ""), ("wait", 5000), ("shot", 1),
            ("go", "Link.html"), ("wait", 5000), ("shot", 2),
            ("go", "Ocarina.html"), ("wait", 5000), ("shot", 3),
        ],
    },
    "newjeans": {
        "repo": "Newjeans",
        "prefix": "newjeans",
        "base": f"{PAGES}/Newjeans/",
        "steps": [
            ("go", ""), ("wait", 5000), ("shot", 1),
            ("go", "game.html"), ("wait", 5000), ("shot", 2),
            ("go", "photobooth.html"), ("wait", 5000), ("shot", 3),
            ("go", "songs.html"), ("wait", 5000), ("shot", 4),
        ],
    },
    "heritage": {
        "repo": "UK-Heritage-Trails-2026",
        "prefix": "heritage",
        "base": f"{PAGES}/UK-Heritage-Trails-2026/",
        "steps": [
            ("go", ""), ("wait", 5000), ("shot", 1),
            # The seasonal effects canvas washes these pages out in headless captures
            ("go", "london.html"), ("wait", 5000), ("js", HIDE_CANVAS), ("wait", 1500), ("shot", 2),
            ("go", "scotland.html"), ("wait", 5000), ("js", HIDE_CANVAS), ("wait", 1500), ("shot", 3),
        ],
    },
    "hollow": {
        "repo": "hollow-spire",
        "prefix": "hollow",
        "base": f"{PAGES}/hollow-spire/",
        # Uses the game's own functions to reach later floors quickly
        "steps": [
            ("go", ""), ("wait", 4000), ("js", "window.scrollTo(0, 0)"), ("wait", 1500), ("shot", 3),
            ("js", "document.getElementById('play').scrollIntoView()"), ("wait", 1000),
            ("key", "Enter"), ("wait", 3000),
            ("js", "document.getElementById('play').scrollIntoView()"), ("wait", 1000), ("shot", 4),
            ("js", "playerX = enemy.x + 40; playerY = enemy.y + 20"), ("wait", 500),
            ("key", "e"), ("wait", 3000),
            ("key", "ArrowDown"), ("key", "Enter"), ("wait", 500), ("key", "Enter"), ("wait", 350), ("shot", 2),
            ("js", "clearBattleEffects(); menuState='main'; selectedOption=0; battleMessage=''; cutsceneNextFloor=2; gameState='cutscene'; finishCutscene(); healingMessageTimer=0; playerX = enemy.x + 40; playerY = enemy.y + 20"),
            ("wait", 500), ("key", "e"), ("wait", 3000),
            ("key", "ArrowDown"), ("key", "Enter"), ("wait", 600), ("shot", 5),
            ("js", "clearBattleEffects(); menuState='main'; selectedOption=0; battleMessage=''; cutsceneNextFloor=3; gameState='cutscene'; finishCutscene(); healingMessageTimer=0; playerX = enemy.x + 40; playerY = enemy.y + 20"),
            ("wait", 1500), ("shot", 6),
            ("key", "e"), ("wait", 3000), ("shot", 1),
            ("js", "clearBattleEffects(); enterTreasureRoom()"), ("wait", 2000),
            ("js", "openTreasureChest()"), ("wait", 1500), ("shot", 7),
            ("js", "gameState = 'victory'"), ("wait", 3000), ("shot", 8),
        ],
    },
}


# ------------------------------------------------------------------
# Change detection
# ------------------------------------------------------------------

def github_get(url):
    req = urllib.request.Request(url, headers={"Accept": "application/vnd.github+json", "User-Agent": "portfolio-screenshots"})
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        req.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def latest_commit(repo):
    data = github_get(f"https://api.github.com/repos/{OWNER}/{repo}/commits/HEAD")
    date = datetime.fromisoformat(data["commit"]["committer"]["date"].replace("Z", "+00:00"))
    return data["sha"], date


def load_state():
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {}


def save_state(state):
    STATE_FILE.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n")


# ------------------------------------------------------------------
# Capturing
# ------------------------------------------------------------------

def capture(page, project_id, cfg, staging):
    from PIL import Image

    shots = {}
    prefix = cfg["prefix"]
    for step in cfg["steps"]:
        kind = step[0]
        if kind == "go":
            page.goto(cfg["base"] + step[1], wait_until="load", timeout=60000)
        elif kind == "wait":
            page.wait_for_timeout(step[1])
        elif kind == "js":
            page.evaluate(step[1])
        elif kind == "key":
            page.keyboard.press(step[1])
        elif kind == "click":
            page.mouse.click(step[1], step[2])
        elif kind == "type":
            page.keyboard.type(step[1])
        elif kind == "waitfor":
            page.wait_for_selector(step[1], timeout=20000)
        elif kind == "shot":
            n = step[1]
            tmp = staging / f"{prefix}-{n}.png"
            page.screenshot(path=str(tmp))
            Image.open(tmp).convert("RGB").resize(OUT_SIZE, Image.LANCZOS).save(
                staging / f"{prefix}-{n}.jpg", "JPEG", quality=85, optimize=True
            )
            tmp.unlink()
            shots[n] = f"images/{prefix}-{n}.jpg"
            print(f"  captured {prefix}-{n}.jpg")
    return [shots[n] for n in sorted(shots)]


def update_script_js(project_id, prefix, images, version):
    text = SCRIPT_JS.read_text()
    start = text.index(f'id: "{project_id}"')
    block_start = text.index("images: [", start)
    block_end = text.index("]", block_start) + 1
    lines = ",\n".join(f'      "{img}?v={version}"' for img in images)
    text = text[:block_start] + f"images: [\n{lines}\n    ]" + text[block_end:]
    SCRIPT_JS.write_text(text)

    # Remove leftover images from a longer old set (e.g. persona-7.jpg)
    keep = {Path(i).name for i in images}
    for old in IMAGES.glob(f"{prefix}-*.jpg"):
        if old.name not in keep:
            old.unlink()
            print(f"  removed {old.name}")


def bump_page_versions():
    stamp = datetime.now(timezone.utc).strftime("%Y%m%d%H%M")
    for name in HTML_FILES:
        path = ROOT / name
        html = path.read_text()
        html = re.sub(r'((?:style|script)\.(?:css|js))\?v=\d+', rf"\1?v={stamp}", html)
        path.write_text(html)


def main(argv):
    force_all = "--all" in argv
    requested = [a for a in argv if not a.startswith("--")]
    unknown = [r for r in requested if r not in PROJECTS]
    if unknown:
        sys.exit(f"Unknown project(s): {', '.join(unknown)}. Known: {', '.join(PROJECTS)}")

    state = load_state()
    now = datetime.now(timezone.utc)
    todo = {}

    for pid, cfg in PROJECTS.items():
        if requested and pid not in requested:
            continue
        sha, date = latest_commit(cfg["repo"])
        if requested or force_all:
            todo[pid] = sha
            continue
        if state.get(pid) == sha:
            continue
        age = (now - date).total_seconds() / 60
        if age < MIN_AGE_MINUTES:
            print(f"{pid}: new commit {sha[:7]} is only {age:.0f} min old, waiting for the deploy")
            continue
        todo[pid] = sha

    if "--check" in argv:
        changed = " ".join(todo)
        print(f"Changed: {changed or 'none'}")
        out = os.environ.get("GITHUB_OUTPUT")
        if out:
            with open(out, "a") as f:
                f.write(f"changed={changed}\n")
        return

    if not todo:
        print("No project changes. Nothing to capture.")
        return

    from playwright.sync_api import sync_playwright

    failed = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for pid, sha in todo.items():
            cfg = PROJECTS[pid]
            print(f"{pid}: capturing ({sha[:7]})")
            context = browser.new_context(viewport=VIEWPORT, device_scale_factor=1)
            page = context.new_page()
            staging = Path(tempfile.mkdtemp(prefix=f"shots-{pid}-"))
            try:
                images = capture(page, pid, cfg, staging)
            except Exception as err:
                print(f"{pid}: FAILED, keeping the old screenshots ({err})")
                failed.append(pid)
                context.close()
                shutil.rmtree(staging, ignore_errors=True)
                continue
            context.close()
            # Every shot worked, so swap the new set in
            for f in staging.glob("*.jpg"):
                shutil.move(str(f), IMAGES / f.name)
            shutil.rmtree(staging, ignore_errors=True)
            update_script_js(pid, cfg["prefix"], images, sha[:7])
            state[pid] = sha
        browser.close()

    if len(failed) < len(todo):
        bump_page_versions()
    save_state(state)
    if failed:
        sys.exit(f"Failed: {', '.join(failed)}")


if __name__ == "__main__":
    main(sys.argv[1:])
