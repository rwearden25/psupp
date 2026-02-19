# Deploying to Railway — Step by Step

## Your folder should look like this:

```
📁 pump-support/
   ├── index.html          ← your app (already have this)
   ├── knowledge-base.js   ← your data (already have this)
   ├── Dockerfile           ← NEW (from this package)
   ├── nginx.conf           ← NEW (from this package)
   ├── railway.json         ← NEW (from this package)
   └── .gitignore           ← NEW (from this package)
```

## Step 1: Create a GitHub Repo

1. Go to https://github.com/new
2. Name it something like `pump-support`
3. Set it to **Private** (recommended)
4. Click **Create repository**

## Step 2: Push Your Files

Open a terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Initial deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pump-support.git
git push -u origin main
```

Or in VS Code: open the folder → Source Control tab → Initialize Repository → 
Stage All → Commit → Publish Branch.

## Step 3: Deploy on Railway

1. Go to https://railway.app and sign in with GitHub
2. Click **New Project**
3. Select **Deploy from GitHub repo**
4. Pick your `pump-support` repo
5. Railway will detect the Dockerfile and start building
6. Once deployed, go to **Settings → Networking → Generate Domain**
7. You'll get a URL like `pump-support-production.up.railway.app`

That's it — your site is live!

## Updating the Site

Any time you push changes to GitHub, Railway auto-deploys:

```bash
git add .
git commit -m "Updated knowledge base"
git push
```

## Later: Adding the AI Backend

When you're ready to add the Python/Node agent:

1. In your Railway project, click **+ New Service**
2. Connect your backend repo
3. Railway handles networking between frontend and backend automatically
4. Add your `ANTHROPIC_API_KEY` in the service's **Variables** tab
