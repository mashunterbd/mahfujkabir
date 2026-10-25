# 🚀 Deployment Guide - mahfujkabir.com

Quick reference for deploying to Cloudflare Pages with custom domain.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [x] ✅ Site URL configured in `astro.config.mjs`: `https://mahfujkabir.com`
- [x] ✅ Sitemap URL in `robots.txt`: `https://mahfujkabir.com/sitemap-index.xml`
- [ ] ⚠️ Analytics configured in `src/data/site.json` (Plausible or GA4)
- [ ] ⚠️ Contact form endpoint configured in `src/data/site.json`
- [ ] ⚠️ Real contact data (email, phone) in `src/data/site.json`
- [ ] ⚠️ All content reviewed and finalized
- [ ] ⚠️ Local build tested: `npm run build && npm run preview`
- [ ] ⚠️ Lighthouse audit passed (Performance 90+)

---

## 🌐 Option 1: Git Integration (Recommended)

**Automatic deployment on every push to main branch.**

### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - mahfujkabir.com ready for production"

# Add remote repository (create on GitHub first)
git remote add origin https://github.com/YOUR_USERNAME/mahfujkabir-site.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. **Log in**: https://dash.cloudflare.com
2. **Navigate**: Workers & Pages > Create application > Pages tab
3. **Connect to Git**: Authorize GitHub access
4. **Select repository**: `mahfujkabir-site`
5. **Configure build**:
   - **Project name**: `mahfujkabir`
   - **Production branch**: `main`
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. **Deploy**: Click "Save and Deploy"

**Result**: Live at `https://mahfujkabir.pages.dev` in ~3-5 minutes.

### Step 3: Future Updates

```bash
# Make changes
npm run dev

# Test changes
# ... edit files ...

# Commit and push (triggers automatic deployment)
git add .
git commit -m "Update: description of changes"
git push origin main
```

Monitor deployment: Cloudflare Dashboard > Workers & Pages > mahfujkabir > View details

---

## 🔧 Option 2: Direct Upload (Manual)

**Manual deployment via Wrangler CLI.**

### Setup

```bash
# Install Wrangler globally
npm install -g wrangler

# Authenticate
wrangler login
```

### Deploy

```bash
# Build production files
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=mahfujkabir --branch=main
```

**Result**: Deployed to production at `https://mahfujkabir.pages.dev`

---

## 🌍 Custom Domain Setup

### Prerequisites

- Domain `mahfujkabir.com` registered
- Access to domain registrar (to update nameservers)
- Cloudflare account

---

### Step 1: Add Domain to Cloudflare

**If domain is NOT already on Cloudflare:**

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Add site** > Enter `mahfujkabir.com` > **Add site**
3. Select **Free** plan > **Continue**
4. Cloudflare scans DNS records > **Continue**
5. **Update nameservers at domain registrar**:
   - Log in to domain registrar (e.g., Namecheap, GoDaddy, Google Domains)
   - Find DNS/Nameserver settings
   - Replace existing nameservers with Cloudflare's:
     ```
     ava.ns.cloudflare.com
     billy.ns.cloudflare.com
     ```
     *(Your actual nameservers shown in Cloudflare dashboard)*
   - Save changes
6. Wait for propagation: 2-24 hours (usually <1 hour)
7. Verify status: Cloudflare > Overview > Status: **Active**

**If domain is ALREADY on Cloudflare:** Skip to Step 2.

---

### Step 2: Connect Custom Domain to Pages

1. **Navigate**: Cloudflare Dashboard > Workers & Pages > `mahfujkabir` project
2. **Custom domains** tab > **Set up a custom domain**
3. **Enter domain**: `mahfujkabir.com`
4. **Continue**

Cloudflare automatically:
- ✅ Creates DNS record (CNAME to `mahfujkabir.pages.dev`)
- ✅ Issues SSL certificate (usually within 5-10 minutes)
- ✅ Configures CDN caching

---

### Step 3: Add www Subdomain (Optional but Recommended)

1. **Custom domains** tab > **Set up a custom domain** (again)
2. **Enter domain**: `www.mahfujkabir.com`
3. **Continue**

Now both `mahfujkabir.com` and `www.mahfujkabir.com` work.

---

### Step 4: Verify DNS Records

**Navigate**: Cloudflare > DNS > Records

**Required records** (auto-created by Cloudflare Pages):

| Type  | Name | Content                   | Proxy Status |
|-------|------|---------------------------|--------------|
| CNAME | @    | mahfujkabir.pages.dev     | Proxied ☁️   |
| CNAME | www  | mahfujkabir.pages.dev     | Proxied ☁️   |

**Proxy Status**: Orange cloud icon = Proxied (enabled CDN, caching, security)

---

### Step 5: Force HTTPS & Redirect Rules

#### Enable Always Use HTTPS

1. **Navigate**: Cloudflare > SSL/TLS > Edge Certificates
2. **Always Use HTTPS**: Toggle ON (enabled by default)

