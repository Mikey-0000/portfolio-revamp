/* ==========================================
   DEVELOPER PORTFOLIO
   PROJECT DATA & INTERACTIONS
   ========================================== */

const GITHUB = "https://github.com/Mikey-0000";
const PAGES = "https://mikey-0000.github.io";

/*
  Each project can have:
  - live:   URL of the deployed site. Shown as a live preview on the card
            and as a fully playable embed in the popup.
  - source: GitHub repository URL.
  - images: screenshots, shown in the popup's Screenshots view.
  - filters: which filter buttons the card appears under.
*/
const projects = [
  {
    id: "source-code",
    title: "SOURCE CODE",
    filters: ["game", "current"],
    period: "2026 — Personal project",
    subtitle: "Psychological-horror programming platformer",
    description:
      "You are NULL, a faceless entity trapped in PROJECT EDEN, a simulation whose rules are written in code. Some jumps are impossible with the default rules, so you open the source editor and rewrite them: gravity, jump height, doors, lasers and the enemies that guard them. Every edit raises corruption, which glitches the world, reveals hidden memories and eventually sets a hunter on you. This vertical slice has two chapters, the WATCHER boss, an in-world EDEN OS, scoring ranks and accessibility options. Move with A/D or the arrow keys, jump with Space, open the editor with Tab and apply code with Ctrl+Enter.",
    summary: {
      what: "A platformer where you rewrite the game's own rules in code to get past impossible obstacles.",
      how: "TypeScript with a sandboxed rule-language interpreter (no eval), procedural art and audio, built with esbuild and tested with unit and Playwright tests.",
      why: "To turn programming itself into the core game mechanic.",
      part: "The idea and direction for the game, plus playtesting and feedback on each version. The code was written with Claude (AI)."
    },
    tech: ["TypeScript", "Canvas", "Interpreter", "Playwright"],
    live: `${PAGES}/source-code/`,
    source: `${GITHUB}/source-code`,
    images: [
      "images/source-1.jpg?v=63dfd2d",
      "images/source-2.jpg?v=63dfd2d",
      "images/source-3.jpg?v=63dfd2d",
      "images/source-4.jpg?v=63dfd2d",
      "images/source-5.jpg?v=63dfd2d",
      "images/source-6.jpg?v=63dfd2d",
      "images/source-7.jpg?v=63dfd2d",
      "images/source-8.jpg?v=63dfd2d"
    ]
  },

  {
    id: "ashen-hollow",
    title: "Ashen Hollow",
    filters: ["game", "current"],
    period: "2026 — Personal project",
    subtitle: "Dark-fantasy pixel-art action RPG",
    description:
      "A 2D action RPG of witchcraft, forgotten gods and a living village, built on a custom Canvas 2D engine with no dependencies. It has a three-hit combo system, dodges with perfect-dodge timing, a spellbook and skill tree, synthesised audio, dynamic lighting and weather, NPC schedules, and save/load. Click inside the game to start audio. Move with WASD, attack with J or left-click, dodge with Space, cast with L or right-click.",
    summary: {
      what: "A full action RPG: combat, magic, NPC routines, weather and saves.",
      how: "Plain JavaScript on Canvas 2D with Web Audio sound. No libraries or build step.",
      why: "To learn how game engines work by building one from scratch.",
      part: "The idea, setting and direction, plus playtesting and feedback on each version. The code was written with Claude (AI)."
    },
    tech: ["JavaScript", "Canvas 2D", "Game Engine", "Web Audio"],
    live: `${PAGES}/ashen-hollow/`,
    source: `${GITHUB}/ashen-hollow`,
    images: [
      "images/ashen-1.jpg?v=e518fae",
      "images/ashen-2.jpg?v=e518fae",
      "images/ashen-3.jpg?v=e518fae",
      "images/ashen-4.jpg?v=e518fae"
    ]
  },

  {
    id: "gaming-map-revamp",
    title: "Gaming Map Revamp",
    filters: ["game", "web", "current"],
    period: "2026 — Goldsmiths coursework, since revamped",
    subtitle: "Interactive arcade-style archive of video game history",
    description:
      "An interactive layer over my original Historical Gaming Map. You can walk the star map with the arrow keys and collect data bits, scrub through gaming history from 1952 to today, and play genre mini-games: circuit puzzles, platform jumps, a duel against an AI that learns your habits, a lane runner, a sandbox builder and a survival game. It also has versus-mode radar charts, 19 achievements and a hidden Konami code.",
    summary: {
      what: "Mini-games, a history timeline, achievements and search on top of my original map.",
      how: "Two add-on files (enhance.js and enhance.css) on every page, with progress saved in localStorage.",
      why: "To turn a static archive into something you play, without rewriting the original.",
      part: "I built the original Historical Gaming Map myself for coursework (linked below). The interactive revamp layer was written with Claude (AI) from my direction."
    },
    note: {
      text: "This started as my Goldsmiths coursework, the original Historical Gaming Map. The revamp adds a new interactive layer on top of it.",
      link: `${PAGES}/Gaming-Map/`,
      linkText: "View the original version ↗"
    },
    tech: ["HTML", "CSS", "JavaScript", "Pixel Art"],
    live: `${PAGES}/Gaming-Map-Revamp/`,
    source: `${GITHUB}/Gaming-Map-Revamp`,
    images: [
      "images/gaming-1.jpg?v=a5693c8",
      "images/gaming-2.jpg?v=a5693c8",
      "images/gaming-3.jpg?v=a5693c8",
      "images/gaming-4.jpg?v=a5693c8"
    ]
  },

  {
    id: "persona",
    title: "Persona: Beyond the Mask",
    filters: ["web", "current"],
    period: "2026 — Personal project",
    subtitle: "Interactive fan site across P3, P4 and P5",
    description:
      "A stylised, interactive fan site with separate themed sections for Persona 3, 4 and 5. Each section has its own visual identity, transitions and interactions. The site is fully static and deployable to GitHub Pages or Cloudflare.",
    summary: {
      what: "Three themed sections: a midnight clock, a TV case board, calling cards and a fusion room.",
      how: "HTML, CSS animation and vanilla JavaScript, all static.",
      why: "To practise giving each section its own visual identity and motion.",
      part: "The idea, the choice of content and the direction for each section, plus testing. The code was written with Claude (AI)."
    },
    note: {
      text: "Unofficial fan project. Persona and its characters, artwork and music belong to their respective owners, and this site isn't affiliated with or endorsed by them."
    },
    tech: ["HTML", "CSS", "JavaScript", "Motion Design"],
    live: `${PAGES}/Persona/`,
    source: `${GITHUB}/Persona`,
    images: [
      "images/persona-1.jpg?v=09ab4b8",
      "images/persona-2.jpg?v=09ab4b8",
      "images/persona-3.jpg?v=09ab4b8",
      "images/persona-4.jpg?v=09ab4b8",
      "images/persona-5.jpg?v=09ab4b8",
      "images/persona-6.jpg?v=09ab4b8"
    ]
  },

  {
    id: "zelda",
    title: "Hyrule Encyclopedia",
    filters: ["web", "game", "current"],
    period: "2026 — Personal project",
    subtitle: "Interactive Zelda encyclopedia",
    description:
      "A fan encyclopedia centred on Ocarina of Time. Navi follows your cursor and gives hints, and vines and parallax trees react to scrolling. You can cut grass for rupees, spend them in an inventory (press I), and play six ocarina songs that change the world: day and night, storms, hearts and falling leaves. It also has a Gold Skulltula hunt, trivia and a franchise timeline, and progress is saved in the browser.",
    summary: {
      what: "An encyclopedia with game mechanics: Navi, rupees, an inventory and a playable ocarina.",
      how: "Vanilla JavaScript with keyboard input and localStorage saves. A Python script generates the pages.",
      why: "To make reading about a game feel like playing it.",
      part: "The idea, the choice of content and the direction, plus testing. The code was written with Claude (AI)."
    },
    note: {
      text: "Unofficial fan project. The Legend of Zelda and its characters and artwork belong to their respective owners, and this site isn't affiliated with or endorsed by them."
    },
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    live: `${PAGES}/Zelda/`,
    source: `${GITHUB}/Zelda`,
    images: [
      "images/zelda-1.jpg?v=64c3ab3",
      "images/zelda-2.jpg?v=64c3ab3",
      "images/zelda-3.jpg?v=64c3ab3"
    ]
  },

  {
    id: "newjeans",
    title: "NewJeans Chat Archive",
    filters: ["web", "2025"],
    period:
      "2025 — City, University of London · Computer Science Foundation Year",
    subtitle: "Interactive music and artist website",
    description:
      "An interactive music-inspired website first developed during my Computer Science Foundation Year at City, University of London, and since revamped. It is built around bubble-style chat messages and explores creative frontend development, artist presentation and user interface design.",
    summary: {
      what: "A chat-style fan site with a rhythm game, a photo booth and song stories.",
      how: "Vanilla JavaScript, with the browser's canvas and audio APIs for the game and photo booth.",
      why: "To experiment with playful UI and interaction beyond static pages.",
      part: "I built the original site myself during my Foundation Year, and most of its history is my own work. Later features were added with Claude (AI)."
    },
    note: {
      text: "Unofficial fan project. NewJeans and their music and photos belong to their respective owners, and this site isn't affiliated with or endorsed by them."
    },
    tech: ["HTML", "CSS", "JavaScript"],
    live: `${PAGES}/Newjeans/`,
    source: `${GITHUB}/Newjeans`,
    images: [
      "images/newjeans-1.jpg?v=28b0a77",
      "images/newjeans-2.jpg?v=28b0a77",
      "images/newjeans-3.jpg?v=28b0a77",
      "images/newjeans-4.jpg?v=28b0a77"
    ]
  },

  {
    id: "heritage",
    title: "UK Heritage Trails 2026",
    filters: ["web", "2025"],
    period: "2025 — City, University of London · Front-End Web Development module, revamped 2026",
    subtitle: "Travel and cultural discovery website",
    description:
      "A travel and cultural discovery website first built in my Foundation Year and redesigned in 2026 with an editorial look. It covers responsive design, destination pages and visual storytelling, and has a sign-up flow backed by a small Cloudflare Worker.",
    summary: {
      what: "An editorial redesign with a saved \"My Trail\", seasonal themes and a sign-up form.",
      how: "Responsive HTML and CSS with vanilla JavaScript. A Cloudflare Worker stores the sign-ups.",
      why: "To revisit my Foundation Year site with stronger design and a real backend.",
      part: "I built the original for my Front-End Web Development module. The 2026 redesign was written with Claude (AI) from my direction."
    },
    note: {
      text: "This started as my project for the Front-End Web Development module at City, University of London in 2025. The version shown here is a later revamp."
    },
    tech: ["HTML", "CSS", "JavaScript", "Cloudflare Workers"],
    live: `${PAGES}/UK-Heritage-Trails-2026/`,
    source: `${GITHUB}/UK-Heritage-Trails-2026`,
    images: [
      "images/heritage-1.jpg?v=8d8415b",
      "images/heritage-2.jpg?v=8d8415b",
      "images/heritage-3.jpg?v=8d8415b"
    ]
  },

  {
    id: "hollow",
    title: "The Hollow Spire",
    filters: ["game", "current"],
    period: "2026 — Goldsmiths coursework, since revamped",
    subtitle: "Turn-based RPG made with p5.js",
    description:
      "An original turn-based RPG built during my Computer Science studies at Goldsmiths, University of London. You climb three floors of the spire, explore each one, and defeat the Hollow Wisp, the Spire Reaper and the Abyssal King to claim the Spire Relic. Battles use attacks, Fire and Ice skills that exploit enemy weaknesses, elixirs and guarding. It has since been revamped with torch lighting, bloom, glowing UI panels, hit particles and screen shake. Move with WASD or the arrow keys, interact with E and select with Enter.",
    summary: {
      what: "A browser game with interactive storytelling and gameplay mechanics.",
      how: "JavaScript with p5.js, plus a custom effects layer for lighting, bloom and screen shake.",
      why: "To learn game loops, input handling and drawing.",
      part: "I wrote the original game myself for coursework (playable below). The visual revamp was written with Claude (AI)."
    },
    note: {
      text: "This started as my Goldsmiths coursework submission. The version shown here has since been revamped with new visuals, and the original submission is still playable, unchanged.",
      link: `${PAGES}/Hollow-Spire-Original/`,
      linkText: "Play the original submission ↗"
    },
    tech: ["JavaScript", "p5.js", "Canvas FX"],
    live: `${PAGES}/hollow-spire/`,
    source: `${GITHUB}/hollow-spire`,
    images: [
      "images/hollow-1.jpg?v=758e3f9",
      "images/hollow-2.jpg?v=758e3f9",
      "images/hollow-3.jpg?v=758e3f9",
      "images/hollow-4.jpg?v=758e3f9",
      "images/hollow-5.jpg?v=758e3f9",
      "images/hollow-6.jpg?v=758e3f9",
      "images/hollow-7.jpg?v=758e3f9",
      "images/hollow-8.jpg?v=758e3f9"
    ]
  }
];

