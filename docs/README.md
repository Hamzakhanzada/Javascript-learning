# Toaster Demo (docs)

This `docs/` folder contains a minimal toaster UI demo that you can publish via GitHub Pages.

Files
- `index.html` — demo page (Tailwind CDN used for styling)
- `script.js` — reusable `Toast.show(message, {type, duration})` utility and demo wiring

How to publish (GitHub Pages)
1. Commit and push this branch to GitHub (main).
2. In your repository settings -> Pages, set the source to `main` branch and folder `docs/`.
3. After a minute, your demo should be available at `https://<owner>.github.io/<repo>/`.

Alternatives
- Drop `docs/index.html` into CodePen/JSFiddle/Playground to preview instantly.
- Deploy via Netlify or Vercel by pointing to the repository or uploading the `docs/` folder.

Notes
- CDN Tailwind is used for quick styling in the demo. For production, build Tailwind and purge unused styles for smaller size.