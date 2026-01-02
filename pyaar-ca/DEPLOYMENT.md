# Cloudflare Deployment Guide for Pyaar.ca

## The Problem

Your repository has this structure:
```
pyaar.ca-commercial/    (Repository root - what Cloudflare sees)
├── .git/
└── pyaar-ca/          (Your Next.js application)
    ├── package.json
    ├── src/
    └── ...
```

When Cloudflare tries to build, it looks for `package.json` in the root directory (`/opt/buildhome/repo/`) but your actual application is in the `pyaar-ca/` subdirectory.

## The Solution

### Option 1: Update Cloudflare Build Configuration (Recommended)

In your Cloudflare Pages project settings, update the **Root directory** to point to your application:

**Cloudflare Pages Settings:**
- **Root directory**: `pyaar-ca`
- **Build command**: `npm run build && npx @opennextjs/cloudflare@latest build`
- **Build output directory**: `.open-next/assets`

### Option 2: Move Files to Repository Root

Alternatively, you could restructure your repository to have the Next.js app at the root:

```bash
# Move all files from pyaar-ca/ to root
cd /Volumes/MINIEXT/IdeaProjects/pyaar.ca-commercial
mv pyaar-ca/* .
mv pyaar-ca/.* . 2>/dev/null || true
rmdir pyaar-ca
```

Then update Cloudflare settings:
- **Root directory**: `/` (or leave blank)
- **Build command**: `npm run build && npx @opennextjs/cloudflare@latest build`
- **Build output directory**: `.open-next/assets`

## Step-by-Step: Fix Current Deployment

1. Go to your Cloudflare Dashboard
2. Navigate to **Pages** → Your project (`pyaar-ca`)
3. Go to **Settings** → **Builds & deployments**
4. Under "Build configurations", click **Edit configuration**
5. Update these fields:
   - **Root directory**: `pyaar-ca`
   - **Build command**: `npm run build && npx @opennextjs/cloudflare@latest build`
   - **Build output directory**: `.open-next/assets`
6. Click **Save**
7. Go to **Deployments** and click **Retry deployment**

## Expected Build Output

When configured correctly, you should see:
```
✓ Compiled successfully
✓ Generating static pages
Route (app)                    Size  First Load JS
┌ ○ /                         163 B         106 kB
├ ○ /privacy-policy          124 B         102 kB
├ ○ /quiz                  4.94 kB         107 kB
└ ○ /results               1.85 kB         107 kB
```

## Verification

After deployment, verify:
1. Visit your deployed URL (e.g., `pyaar-ca.pages.dev`)
2. Check that all pages load correctly:
   - Homepage: `/`
   - Quiz: `/quiz`
   - Results: `/results`
   - Privacy Policy: `/privacy-policy`
3. Check that `yourdomain.pages.dev/ads.txt` returns your Google AdSense configuration
4. Check that `yourdomain.pages.dev/robots.txt` is accessible

## Custom Domain Setup

Once deployment works:
1. Go to **Pages** → Your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter `pyaar.ca`
4. Add the DNS records Cloudflare provides to your domain registrar
5. Wait for DNS propagation (can take up to 24 hours)

## Troubleshooting

### Build fails with "ENOENT: no such file or directory, open '/opt/buildhome/repo/package.json'"
- **Solution**: Set **Root directory** to `pyaar-ca`

### Build succeeds but site doesn't work
- Check the build output directory is set to `.open-next/assets`
- Verify the build command includes `npx @opennextjs/cloudflare@latest build`

### Pages show 404 errors
- Ensure all routes are properly generated during build
- Check the build logs for any errors during static page generation

## Alternative: Deploy Using Wrangler CLI

You can also deploy directly from your local machine:

```bash
cd /Volumes/MINIEXT/IdeaProjects/pyaar.ca-commercial/pyaar-ca

# Build the application
npm run build

# Deploy using the included script
npm run deploy

# Or manually with wrangler
npx wrangler pages deploy .open-next/assets --project-name=pyaar-ca
```

This bypasses the Git integration and uploads directly from your machine.