Now `http://mahfujkabir.com` → redirects to → `https://mahfujkabir.com`

#### Redirect www to non-www (or vice versa)

**Option A: Keep both** (recommended)
- No action needed. Both `mahfujkabir.com` and `www.mahfujkabir.com` work independently.

**Option B: Redirect www → non-www**
1. **Navigate**: Cloudflare > Rules > Redirect Rules > **Create rule**
2. **Rule name**: `Redirect www to apex`
3. **Custom filter expression**:
   ```
   (http.host eq "www.mahfujkabir.com")
   ```
4. **Type**: Permanent (301)
5. **Expression**:
   ```
   concat("https://mahfujkabir.com", http.request.uri.path)
   ```
6. **Preserve query string**: ✅ Enabled
7. **Save**

**Option C: Redirect non-www → www**
1. Same steps, but swap domains:
   - Filter: `(http.host eq "mahfujkabir.com")`
   - Expression: `concat("https://www.mahfujkabir.com", http.request.uri.path)`

---

### Step 6: Optimize Cloudflare Settings

#### Speed Optimization

**Navigate**: Cloudflare > Speed > Optimization

| Setting           | Recommended Value |
|-------------------|-------------------|
| Auto Minify       | CSS ✅, JS ✅, HTML ✅ |
| Brotli            | Enabled (default) |
| Early Hints       | Enabled           |
| Rocket Loader     | Disabled (not needed with Astro) |

#### Caching

**Navigate**: Cloudflare > Caching > Configuration

| Setting                | Value                        |
|------------------------|------------------------------|
| Caching Level          | Standard                     |
| Browser Cache TTL      | Respect Existing Headers     |
| Always Online          | Enabled                      |

#### Security

**Navigate**: Cloudflare > Security > Settings

| Setting            | Value             |
|--------------------|-------------------|
| Security Level     | Medium            |
| Bot Fight Mode     | Enabled           |
| Challenge Passage  | 30 minutes        |

#### Network

**Navigate**: Cloudflare > Network

| Setting                        | Value     |
|--------------------------------|-----------|
| HTTP/3 (with QUIC)             | Enabled   |
| 0-RTT Connection Resumption    | Enabled   |
| WebSockets                     | Enabled   |

---

## ✅ Verification Checklist

After deployment:

### 1. Test URLs

- [ ] https://mahfujkabir.com (loads correctly)
- [ ] https://www.mahfujkabir.com (loads correctly or redirects)
- [ ] http://mahfujkabir.com (redirects to HTTPS)
- [ ] All pages load: /about, /contact, /timeline, /gallery, /news, /social
- [ ] Images load correctly
- [ ] Forms submit (if configured)

### 2. SSL Certificate

- [ ] Click padlock icon in browser
- [ ] Certificate issued by: Cloudflare
- [ ] Valid for: `mahfujkabir.com` and `*.mahfujkabir.com`
- [ ] No security warnings

### 3. DNS Propagation

Visit: https://dnschecker.org
- [ ] Enter `mahfujkabir.com`
- [ ] Shows Cloudflare nameservers globally (green checkmarks)

### 4. Performance

Run Lighthouse audit (Chrome DevTools):
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 95+

Global speed test: https://www.webpagetest.org
- [ ] First Contentful Paint: <1.5s (most locations)
- [ ] Speed Index: <2.5s

### 5. Functionality

- [ ] Navigation menu works
- [ ] Gallery lightbox works (keyboard: Arrow keys, Esc)
- [ ] Contact form submits (if configured)
- [ ] Social media links open correctly
- [ ] Video embeds load (YouTube, Facebook)
- [ ] Mobile responsive (test on real device)
- [ ] Footer links work

### 6. SEO

- [ ] Sitemap accessible: https://mahfujkabir.com/sitemap-index.xml
- [ ] Robots.txt accessible: https://mahfujkabir.com/robots.txt
- [ ] Meta tags present (View Page Source > `<head>` section)
- [ ] Open Graph image loads (share link on Facebook/WhatsApp)

---

## 🔄 Continuous Deployment Workflow

### Daily Development

```bash
# Start development server
npm run dev

# Make changes to files
# ... edit, save, preview in browser ...

# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to trigger automatic deployment
git push origin main
```

### Monitor Deployment

1. Visit: https://dash.cloudflare.com
2. Navigate: Workers & Pages > mahfujkabir
3. View: Deployment history, build logs, analytics

### Rollback (if needed)

1. Workers & Pages > mahfujkabir > Deployments
2. Find previous working deployment
3. Click **...** (three dots) > **Rollback to this deployment**
4. Confirm

---

## 📊 Post-Deployment Setup

### 1. Analytics

**Option A: Cloudflare Web Analytics (Free, Privacy-Friendly)**

1. Navigate: Cloudflare > Analytics > Web Analytics
2. Click **Add a site** > Enter `mahfujkabir.com`
3. Copy JS snippet
4. Add to `src/layouts/BaseLayout.astro` in `<head>` section

