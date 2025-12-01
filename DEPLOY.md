# GitHub Pages Deployment Guide

## Quick Setup Steps

### 1. Create GitHub Repository

**Option A: Regular Repository (Recommended for testing)**
- Go to https://github.com/new
- Repository name: `HONEY` (or any name you prefer)
- Make it **Public**
- Don't initialize with README (we already have one)
- Click "Create repository"

**Option B: Portfolio Repository (For username.github.io)**
- Repository name: `gangula-venkata-rishitha.github.io`
- Must be **Public**
- This gives you a custom URL: `https://gangula-venkata-rishitha.github.io`

### 2. Push Your Code to GitHub

Run these commands in your terminal:

```bash
# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repository as remote (replace YOUR_REPO_NAME)
git remote add origin https://github.com/Gangula-Venkata-Rishitha/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_REPO_NAME` with:**
- `HONEY` if using Option A
- `gangula-venkata-rishitha.github.io` if using Option B

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically trigger and deploy your site

### 4. Access Your Portfolio

After deployment completes (about 2-3 minutes):

- If repo is `HONEY`: `https://gangula-venkata-rishitha.github.io/HONEY/`
- If repo is `gangula-venkata-rishitha.github.io`: `https://gangula-venkata-rishitha.github.io/`

### 5. Update Base Path (if using Option A)

If your repo name is NOT `gangula-venkata-rishitha.github.io`, update `vite.config.ts`:

Change this line:
```typescript
const base = process.env.GITHUB_PAGES === 'true' ? '/HONEY/' : '/';
```

Replace `HONEY` with your actual repository name.

### 6. Automatic Deployment

Every time you push changes to the `main` branch, GitHub Actions will:
1. Build your site
2. Deploy it to GitHub Pages
3. Your site will be updated automatically

## Troubleshooting

### Build Fails
- Check the Actions tab in GitHub for error details
- Ensure all dependencies are in `package.json`
- Verify `vite.config.ts` is correct

### 404 Errors
- Make sure the base path in `vite.config.ts` matches your repo name
- Check that GitHub Pages is set to use "GitHub Actions" as source
- Wait a few minutes after first deployment

### Images/Assets Not Loading
- Ensure all assets are in the `public/` folder
- Use relative paths starting with `/` (e.g., `/image.jpg`)

## Need Help?

- Check GitHub Actions logs: Your Repo → Actions tab
- GitHub Pages docs: https://docs.github.com/en/pages