/* Size of the virtual screen the card previews render at, before scaling down. */
const PREVIEW_WIDTH = 1280;
const PREVIEW_HEIGHT = 960;

/* ==========================================
   DOM ELEMENTS
   ========================================== */

const grid = document.getElementById("project-grid");
const dialog = document.getElementById("project-dialog");

const countLabel = document.getElementById("project-count");
if (countLabel) {
  countLabel.textContent =
    `${String(projects.length).padStart(2, "0")} projects · ` +
    `${projects.filter(p => p.live).length} live`;
}

/* ==========================================
   HELPERS
   ========================================== */

function makeTags(technologies) {
  return technologies.map(tech => {
    const span = document.createElement("span");
    span.textContent = tech;
    return span;
  });
}

function createPlaceholder(title) {
  const placeholder = document.createElement("div");
  placeholder.className = "placeholder";
  placeholder.textContent = title;
  return placeholder;
}

function makeLink(href, text, className) {
  const a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  a.className = className;
  a.textContent = text;
  return a;
}

/* ==========================================
   LIVE CARD PREVIEWS
   A scaled-down, non-interactive copy of each live site.
   The frame is created when the card scrolls into view and
   removed completely when it leaves, so only the cards on
   screen are running. (Just clearing an iframe's src does
   not unload the page inside it.)

   Phones and touch devices get screenshots on the cards
   instead: several live games at once is too much memory
   for a phone browser. The live demo still opens in the
   popup, one project at a time.
   ========================================== */

