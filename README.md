# krazychase.github.io

Personal website built with React and TypeScript, automatically deployed to GitHub Pages.

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment happens automatically when code is pushed to the `main` branch.

### How it works

1. **Build Process**: The React app is built using `npm run build`
2. **Deployment**: The built files are deployed to GitHub Pages using the `gh-pages` npm package
3. **GitHub Action**: The `.github/workflows/deploy.yml` workflow handles the entire process

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```