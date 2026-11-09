# Bhavesh Gupta - Personal Academic Website

Personal homepage and academic portfolio of **Bhavesh Gupta**, Ph.D. Scholar and Prime Minister's Research Fellow (PMRF) at the Department of Physics, Center for Quantum Information, Communication and Computing (CQuICC), IIT Madras.

## Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (Static Export / SSG)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
* **Hosting:** [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Static Production Build

To generate the static HTML export into the `out/` directory:

```bash
npm run export
```

The output in `out/` can be served directly by any static web server (GitHub Pages, Netlify, Cloudflare Pages, Nginx, Apache).

---

## Deployment to GitHub Pages

This repository is configured for automated deployment to GitHub Pages via **GitHub Actions** (`.github/workflows/deploy.yml`):

1. Push your changes to the `main` branch.
2. In your repository on GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. The deployment workflow will trigger automatically and publish the site.