const LIGHT_PREVIEWS = window.matchMedia
  ? window.matchMedia("(max-width: 800px), (hover: none)").matches
  : false;

function mountFrame(box) {
  if (box.querySelector("iframe")) return;

  const frame = document.createElement("iframe");
  frame.title = `${box.dataset.title} live preview`;
  frame.width = PREVIEW_WIDTH;
  frame.height = PREVIEW_HEIGHT;
  frame.tabIndex = -1;
  frame.setAttribute("aria-hidden", "true");
  frame.setAttribute("sandbox", "allow-scripts allow-same-origin");
  frame.addEventListener("load", () => box.classList.add("is-loaded"));
  frame.src = box.dataset.live;

  box.insertBefore(frame, box.querySelector(".live-badge"));
  scalePreview(box);
}

function unmountFrame(box) {
  const frame = box.querySelector("iframe");
  if (!frame) return;
  box.classList.remove("is-loaded");
  frame.remove();
}

const previewObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              mountFrame(entry.target);
            } else {
              unmountFrame(entry.target);
            }
          });
        },
        { rootMargin: "100px" }
      )
    : null;

const resizeObserver =
  "ResizeObserver" in window
    ? new ResizeObserver(entries => {
        entries.forEach(entry => scalePreview(entry.target));
      })
    : null;

