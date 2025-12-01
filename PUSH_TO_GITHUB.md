# Push to GitHub - Step by Step Instructions

## Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: **`gangula-venkata-rishitha.github.io`** (exactly this format)
3. Description: "Portfolio website"
4. Make sure it's set to **Public**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, run these commands:

```bash
git remote add origin https://github.com/Gangula-Venkata-Rishitha/gangula-venkata-rishitha.github.io.git
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **"GitHub Actions"**
5. The deployment workflow will automatically start

## Step 4: Wait for Deployment

- Go to the **Actions** tab in your repository
- You'll see a workflow running called "Deploy to GitHub Pages"
- Wait 2-3 minutes for it to complete (you'll see a green checkmark)
- Once done, your site will be live at: **https://gangula-venkata-rishitha.github.io**

## Troubleshooting

If you see any errors in the Actions tab:
- Make sure the repository name is exactly `gangula-venkata-rishitha.github.io`
- Ensure GitHub Pages is set to use "GitHub Actions" as the source
- Check that all files were pushed successfully

