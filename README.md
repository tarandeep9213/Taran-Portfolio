# AI-focused Full-Stack Developer Portfolio

This is a starter portfolio built with Vite + React + Tailwind CSS. It is a dark-themed, responsive site designed to showcase AI-focused full-stack work.

Quick features:
- Hero, Tech Stack, Featured Projects, About, Contact sections
- Responsive and mobile-friendly
- Tailwind CSS for quick styling
- Easy to deploy on Vercel or GitHub Pages

Getting started (PowerShell commands):

1) Install dependencies

```powershell
cd "C:/Users/Tarandeeps/Downloads/Profile"
npm install
```

2) Run locally

```powershell
npm run dev
# Open the URL shown (usually http://localhost:5173)
```

3) Build for production

```powershell
npm run build
```

Deploying to Vercel (recommended):
1. Install the Vercel CLI (optional) or use the Vercel web UI.

```powershell
npm i -g vercel
vercel login
vercel
```

Follow prompts — Vercel will detect this is a Vite app and deploy it. For GitHub integration, push the repo and connect it in Vercel.

Deploying to GitHub Pages:
1. Update `package.json` `homepage` to: `https://<your-github-username>.github.io/<repo-name>`
2. Commit and push the repo to GitHub.
3. Run:

```powershell
npm run deploy:gh
```

Replace placeholders (name, email, links, and project details) in the `src/components` files with your content before publishing.

If you want, I can:
- Replace placeholders with your real content
- Add analytics, a contact form integration, or blog routing
- Prepare a GitHub repo and push the code
