# Publishing Guide for @jongan69/stonksjs

This guide will help you publish your updated fork of stonksjs to npm under the
`@jongan69` scope.

## 📋 **Pre-Publishing Checklist**

### ✅ **Completed Tasks:**

- [x] Updated all package names to use `@jongan69` scope
- [x] Bumped version to 4.0.0 (breaking changes)
- [x] Updated author information to Jonathan Gan
- [x] Updated repository URLs to point to your fork
- [x] Fixed 403 errors with proper headers and rate limiting
- [x] Updated all import statements
- [x] Built all packages successfully
- [x] Tested examples work correctly

### 🔄 **Remaining Tasks:**

- [ ] Update README documentation
- [ ] Create GitHub repository
- [ ] Set up npm authentication
- [ ] Publish packages to npm

## 🚀 **Publishing Steps**

### 1. **Create GitHub Repository**

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial commit - updated stonksjs fork with security fixes and improvements"

# Add your GitHub repository as remote
git remote add origin https://github.com/jongan69/stonksjs.git

# Push to GitHub
git push -u origin main
```

### 2. **Set up npm Authentication**

```bash
# Login to npm (you'll need an npm account)
npm login

# Verify you're logged in
npm whoami
```

### 3. **Test Publishing (Dry Run)**

```bash
# Test publishing without actually publishing
npm publish --dry-run

# Or test individual packages
cd packages/finviz
npm publish --dry-run
```

### 4. **Publish Packages**

You have two options:

#### Option A: Publish All Packages at Once (Recommended)

```bash
# From the root directory
npm run release
```

#### Option B: Publish Individual Packages

```bash
# Publish in dependency order
cd packages/finviz
npm publish

cd ../quote
npm publish

cd ../stock-screener
npm publish

cd ../core
npm publish

# Finally publish the main package
cd ../..
npm publish
```

### 5. **Verify Publication**

```bash
# Check if packages are published
npm view @jongan69/stonksjs-core
npm view @jongan69/stonksjs-finviz
npm view @jongan69/stonksjs-quote
npm view @jongan69/stonksjs-stock-screener
npm view @jongan69/stonksjs
```

## 📦 **Package Information**

Your packages will be published as:

| Package        | npm Name                            | Description                         |
| -------------- | ----------------------------------- | ----------------------------------- |
| Main           | `@jongan69/stonksjs`                | Root package with all dependencies  |
| Core           | `@jongan69/stonksjs-core`           | Single entry point for all packages |
| Finviz         | `@jongan69/stonksjs-finviz`         | Unofficial Finviz API               |
| Quote          | `@jongan69/stonksjs-quote`          | Cached quote data retrieval         |
| Stock Screener | `@jongan69/stonksjs-stock-screener` | Pre-defined stock screeners         |

## 🔧 **Installation Instructions for Users**

Once published, users can install your packages with:

```bash
# Install the main package (includes all sub-packages)
npm install @jongan69/stonksjs

# Or install individual packages
npm install @jongan69/stonksjs-core
npm install @jongan69/stonksjs-finviz
npm install @jongan69/stonksjs-quote
npm install @jongan69/stonksjs-stock-screener
```

## 📝 **Usage Example**

```javascript
// Users can import like this:
const { finviz, quote, stockScreener } = require('@jongan69/stonksjs-core');

// Or individual packages:
const finviz = require('@jongan69/stonksjs-finviz');
const quote = require('@jongan69/stonksjs-quote');
const stockScreener = require('@jongan69/stonksjs-stock-screener');
```

## 🚨 **Important Notes**

### **Breaking Changes in v4.0.0:**

- **Node.js requirement**: Updated from v16.20.2 to v18.14.0+
- **Bun support**: Added support for Bun package manager
- **Security fixes**: Fixed 403 errors with proper headers
- **Dependency updates**: Updated all dependencies to latest versions

### **Migration Guide for Users:**

Users upgrading from the original `@stonksjs/*` packages will need to:

1. Update Node.js to v18.14.0 or higher
2. Change import statements from `@stonksjs/*` to `@jongan69/stonksjs-*`
3. Update package.json dependencies

### **Example Migration:**

```javascript
// Before (original packages)
const { finviz } = require('@stonksjs/core');

// After (your packages)
const { finviz } = require('@jongan69/stonksjs-core');
```

## 🔄 **Future Updates**

To publish updates in the future:

1. Make your changes
2. Update version numbers in package.json files
3. Update CHANGELOG.md (create one if it doesn't exist)
4. Commit and push changes
5. Run `npm run release` to publish

## 📞 **Support**

- **GitHub Issues**: https://github.com/jongan69/stonksjs/issues
- **npm Package**: https://www.npmjs.com/package/@jongan69/stonksjs

## 🎉 **Success!**

Once published, your packages will be available to the community with:

- ✅ All security vulnerabilities fixed
- ✅ Modern Node.js support
- ✅ Working Finviz API integration
- ✅ Comprehensive examples and documentation
- ✅ Bun package manager support

Good luck with your publication! 🚀
