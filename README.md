# Portfolio - Gangula Venkata Rishitha

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Design**: Clean, Apple-inspired UI with smooth animations
- **Responsive**: Works seamlessly on all devices
- **Dynamic Projects**: Showcase your work with interactive project cards
- **GitHub Integration**: Automatically fetches and displays your repositories
- **Resume Download**: Easy access to download resume
- **Certifications**: Display your achievements and certifications
- **Contact Form**: Functional contact form with email integration

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Gangula-Venkata-Rishitha/HONEY.git
cd HONEY
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 GitHub Pages Deployment

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Create GitHub Repository:**
   - Go to GitHub and create a new repository (name it `HONEY` or `gangula-venkata-rishitha.github.io` for custom domain)
   
2. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/Gangula-Venkata-Rishitha/HONEY.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will automatically deploy when you push to the `main` branch

4. **Access Your Site:**
   - If repo is `HONEY`: `https://gangula-venkata-rishitha.github.io/HONEY/`
   - If repo is `gangula-venkata-rishitha.github.io`: `https://gangula-venkata-rishitha.github.io/`

### Update Base Path (if needed):

If you're using `username.github.io` repository name, update `vite.config.ts`:
```typescript
const base = process.env.GITHUB_PAGES === 'true' ? '/' : '/';
```

For a custom repository name, keep it as:
```typescript
const base = process.env.GITHUB_PAGES === 'true' ? '/HONEY/' : '/';
```

## 📝 Customization

- Update personal information in `constants.ts`
- Replace profile image in `public/` folder
- Update resume PDF in `public/RISHITHA_RESUME_FINAL.pdf`
- Modify colors and styles in component files

## 📄 License

This project is open source and available under the MIT License.