**Option B: Plausible (Paid, Privacy-Friendly)**

1. Sign up: https://plausible.io
2. Add domain: `mahfujkabir.com`
3. Update `src/data/site.json`:
   ```json
   {
     "analytics": {
       "plausible": "mahfujkabir.com"
     }
   }
   ```
4. Commit and push

**Option C: Google Analytics 4 (Free)**

1. Create GA4 property: https://analytics.google.com
2. Get measurement ID (format: `G-XXXXXXXXXX`)
3. Update `src/data/site.json`:
   ```json
   {
     "analytics": {
       "ga4": "G-XXXXXXXXXX"
     }
   }
   ```
4. Commit and push

### 2. Uptime Monitoring

**Option A: Cloudflare Health Checks (Paid)**
- Navigate: Cloudflare > Traffic > Health Checks

**Option B: UptimeRobot (Free)**
1. Sign up: https://uptimerobot.com
2. Add Monitor:
   - **Type**: HTTP(S)
   - **URL**: https://mahfujkabir.com
   - **Interval**: 5 minutes
3. Configure alerts (email/SMS)

### 3. Submit to Search Engines

**Google Search Console**
1. Visit: https://search.google.com/search-console
2. Add property: `mahfujkabir.com`
3. Verify ownership (DNS TXT record or HTML file)
4. Submit sitemap: `https://mahfujkabir.com/sitemap-index.xml`

**Bing Webmaster Tools**
1. Visit: https://www.bing.com/webmasters
2. Add site: `mahfujkabir.com`
3. Verify and submit sitemap

---

## 🆘 Troubleshooting

### Domain Not Loading

**Problem**: `mahfujkabir.com` shows "DNS not found" or "Site can't be reached"

**Solutions**:
1. Check nameservers at domain registrar (must point to Cloudflare)
2. Verify DNS propagation: https://dnschecker.org
3. Wait 24 hours after nameserver change
4. Check Cloudflare status: https://www.cloudflarestatus.com

### SSL Certificate Error

**Problem**: "Your connection is not private" or "NET::ERR_CERT_COMMON_NAME_INVALID"

**Solutions**:
1. Wait 10-15 minutes after adding custom domain (certificate issuance)
2. Cloudflare > SSL/TLS > Edge Certificates > Check status
3. Delete and re-add custom domain in Cloudflare Pages
4. Clear browser cache and try incognito mode

### Build Failing on Cloudflare

**Problem**: Deployment fails with build errors

**Solutions**:
1. Check build logs in Cloudflare dashboard
2. Verify build works locally: `npm run build`
3. Check Node.js version compatibility
4. Ensure all dependencies in `package.json`
5. Check environment variables (if any required)

### Images Not Loading

**Problem**: Images show broken icon or 404 error

**Solutions**:
1. Verify images exist in `public/images/` directory
2. Check image paths start with `/images/` not `./images/`
3. Run `npm run optimize-images` before deployment
4. Check browser console for specific error messages
5. Verify Cloudflare cache: Caching > Configuration > Purge Everything

### Slow Loading Speed

**Problem**: Lighthouse Performance score < 90

**Solutions**:
1. Optimize images: `npm run optimize-images`
2. Enable Cloudflare > Speed > Optimization settings
3. Check for large JavaScript files (code splitting)
4. Enable Brotli compression (default on Cloudflare)
5. Verify Cloudflare proxy enabled (orange cloud) on DNS records

---

## 📞 Support Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Cloudflare Community**: https://community.cloudflare.com/
- **Astro Docs**: https://docs.astro.build/
- **Project README**: `README.md` (comprehensive guide)
- **Content TODO**: `CONTENT-TODO.md` (pending content tasks)

---

## 📝 Quick Command Reference

```bash
# Development
npm run dev                    # Start dev server (localhost:4321)
npm run build                  # Build for production
npm run preview                # Preview production build
npm run optimize-images        # Optimize images

# Git
git status                     # Check changes
git add .                      # Stage all changes
git commit -m "message"        # Commit changes
git push origin main           # Push and trigger deployment
git log --oneline              # View commit history

# Wrangler (manual deployment)
wrangler login                 # Authenticate
wrangler pages deploy dist --project-name=mahfujkabir --branch=main
wrangler pages deployment list --project-name=mahfujkabir
```

---

## 🎉 Deployment Complete!

Your website is now live at:
- **Production**: https://mahfujkabir.com
- **Cloudflare Pages**: https://mahfujkabir.pages.dev

**Next Steps**:
1. ✅ Verify all checklist items above
2. ✅ Set up analytics
3. ✅ Configure uptime monitoring
4. ✅ Submit sitemap to search engines
5. ✅ Share with stakeholders
6. ✅ Monitor performance and user feedback

---

**Last Updated**: October 24, 2026  
**Deployment Platform**: Cloudflare Pages  
**Domain**: mahfujkabir.com  
**Framework**: Astro 5.x
