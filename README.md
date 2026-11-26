# Portfolio Revamp

A revamp of my [developer portfolio](https://github.com/mikey101101/Portfolio). The projects section now embeds my recent projects live:

- Each card shows a **live preview** of the deployed site. Previews only load while the card is on screen.
- Click a card to **play or use the project inside the portfolio**, full screen if you like. You can also switch to screenshots, open the live site, or view the source on GitHub.
- Filter by Games, Interactive Sites, 2026 or 2025.
- Link straight to a project with `projects.html?project=<id>`, for example `?project=ashen-hollow`.

Projects: Ashen Hollow, Gaming Map Revamp, Persona: Beyond the Mask, Hyrule Encyclopedia, NewJeans Chat Archive, UK Heritage Trails 2026 and The Hollow Spire.

To add a project, add an entry to the `projects` array in `script.js`.

Static HTML, CSS and JavaScript with no build step. Open `index.html` or serve the folder with `python3 -m http.server`.
