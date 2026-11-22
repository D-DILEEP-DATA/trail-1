# Ironworks Gym - practice site for Cloudflare Pages

Plain HTML, CSS and JS. No build step.

## Deploy with Cloudflare Pages

Option A: Direct upload
1. Cloudflare dashboard > Workers & Pages > Create > Pages > Upload assets.
2. Name the project, then drag in this folder (or the unzipped contents).
3. Click Deploy. You get a *.pages.dev URL.

Option B: Git
1. Push this folder to a GitHub repo.
2. Workers & Pages > Create > Pages > Connect to Git, pick the repo.
3. Framework preset: None. Build command: leave empty. Output directory: /
4. Save and Deploy. Every push redeploys automatically.

Make sure index.html is at the root of what you upload, not inside an extra subfolder.
