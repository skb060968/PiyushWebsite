# 🚀 GitHub Actions Deployment Guide

This guide explains how to configure GitHub Actions to automatically deploy your Piyush Bholla Fashion website to GitHub Pages.

## 📋 Prerequisites

- GitHub repository created
- Code pushed to GitHub
- GitHub Pages enabled in repository settings

## ⚙️ Configuration Steps

### 1. **Repository Settings**

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**

### 2. **Workflow Configuration**

The workflow file is already created at `.github/workflows/deploy.yml`. This workflow:

- ✅ Triggers on push to `main` or `master` branch
- ✅ Sets up Node.js 18
- ✅ Installs dependencies with caching
- ✅ Builds the Next.js application
- ✅ Deploys to GitHub Pages

### 3. **Next.js Configuration**

The `next.config.js` is configured for static export:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/piyush-bholla-fashion' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/piyush-bholla-fashion/' : '',
}
```

### 4. **Package.json Scripts**

Updated scripts for deployment:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "deploy": "npm run build"
  }
}
```

## 🔧 Manual Deployment Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Deploy Piyush Bholla Fashion website"
git push origin main
```

### Step 2: Monitor Deployment
1. Go to **Actions** tab in your GitHub repository
2. Watch the deployment workflow run
3. Check for any errors in the build process

### Step 3: Access Your Website
Once deployed, your website will be available at:
```
https://yourusername.github.io/piyush-bholla-fashion
```

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. **Build Fails - TypeScript Errors**
```bash
# Run type check locally
npm run type-check

# Fix any TypeScript errors before pushing
```

#### 2. **Images Not Loading**
- Ensure images are in `public/images/` folder
- Use relative paths: `/images/about/image.jpg`
- Check `next.config.js` has `unoptimized: true`

#### 3. **404 Errors on Refresh**
- Ensure `trailingSlash: true` in next.config.js
- GitHub Pages serves static files, no server-side routing

#### 4. **CSS/JS Not Loading**
- Check `basePath` and `assetPrefix` in next.config.js
- Ensure they match your repository name

### Debug Commands

```bash
# Test build locally
npm run build

# Check for TypeScript errors
npm run type-check

# Run linting
npm run lint

# Test production build locally
npm run start
```

## 📁 File Structure for Deployment

```
piyush-bholla-fashion/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── app/                        # Next.js app directory
├── components/                 # React components
├── public/
│   └── images/                # Static images
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🔄 Automatic Deployment Workflow

1. **Developer pushes code** to `main` branch
2. **GitHub Actions triggers** the workflow
3. **Workflow runs**:
   - Checks out code
   - Sets up Node.js
   - Installs dependencies
   - Builds Next.js app
   - Deploys to GitHub Pages
4. **Website updates** automatically

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add `CNAME` file to `public/` folder:
   ```
   piyushbholla.com
   ```

2. Configure DNS settings:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

3. Update repository settings:
   - Go to Settings > Pages
   - Add custom domain
   - Enable "Enforce HTTPS"

## 📊 Monitoring

### Check Deployment Status
- **Actions Tab**: See workflow runs and logs
- **Environments**: View deployment history
- **Pages Settings**: Check deployment status

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Check mobile responsiveness

## 🔐 Security

### Environment Variables
For sensitive data, use GitHub Secrets:

1. Go to Settings > Secrets and variables > Actions
2. Add repository secrets
3. Reference in workflow: `${{ secrets.SECRET_NAME }}`

### Permissions
The workflow uses minimal required permissions:
- `contents: read` - Read repository content
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - OIDC token for deployment

## 📈 Optimization Tips

1. **Enable Caching**: Workflow includes Next.js cache
2. **Optimize Images**: Use WebP format when possible
3. **Minimize Bundle**: Remove unused dependencies
4. **CDN**: GitHub Pages includes global CDN

## 🆘 Support

If you encounter issues:

1. Check the **Actions** tab for error logs
2. Review the **build output** for specific errors
3. Ensure all **dependencies** are properly installed
4. Verify **Next.js configuration** matches requirements

---

**Happy Deploying! 🎉**