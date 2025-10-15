# Portfolio — GitHub Pages Ready

A minimal, fast portfolio landing you can deploy to GitHub Pages in minutes.

## Quick start

1. **Create a new GitHub repo**, e.g. `yourname.github.io` (or any repo name).
2. Upload the files from this folder (or unzip the provided archive and push).
3. In **Settings → Pages**, set **Build and deployment** to:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (or `master`) / **Folder:** `/root`
4. Wait for the build to finish. Your site will be live at:
   - `https://<user>.github.io/` (for user/organization pages), or
   - `https://<user>.github.io/<repo>/` (for project pages).

## Customize

- Edit text in `index.html` (name, intro, links).
- Add/modify projects in the `<script id="project-data">[...]</script>` block.
- Update colors or spacing in `styles.css` under the `:root` tokens.
- Replace `assets/logo.svg` and `assets/favicon.svg` if you like.

No build tools. Pure HTML/CSS/JS. Fast by default.

## Local preview

Just open `index.html` in your browser (no server needed).