function scalePreview(box) {
  const frame = box.querySelector("iframe");
  if (!frame) return;
  const scale = box.clientWidth / PREVIEW_WIDTH;
  frame.style.transform = `scale(${scale})`;
}

function createPreview(project, imageBox) {
  const badge = document.createElement("span");
  badge.className = "live-badge";
  badge.textContent = "● LIVE";

  const play = document.createElement("span");
  play.className = "play-overlay";
  play.textContent = "▶ Try it here";

  imageBox.append(badge, play);

  /* Phones: keep the screenshot, no live frame on the card */
  if (LIGHT_PREVIEWS || !previewObserver) return;

  imageBox.classList.add("has-live");
  imageBox.dataset.live = project.live;
  imageBox.dataset.title = project.title;

  previewObserver.observe(imageBox);
  if (resizeObserver) resizeObserver.observe(imageBox);
}

/* ==========================================
   CREATE PROJECT CARDS
   ========================================== */

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project";
  article.id = `project-${project.id}`;
  article.dataset.filters = ["all", ...project.filters].join(" ");

  const button = document.createElement("button");
  button.type = "button";
  button.className = "project-button";
  button.setAttribute(
    "aria-label",
    project.live
      ? `Open ${project.title} live demo`
      : `View ${project.title} project details`
  );

  /* PREVIEW: live site if deployed, otherwise first screenshot */

  const imageBox = document.createElement("div");
  imageBox.className = "project-image";

  if (project.images.length > 0) {
    const img = document.createElement("img");
    img.src = project.images[0];
    img.alt = `${project.title} screenshot`;
    img.loading = "lazy";
    img.className = "poster";
    img.onerror = () => {
      img.replaceWith(createPlaceholder(project.title));
    };
    imageBox.appendChild(img);
  } else {
    imageBox.appendChild(createPlaceholder(project.title));
  }

  if (project.live) createPreview(project, imageBox);

  /* PROJECT INFORMATION */

  const content = document.createElement("div");
  content.className = "project-content";

  const meta = document.createElement("div");
  meta.className = "project-meta";

  const fileName = document.createElement("span");
  fileName.textContent = `${project.id}.project`;

  const arrow = document.createElement("span");
  arrow.textContent = project.live ? "▶" : "↗";

  meta.append(fileName, arrow);

  const heading = document.createElement("h3");
  heading.textContent = project.title;

  const subtitle = document.createElement("p");
  subtitle.textContent = project.subtitle;

  const tags = document.createElement("div");
  tags.className = "tags";
  tags.append(...makeTags(project.tech));

  content.append(meta, heading, subtitle, tags);
  button.append(imageBox, content);
  button.addEventListener("click", () => openProject(project, button));

  article.appendChild(button);

  /* LINKS (outside the button so they stay separately clickable) */

  const links = document.createElement("div");
  links.className = "project-links";

  if (project.live) {
    links.appendChild(makeLink(project.live, "live site ↗", "link-live"));
  }
  if (project.source) {
    links.appendChild(makeLink(project.source, "source code ↗", "link-source"));
  }
  if (links.children.length) article.appendChild(links);

  return article;
}

