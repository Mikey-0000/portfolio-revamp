/* ==========================================
   DEVELOPER PORTFOLIO
   PROJECT DATA & INTERACTIONS
   ========================================== */

const GITHUB = "https://github.com/mikey101101";
const PAGES = "https://mikey101101.github.io";

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
      why: "To learn how game engines work by building one from scratch."
    },
    tech: ["JavaScript", "Canvas 2D", "Game Engine", "Web Audio"],
    live: `${PAGES}/ashen-hollow/`,
    source: `${GITHUB}/ashen-hollow`,
    images: [
      "images/ashen-1.jpg",
      "images/ashen-2.jpg",
      "images/ashen-3.jpg",
      "images/ashen-4.jpg"
    ]
  },

  {
    id: "gaming-map-revamp",
    title: "Gaming Map Revamp",
    filters: ["game", "web", "current"],
    period: "2026 — Goldsmiths, University of London",
    subtitle: "Interactive arcade-style archive of video game history",
    description:
      "An interactive layer over my original Historical Gaming Map. You can walk the star map with the arrow keys and collect data bits, scrub through gaming history from 1952 to today, and play genre mini-games: circuit puzzles, platform jumps, a duel against an AI that learns your habits, a lane runner, a sandbox builder and a survival game. It also has versus-mode radar charts, 19 achievements and a hidden Konami code.",
    summary: {
      what: "Mini-games, a history timeline, achievements and search on top of my original map.",
      how: "Two add-on files (enhance.js and enhance.css) on every page, with progress saved in localStorage.",
      why: "To turn a static archive into something you play, without rewriting the original."
    },
    tech: ["HTML", "CSS", "JavaScript", "Pixel Art"],
    live: `${PAGES}/Gaming-Map-Revamp/`,
    source: `${GITHUB}/Gaming-Map-Revamp`,
    images: [
      "images/gaming-1.jpg",
      "images/gaming-2.jpg",
      "images/gaming-3.jpg",
      "images/gaming-4.jpg"
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
      why: "To practise giving each section its own visual identity and motion."
    },
    tech: ["HTML", "CSS", "JavaScript", "Motion Design"],
    live: `${PAGES}/Persona/`,
    source: `${GITHUB}/Persona`,
    images: [
      "images/persona-1.jpg",
      "images/persona-2.jpg",
      "images/persona-3.jpg",
      "images/persona-4.jpg",
      "images/persona-5.jpg"
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
      why: "To make reading about a game feel like playing it."
    },
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    live: `${PAGES}/Zelda/public/`,
    source: `${GITHUB}/Zelda`,
    images: [
      "images/zelda-1.jpg",
      "images/zelda-2.jpg",
      "images/zelda-3.jpg"
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
      why: "To experiment with playful UI and interaction beyond static pages."
    },
    tech: ["HTML", "CSS", "JavaScript"],
    live: `${PAGES}/Newjeans/`,
    source: `${GITHUB}/Newjeans`,
    images: [
      "images/newjeans-1.jpg",
      "images/newjeans-2.jpg",
      "images/newjeans-3.jpg",
      "images/newjeans-4.jpg"
    ]
  },

  {
    id: "heritage",
    title: "UK Heritage Trails 2026",
    filters: ["web", "2025"],
    period:
      "2025 — City, University of London · revamped 2026",
    subtitle: "Travel and cultural discovery website",
    description:
      "A travel and cultural discovery website first built in my Foundation Year and redesigned in 2026 with an editorial look. It covers responsive design, destination pages and visual storytelling, and has a sign-up flow backed by a small Cloudflare Worker.",
    summary: {
      what: "An editorial redesign with a saved \"My Trail\", seasonal themes and a sign-up form.",
      how: "Responsive HTML and CSS with vanilla JavaScript. A Cloudflare Worker stores the sign-ups.",
      why: "To revisit my Foundation Year site with stronger design and a real backend."
    },
    tech: ["HTML", "CSS", "JavaScript", "Cloudflare Workers"],
    live: `${PAGES}/UK-Heritage-Trails-2026/`,
    source: `${GITHUB}/UK-Heritage-Trails-2026`,
    images: [
      "images/heritage-1.jpg",
      "images/heritage-2.jpg",
      "images/heritage-3.jpg"
    ]
  },

  {
    id: "hollow",
    title: "The Hollow Spire",
    filters: ["game", "current"],
    period: "2026 — Goldsmiths, University of London",
    subtitle: "Turn-based RPG made with p5.js",
    description:
      "An original turn-based RPG built during my Computer Science studies at Goldsmiths, University of London. You climb three floors of the spire, explore each one, and defeat the Hollow Wisp, the Spire Reaper and the Abyssal King to claim the Spire Relic. Battles use attacks, Fire and Ice skills that exploit enemy weaknesses, elixirs and guarding. Move with WASD or the arrow keys, interact with E and select with Enter.",
    summary: {
      what: "A browser game with interactive storytelling and gameplay mechanics.",
      how: "JavaScript with the p5.js creative-coding library.",
      why: "To learn game loops, input handling and drawing."
    },
    tech: ["JavaScript", "p5.js"],
    live: `${PAGES}/hollow-spire/`,
    source: `${GITHUB}/hollow-spire`,
    images: [
      "images/hollow-1.jpg",
      "images/hollow-2.jpg",
      "images/hollow-3.jpg",
      "images/hollow-4.jpg"
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
   Only loaded while the card is on screen, so off-screen
   games are not running in the background.
   ========================================== */

const previewObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const box = entry.target;
            const frame = box.querySelector("iframe");
            if (!frame) return;

            if (entry.isIntersecting) {
              if (!frame.src) frame.src = box.dataset.live;
            } else if (frame.src) {
              frame.removeAttribute("src");
              box.classList.remove("is-loaded");
            }
          });
        },
        { rootMargin: "200px" }
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
  imageBox.classList.add("has-live");
  imageBox.dataset.live = project.live;

  const frame = document.createElement("iframe");
  frame.title = `${project.title} live preview`;
  frame.width = PREVIEW_WIDTH;
  frame.height = PREVIEW_HEIGHT;
  frame.tabIndex = -1;
  frame.setAttribute("aria-hidden", "true");
  frame.setAttribute("loading", "lazy");
  frame.setAttribute("sandbox", "allow-scripts allow-same-origin");
  frame.addEventListener("load", () => {
    if (frame.src) imageBox.classList.add("is-loaded");
  });

  imageBox.appendChild(frame);

  const badge = document.createElement("span");
  badge.className = "live-badge";
  badge.textContent = "● LIVE";

  const play = document.createElement("span");
  play.className = "play-overlay";
  play.textContent = "▶ Try it here";

  imageBox.append(badge, play);

  if (previewObserver) {
    previewObserver.observe(imageBox);
  } else {
    frame.src = project.live;
  }

  if (resizeObserver) resizeObserver.observe(imageBox);
  requestAnimationFrame(() => scalePreview(imageBox));
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
  button.addEventListener("click", () => openProject(project));

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

function openProject(project) {
  if (!dialog) return;

  document.getElementById("dialog-file").textContent =
    `${project.id}.project`;
  document.getElementById("dialog-date").textContent = project.period;
  document.getElementById("dialog-title").textContent = project.title;
  document.getElementById("dialog-description").textContent =
    project.description;

  /* WHAT / HOW / WHY */

  const summary = document.getElementById("dialog-summary");
  if (summary) {
    summary.replaceChildren();
    summary.hidden = !project.summary;
    if (project.summary) {
      ["what", "how", "why"].forEach(key => {
        const term = document.createElement("dt");
        term.textContent = key;
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
      dialogFrame.removeAttribute("src");
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

  dialog.showModal();
}

function closeProject() {
  if (!dialog) return;
  if (document.fullscreenElement) document.exitFullscreen();
  dialog.close();
}

if (dialogFrame && liveWrap) {
  dialogFrame.addEventListener("load", () => {
    if (dialogFrame.src) liveWrap.classList.add("is-loaded");
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

  /* Stop the embedded game/site when the popup closes */
  dialog.addEventListener("close", () => {
    if (dialogFrame) dialogFrame.removeAttribute("src");
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
