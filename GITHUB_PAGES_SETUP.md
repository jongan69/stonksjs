# GitHub Pages Setup Guide

This guide will help you set up GitHub Pages deployment for the stonksjs
documentation.

## 🚀 Quick Setup

### 1. Enable GitHub Pages

1. Go to your repository: `https://github.com/jongan69/stonksjs`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 2. Repository Permissions

Make sure your repository has the correct permissions:

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Save changes

### 3. Deploy Documentation

The documentation will be automatically deployed when you:

- **Push to main branch** ✅ (Already configured)
- **Create a release** ✅ (Already configured)
- **Trigger manually** ✅ (Available in Actions tab)

## 📋 What's Included

### GitHub Actions Workflow

- **File**: `.github/workflows/github-pages.yml`
- **Triggers**: Push to main, releases, manual
- **Process**: Build → Generate docs → Deploy to GitHub Pages

### Custom Documentation

- **Landing Page**: Beautiful homepage with package overview
- **API Documentation**: Auto-generated from TypeDoc
- **Responsive Design**: Works on desktop and mobile
- **Dark Mode**: Automatic based on system preferences

### Features

- 📊 Package overview with quick start guide
- 🔗 Direct links to API documentation
- 📱 Mobile-responsive design
- 🎨 Custom styling and branding
- ⚡ Fast loading with optimized assets

## 🌐 Access Your Documentation

Once deployed, your documentation will be available at:
**https://jongan69.github.io/stonksjs/**

## 🛠️ Local Development

### Build and Serve Locally

```bash
# Quick start
npm run docs:local

# Or manually
npm run build
npm run docs
npx serve docs
```

### Customize Documentation

1. **Styling**: Edit `docs/assets/custom.css`
2. **Content**: Modify the HTML in `.github/workflows/github-pages.yml`
3. **API Docs**: Update JSDoc comments in source code

## 📦 Package Documentation Structure

```
docs/
├── index.html              # Custom landing page
├── modules/                # API documentation
│   ├── _stonksjs_core.html
│   ├── _stonksjs_finviz.html
│   ├── _stonksjs_quote.html
│   └── _stonksjs_stock_screener.html
├── classes/                # Class documentation
├── functions/              # Function documentation
├── types/                  # TypeScript types
├── variables/              # Variable documentation
└── assets/                 # CSS, JS, images
    ├── style.css
    ├── highlight.css
    ├── custom.css          # Custom styling
    ├── logo.svg
    └── main.js
```

## 🔧 Configuration Files

### GitHub Actions Workflow

- **File**: `.github/workflows/github-pages.yml`
- **Purpose**: Builds and deploys documentation
- **Customizable**: Yes, edit the HTML template in the workflow

### TypeDoc Configuration

- **File**: `config/typedoc.js`
- **Purpose**: Configures API documentation generation
- **Customizable**: Yes, modify TypeDoc options

### Custom Styling

- **File**: `docs/assets/custom.css`
- **Purpose**: Custom CSS for documentation
- **Customizable**: Yes, modify colors, layout, etc.

## 🎨 Customization Options

### Colors and Branding

Edit `docs/assets/custom.css`:

```css
:root {
  --primary-color: #2563eb; /* Your brand color */
  --accent-color: #10b981; /* Accent color */
  --background-color: #ffffff; /* Background */
  --text-color: #1e293b; /* Text color */
}
```

### Landing Page Content

Edit the HTML template in `.github/workflows/github-pages.yml`:

```html
<header>
  <img src="assets/logo.svg" alt="stonksjs" class="logo" />
  <h1>Your Project Name</h1>
  <p class="subtitle">Your project description</p>
</header>
```

### Package Information

Update the package cards in the landing page:

```html
<div class="package-card">
  <h3>@your-scope/package-name</h3>
  <p>Package description</p>
  <a href="modules/_package_name.html" class="btn">View API</a>
</div>
```

## 🐛 Troubleshooting

### Common Issues

1. **Documentation not deploying**

   - Check GitHub Actions workflow status
   - Verify repository permissions
   - Ensure GitHub Pages is enabled

2. **Missing API documentation**

   - Check TypeDoc configuration
   - Verify JSDoc comments in source code
   - Ensure build process completes successfully

3. **Styling issues**

   - Check CSS file paths
   - Verify custom.css is included
   - Test responsive design

4. **404 errors**
   - Check file paths in HTML
   - Verify assets are properly linked
   - Ensure all files are committed

### Getting Help

- Check [GitHub Actions logs](https://github.com/jongan69/stonksjs/actions)
- Review [GitHub Pages documentation](https://docs.github.com/en/pages)
- Open an [issue](https://github.com/jongan69/stonksjs/issues)

## 🚀 Advanced Features

### Custom Domain (Optional)

1. Add a `CNAME` file to the `docs/` directory
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings

### Analytics (Optional)

Add Google Analytics or other tracking:

```html
<!-- Add to <head> section -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Search Functionality

The documentation includes built-in search functionality powered by TypeDoc.

## 📝 Maintenance

### Regular Updates

- Documentation updates automatically on code changes
- No manual intervention required
- Version-specific documentation for releases

### Monitoring

- Check deployment status in GitHub Actions
- Monitor documentation accessibility
- Review user feedback and issues

## 🎉 Success!

Once set up, your documentation will be:

- ✅ Automatically updated on code changes
- ✅ Accessible at a professional URL
- ✅ Mobile-responsive and fast
- ✅ Searchable and well-organized
- ✅ Branded with your project identity

Your stonksjs documentation is now ready to help users discover and use your
packages! 🚀