/* ==========================================
   DISPLAY PROJECTS
   ========================================== */

if (grid) {
  projects.forEach(project => {
    grid.appendChild(createProjectCard(project));
  });
}

/* ==========================================
   PROJECT FILTERS
   ========================================== */

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    document.querySelectorAll(".project").forEach(card => {
      card.hidden = !card.dataset.filters.split(" ").includes(filter);
    });
  });
});

/* ==========================================
   PROJECT DETAIL POPUP
   Live demo (fully interactive) + screenshots
   ========================================== */

const dialogFrame = document.getElementById("dialog-frame");
const liveWrap = document.getElementById("dialog-live");
const gallery = document.getElementById("dialog-gallery");
const viewToggle = document.getElementById("dialog-views");
const liveLink = document.getElementById("dialog-live-link");
const sourceLink = document.getElementById("dialog-source-link");
const fullscreenButton = document.getElementById("dialog-fullscreen");

function showView(view) {
  if (!viewToggle) return;

  viewToggle.querySelectorAll("button").forEach(btn => {
    const active = btn.dataset.view === view;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  if (liveWrap) liveWrap.hidden = view !== "live";
  if (gallery) gallery.hidden = view !== "screens";
}

function setLink(link, href) {
  if (!link) return;
  link.hidden = !href;
  if (href) link.href = href;
}

/* ==========================================
   POPUP ANIMATION HELPERS
   ========================================== */

const reduceMotion = window.matchMedia
  ? window.matchMedia("(prefers-reduced-motion: reduce)")
  : { matches: false };

let typeTimer = null;
let closeTimer = null;

/* Types the header filename out, like an editor tab opening */
function typeFileName(el, text) {
  clearInterval(typeTimer);

  if (reduceMotion.matches) {
    el.textContent = text;
    return;
  }

  let i = 0;
  el.textContent = "";
  el.classList.add("typing");

  typeTimer = setInterval(() => {
    i += 1;
    el.textContent = text.slice(0, i);

    if (i >= text.length) {
      clearInterval(typeTimer);
      el.classList.remove("typing");
    }
  }, Math.max(14, Math.min(28, 420 / text.length)));
}

/* Numbers the visible pieces of the popup so CSS can stagger them */
function setStagger() {
  let i = 0;

  dialog.querySelectorAll(".dialog-body > *").forEach(el => {
    if (el.hidden) return;
    el.style.setProperty("--i", i);
    i += 1;
  });

  dialog.querySelectorAll(".summary dt, .summary dd").forEach((el, n) => {
    el.style.setProperty("--j", Math.floor(n / 2));
  });
}

/* Makes the popup grow out of the card that was clicked */
function playOpenAnimation(originEl) {
  dialog.classList.remove("is-closing", "is-opening");
  dialog.style.transformOrigin = "";

  if (reduceMotion.matches) return;

  if (originEl) {
    const card = originEl.getBoundingClientRect();
    const box = dialog.getBoundingClientRect();
    const clamp = (v, max) => Math.min(Math.max(v, 0), max);
    /* keep the growth point inside the popup so it never swoops in from off-screen */
    const x = clamp(card.left + card.width / 2 - box.left, box.width);
    const y = clamp(card.top + card.height / 2 - box.top, box.height);
    dialog.style.transformOrigin = `${Math.round(x)}px ${Math.round(y)}px`;
  }

  setStagger();
  void dialog.offsetWidth; /* restart the CSS animation */
  dialog.classList.add("is-opening");
}

function openProject(project, originEl) {
  if (!dialog) return;

  clearTimeout(closeTimer);

  typeFileName(
    document.getElementById("dialog-file"),
    `${project.id}.project`
  );
  document.getElementById("dialog-date").textContent = project.period;
  document.getElementById("dialog-title").textContent = project.title;
  document.getElementById("dialog-description").textContent =
    project.description;

  /* NOTE: fan-project disclaimer or original-vs-revamp */

  const note = document.getElementById("dialog-note");
  if (note) {
    note.replaceChildren();
    note.hidden = !project.note;
    if (project.note) {
      const text = document.createElement("span");
      text.textContent = project.note.text;
      note.appendChild(text);
      if (project.note.link) {
        note.append(" ", makeLink(project.note.link, project.note.linkText, "note-link"));
      }
    }
  }

  /* WHAT / HOW / WHY */

  const summary = document.getElementById("dialog-summary");
  if (summary) {
    summary.replaceChildren();
    summary.hidden = !project.summary;
    if (project.summary) {
      ["what", "how", "why", "part"].forEach(key => {
        if (!project.summary[key]) return;
        const term = document.createElement("dt");
        term.textContent = key === "part" ? "my part" : key;
        const detail = document.createElement("dd");
        detail.textContent = project.summary[key];
        summary.append(term, detail);
      });
    }
  }
  document.getElementById("dialog-tags")
    .replaceChildren(...makeTags(project.tech));

  setLink(liveLink, project.live);
  setLink(sourceLink, project.source);
  if (fullscreenButton) fullscreenButton.hidden = !project.live;

  /* LIVE DEMO */

  if (liveWrap && dialogFrame) {
    liveWrap.classList.remove("is-loaded");
    if (project.live) {
      dialogFrame.title = `${project.title} live demo`;
      dialogFrame.src = project.live;
    } else {
      dialogFrame.src = "about:blank";
    }
  }

  /* SCREENSHOTS */

  if (gallery) {
    gallery.replaceChildren();
    project.images.forEach((source, index) => {
      const img = document.createElement("img");
      img.src = source;
      img.alt = `${project.title} screenshot ${index + 1}`;
      img.loading = "lazy";
      img.onerror = () => img.remove();
      gallery.appendChild(img);
    });
  }

  /* VIEW TOGGLE: only show it when there is a choice */

  if (viewToggle) {
    viewToggle.hidden = !(project.live && project.images.length);
  }
  showView(project.live ? "live" : "screens");

  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  playOpenAnimation(originEl);
}

function closeProject() {
  if (!dialog || !dialog.open) return;
  if (document.fullscreenElement) document.exitFullscreen();

  if (reduceMotion.matches) {
    dialog.close();
    return;
  }

  /* Play a short exit animation, then actually close */
  if (dialog.classList.contains("is-closing")) return;
  dialog.classList.remove("is-opening");
  dialog.classList.add("is-closing");

  closeTimer = setTimeout(() => {
    dialog.classList.remove("is-closing");
    dialog.close();
  }, 190);
}

if (dialogFrame && liveWrap) {
  dialogFrame.addEventListener("load", () => {
    if (dialogFrame.src && dialogFrame.src !== "about:blank") {
      liveWrap.classList.add("is-loaded");
    }
  });
}

if (viewToggle) {
  viewToggle.addEventListener("click", event => {
    const btn = event.target.closest("button[data-view]");
    if (btn) showView(btn.dataset.view);
  });
}

if (fullscreenButton && liveWrap) {
  fullscreenButton.addEventListener("click", () => {
    showView("live");
    if (liveWrap.requestFullscreen) liveWrap.requestFullscreen();
  });
}

/* ==========================================
   CLOSE PROJECT POPUP
   ========================================== */

const closeButton = document.getElementById("close-dialog");

if (dialog) {
  if (closeButton) closeButton.addEventListener("click", closeProject);

  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeProject();
  });

  /* Escape key: use the animated close too */
  dialog.addEventListener("cancel", event => {
    event.preventDefault();
    closeProject();
  });

  /* Stop the embedded game/site when the popup closes */
  dialog.addEventListener("close", () => {
    if (dialogFrame) dialogFrame.src = "about:blank";
    if (liveWrap) liveWrap.classList.remove("is-loaded");
  });
}

/* Open a project directly from a link, e.g. projects.html?project=zelda */
const requested = new URLSearchParams(location.search).get("project");
if (requested && grid) {
  const match = projects.find(p => p.id === requested);
  if (match) openProject(match);
}

/* ==========================================
   CONSOLE MESSAGE
   ========================================== */

console.log(
  "%c Developer Portfolio Loaded ",
  "background:#007acc;color:white;padding:8px;font-family:Consolas;"
);

console.log("Projects loaded:", projects.length);

/* ==========================================
   CONTACT FORM
   ========================================== */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const message = document.getElementById("form-status");

    if (message) {
      message.textContent = "Message validated successfully! Message will be sent by 2030.";
    }
  });
}
