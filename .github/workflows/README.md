# GitHub Actions CI/CD Pipeline

This repository uses GitHub Actions for continuous integration and deployment.

## Workflows

### CI/CD Pipeline (`ci.yml`)

The main pipeline runs on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

#### Jobs

1. **Lint & Type Check**
   - Runs ESLint to check code quality
   - Performs TypeScript type checking
   - Must pass before other jobs run

2. **Build**
   - Builds the Next.js application
   - Uploads build artifacts for review
   - Runs only after linting passes

3. **Test**
   - Placeholder for future test suite
   - Currently passes with informational message
   - Will run unit tests, integration tests, etc. when added

4. **Deploy Preview** (PR only)
   - Deploys preview environment to Vercel
   - Only runs on pull requests
   - Requires Vercel secrets to be configured

5. **Deploy Production** (main branch only)
   - Deploys to production on Vercel
   - Only runs on pushes to `main` branch
   - Requires Vercel secrets to be configured

## Required Secrets

To enable deployment, add these secrets to your GitHub repository:

### Vercel Deployment Secrets

1. Go to your repository settings → Secrets and variables → Actions
2. Add the following secrets:

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `VERCEL_TOKEN` | Vercel authentication token | [Create token](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Your Vercel organization/team ID | Run `vercel project ls` or check `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Your Vercel project ID | Run `vercel project ls` or check `.vercel/project.json` |
| `DATABASE_URL` | PostgreSQL connection string | Your database provider (optional for build) |

### Getting Vercel IDs

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Get your IDs (stored in .vercel/project.json)
cat .vercel/project.json
```

## Adding Tests

When you're ready to add tests, update the `test` job:

1. Install a test framework (e.g., Jest, Vitest):
   ```bash
   npm install --save-dev vitest @vitejs/plugin-react
   ```

2. Add test script to `package.json`:
   ```json
   {
     "scripts": {
       "test": "vitest run",
       "test:watch": "vitest",
       "test:coverage": "vitest run --coverage"
     }
   }
   ```

3. Update `.github/workflows/ci.yml`:
   ```yaml
   - name: Run tests
     run: npm run test
   ```

4. (Optional) Add coverage reporting:
   ```yaml
   - name: Upload coverage reports
     uses: codecov/codecov-action@v4
     with:
       files: ./coverage/lcov.info
   ```

## Disabling Deployment

If you don't want automatic deployment, you can:

1. Remove the `deploy-preview` and `deploy-production` jobs from `ci.yml`
2. Or comment them out until you're ready to deploy

## Local Testing

Test the build process locally before pushing:

```bash
# Install dependencies
npm ci

# Run linter
npm run lint

# Type check
npx tsc --noEmit

# Build
npm run build

# Run tests (when added)
npm run test
```

## Branch Strategy

- `main` - Production branch (auto-deploys to Vercel production)
- `develop` - Development branch (runs CI checks)
- Feature branches - Create PRs to `develop` or `main` (deploys preview)

## Troubleshooting

### Build fails with "DATABASE_URL not found"

Add `DATABASE_URL` to your GitHub secrets, or update the build command to not require it during build time.

### Deployment fails

1. Verify all Vercel secrets are correctly set
2. Check that your Vercel project is properly linked
3. Ensure your Vercel account has sufficient permissions

### Linting fails

Run `npm run lint -- --fix` locally to auto-fix issues before committing.
