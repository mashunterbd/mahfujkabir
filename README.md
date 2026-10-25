# Mahfujkabir.com - Official Website

Professional, performant, and accessible website for **Mahfuz Kabir Mukta** (মাহফুজ কবির মুক্তা).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Optimize images (runs automatically before build)
npm run optimize-images
```

Development server runs at: `http://localhost:4321`

---

## 📁 Project Structure

```
mahfujkabir-site/
├── public/                  # Static assets served as-is
│   ├── images/             # Optimized images (generated)
│   ├── fonts/              # Self-hosted fonts (TODO)
│   ├── favicon.ico
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── data/              # Editable content (JSON)
│   │   ├── site.json      # Global site settings
│   │   ├── navigation.json # Menu structure
│   │   ├── timeline.json   # Career timeline
│   │   └── news.json      # News articles
│   ├── images-source/     # Original unoptimized images
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/             # Routes (file-based routing)
│   │   ├── index.astro    # Homepage
│   │   ├── about.astro    # About page
│   │   ├── contact.astro  # Contact page
│   │   └── gallery.astro  # Photo gallery
│   └── styles/
│       └── global.css     # Global styles & design tokens
├── scripts/
│   └── optimize-images.js # Image optimization script
├── astro.config.mjs       # Astro configuration
├── package.json
├── CONTENT-TODO.md        # Content that needs owner input
└── README.md              # This file
```

---

## ✏️ Editing Content

### Global Site Settings

Edit `src/data/site.json`:

```json
{
  "name": { "bn": "মাহফুজ কবির মুক্তা", "en": "Mahfuz Kabir Mukta" },
  "email": "your@email.com",
  "phone": "+880...",
  "social": {
    "facebook": "https://...",
    ...
  }
}
```

### Navigation Menu

Edit `src/data/navigation.json` to add/remove/reorder menu items.

### Career Timeline

Edit `src/data/timeline.json`:

```json
[
  {
    "date": { "bn": "তারিখ", "en": "Date" },
    "title": { "bn": "পদবী", "en": "Position" },
    "organization": { "bn": "প্রতিষ্ঠান", "en": "Organization" },
    "current": true
  }
]
```

### News Articles

Edit `src/data/news.json` to add new articles:

```json
[
  {
    "id": 1,
    "slug": "article-url-slug",
    "title": { "bn": "শিরোনাম", "en": "Headline" },
    "content": { "bn": "পূর্ণ বিষয়বস্তু", "en": "Full content" },
    "date": "2026-10-20",
    "image": "news-1.jpg",
    "featured": true
  }
]
```

---

## 🖼️ Adding Images

### For News/Content

1. Place original image in `src/images-source/`
2. Add mapping in `scripts/optimize-images.js`:
   ```javascript
   const imageMapping = {
     'original-name.jpg': 'new-name.jpg',
   };
   ```
3. Run `npm run optimize-images`
4. Use in content: `<img src="/images/new-name.jpg" ... />`

### Image Optimization Settings

- Hero images: max 150KB
- Regular images: max 100KB
- Responsive sizes: 480w, 768w, 1280w, 1920w
- Format: WebP with fallback

---

## 📄 Creating New Pages

1. Create file in `src/pages/`, e.g., `src/pages/vision.astro`
2. Use BaseLayout:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
const title = 'Page Title | Mahfuz Kabir Mukta';
---
<BaseLayout title={title}>
  <!-- Your content here -->
</BaseLayout>
```

3. Add to navigation in `src/data/navigation.json`

---

## 🎨 Styling & Design

### Design Tokens (CSS Variables)

Defined in `src/styles/global.css`:

```css
:root {
  --g9: #062a20;       /* Deep green */
  --g8: #0a3d2e;       /* Primary green */
  --g6: #14684f;       /* Medium green */
  --gold: #e8a83a;     /* Accent gold */
  --cream: #faf6ec;    /* Background */
}
```

### Typography

- Body: Anek Bangla
- Headings: Noto Serif Bengali
- Latin/Numbers: Inter

**TODO**: Self-host fonts for production (currently using Google Fonts CDN).

### Responsive Breakpoints

- Desktop: 1180px max-width
- Tablet: 900px and below
- Mobile: 600px and below

---

## 📧 Setting Up Forms

### Contact Form

1. Choose a service:
   - **Formspree**: https://formspree.io (free tier available)
   - **Netlify Forms**: Built-in if deploying to Netlify
   - **Custom API**: Your own backend

2. Update `src/data/site.json`:
   ```json
   {
     "forms": {
       "contact": "https://formspree.io/f/YOUR_FORM_ID"
     }
   }
   ```

### Newsletter Subscription

Same process as contact form:

```json
{
  "forms": {
    "newsletter": "YOUR_NEWSLETTER_ENDPOINT"
  }
}
```

---

## 📊 Analytics Setup

### Plausible (Privacy-Friendly, Recommended)

1. Sign up at https://plausible.io
2. Add domain: mahfujkabir.com
3. Update `src/data/site.json`:
   ```json
   {
     "analytics": {
       "plausible": "mahfujkabir.com"
     }
   }
   ```

### Google Analytics 4

```json
{
  "analytics": {
    "ga4": "G-XXXXXXXXXX"
  }
}
```

Script is included in `BaseLayout.astro` when configured.

---

## 🚀 Deployment

### Cloudflare Pages (Recommended)

**Best for**: Fast global delivery, unlimited bandwidth, automatic SSL, zero-config caching, DDoS protection.

#### Option 1: Git Integration (Automatic Deployments)

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/mahfujkabir-site.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to **Workers & Pages** > **Create application** > **Pages** tab
   - Click **Connect to Git**
   - Authorize Cloudflare to access your repository
   - Select `mahfujkabir-site` repository

3. **Configure Build Settings**
   - **Project name**: `mahfujkabir` (will be accessible at mahfujkabir.pages.dev)
   - **Production branch**: `main` (or `master`)
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave blank if project is at repo root)
   - **Environment variables**: Add if needed (none required for this project)

4. **Deploy**
   - Click **Save and Deploy**
   - Build takes ~3-5 minutes
   - Your site will be live at: `https://mahfujkabir.pages.dev`

5. **Automatic Updates**
   - Every push to `main` triggers automatic rebuild
   - Preview deployments created for pull requests
   - View build logs in Cloudflare dashboard

#### Option 2: Direct Upload (Manual Deployment)

1. **Build Locally**
   ```bash
   npm run build
   ```
   This creates the `dist/` folder with production files.

2. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

3. **Authenticate**
   ```bash
   wrangler login
   ```
   Opens browser for Cloudflare authentication.

4. **Deploy**
   ```bash
   wrangler pages deploy dist --project-name=mahfujkabir
   ```
   First deployment creates the project. Subsequent deploys update it.

5. **Production Alias** (optional)
   ```bash
   wrangler pages deploy dist --project-name=mahfujkabir --branch=main
   ```

#### Custom Domain Setup: mahfujkabir.com

**Prerequisites**: Domain registered, Cloudflare account with domain access.

##### Step 1: Add Domain to Cloudflare (if not already)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Add site** > Enter `mahfujkabir.com`
3. Select **Free** plan > **Continue**
4. Cloudflare scans existing DNS records
5. **Update nameservers** at your domain registrar:
   - Replace current nameservers with Cloudflare's (shown on screen, e.g., `ava.ns.cloudflare.com`, `billy.ns.cloudflare.com`)
   - Propagation takes 2-24 hours

##### Step 2: Connect Custom Domain to Pages

1. Go to **Workers & Pages** > Select your project (`mahfujkabir`)
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter domain: `mahfujkabir.com`
5. Click **Continue**

Cloudflare automatically:
- Creates DNS records (CNAME or AAAA)
- Issues SSL certificate (usually within minutes)
- Configures caching and CDN

##### Step 3: Add www Subdomain (optional but recommended)

1. In **Custom domains**, click **Set up a custom domain** again
2. Enter: `www.mahfujkabir.com`
3. Click **Continue**

Cloudflare adds DNS record and SSL for www subdomain.

##### Step 4: Configure DNS Settings

Go to **DNS** > **Records** for `mahfujkabir.com`:

**Required Records** (auto-created by Cloudflare Pages):
```
Type   Name   Content                           Proxy
CNAME  @      mahfujkabir.pages.dev            Proxied (orange cloud)
CNAME  www    mahfujkabir.pages.dev            Proxied (orange cloud)
```

**Optional Email Records** (if using email with this domain):
```
Type   Name   Content                           Priority
MX     @      mail.youremailprovider.com        10
TXT    @      v=spf1 include:_spf... ~all       -
```

**Security Records** (recommended):
```
Type   Name   Content
TXT    @      v=DMARC1; p=quarantine; rua=mailto:dmarc@mahfujkabir.com
```

##### Step 5: Redirect Rules (optional)

**Force www to non-www** (or vice versa):

1. Go to **Rules** > **Redirect Rules** > **Create rule**
2. Rule name: `Redirect www to apex`
3. **When incoming requests match**: Custom filter expression
   ```
   (http.host eq "www.mahfujkabir.com")
   ```
4. **Then**: Dynamic redirect
   - Type: `Permanent (301)`
   - Expression: `concat("https://mahfujkabir.com", http.request.uri.path)`
   - Preserve query string: ✅

**Force HTTPS** (usually automatic, but to ensure):
- Cloudflare > **SSL/TLS** > **Overview** > Set to **Full** or **Full (strict)**
- **Edge Certificates** > Enable **Always Use HTTPS**

##### Step 6: Verify Deployment

1. **Check DNS propagation**: https://dnschecker.org
   - Enter `mahfujkabir.com`
   - Should show Cloudflare nameservers globally

2. **Test URLs**:
   - https://mahfujkabir.com
   - https://www.mahfujkabir.com
   - http://mahfujkabir.com (should redirect to HTTPS)

3. **SSL Certificate**:
   - Click padlock in browser address bar
   - Certificate issued by: Cloudflare
   - Valid for: `mahfujkabir.com` and `*.mahfujkabir.com`

4. **Performance Check**:
   - Run Lighthouse audit (should see 100 in Best Practices with Cloudflare caching)
   - Check global speed: https://www.webpagetest.org

##### Step 7: Optimize Cloudflare Settings

1. **Speed** > **Optimization**
   - **Auto Minify**: Enable CSS, JS, HTML
   - **Brotli**: Enabled (default)
   - **Early Hints**: Enabled
   - **Rocket Loader**: Disabled (not needed with Astro)
   - **Mirage**: Enabled (image optimization)

2. **Caching** > **Configuration**
   - **Caching Level**: Standard
   - **Browser Cache TTL**: Respect Existing Headers
   - **Always Online**: Enabled

3. **Security** > **Settings**
   - **Security Level**: Medium
   - **Bot Fight Mode**: Enabled (free tier)
   - **Challenge Passage**: 30 minutes

4. **Network**
   - **HTTP/3 (with QUIC)**: Enabled
   - **0-RTT Connection Resumption**: Enabled
   - **WebSockets**: Enabled (if needed for future features)

#### Cloudflare Pages Advantages

✅ **Unlimited bandwidth** - No traffic limits on free plan  
✅ **Fast global CDN** - 300+ edge locations worldwide  
✅ **Automatic SSL** - Free certificates, auto-renewal  
✅ **DDoS protection** - Enterprise-grade security  
✅ **Preview deployments** - Test branches before merging  
✅ **Instant rollbacks** - One-click revert to previous version  
✅ **Zero-config caching** - Optimal cache headers automatically  
✅ **Analytics included** - Web Analytics (privacy-friendly, free)  
✅ **No cold starts** - Static site, instant response  

#### Deployment Checklist

Before deploying to production:

- [ ] Update `site` URL in `astro.config.mjs`:
  ```javascript
  site: 'https://mahfujkabir.com',
  ```

- [ ] Update `robots.txt` with production domain:
  ```
  Sitemap: https://mahfujkabir.com/sitemap-index.xml
  ```

- [ ] Configure analytics (Plausible/GA4) in `src/data/site.json`

- [ ] Test contact forms with production endpoints

- [ ] Add email addresses and phone numbers in `src/data/site.json`

- [ ] Run production build locally:
  ```bash
  npm run build
  npm run preview
  ```

- [ ] Run Lighthouse audit (target: Performance 90+)

- [ ] Test on mobile devices (real devices, not just DevTools)

- [ ] Verify social media Open Graph images

- [ ] Set up uptime monitoring (e.g., UptimeRobot, Cloudflare Health Checks)

#### Continuous Deployment Workflow

```bash
# Make changes locally
npm run dev

# Test changes
# ... make edits ...

# Build and verify
npm run build
npm run preview

# Commit and push (triggers auto-deploy with Git integration)
git add .
git commit -m "Update: feature description"
git push origin main

# Monitor deployment
# Visit Cloudflare Dashboard > Workers & Pages > mahfujkabir > View details
```

---

### Netlify (Alternative)

1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables if needed
5. Configure custom domain: mahfujkabir.com

---

### Vercel (Alternative)

Similar to Netlify:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

---

### Traditional Hosting (Apache/Nginx)

1. Run `npm run build`
2. Upload `dist/` folder contents to your server
3. Configure web server (Apache/Nginx) for:
   - Clean URLs
   - Gzip/Brotli compression
   - Cache headers (see below)

---

## ⚡ Performance Optimization

### Cache Headers

For Apache (`.htaccess`):

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

For Netlify (`public/_headers`):

```
/images/*
  Cache-Control: public, max-age=31536000, immutable

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable
```

### Lighthouse Targets

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

Run audit: `npm run build && npm run preview`, then open Chrome DevTools > Lighthouse.

---

## 🔒 Security Headers

For production, add these headers (via hosting provider or web server):

```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

For Netlify, create `public/_headers`:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
```

---

## 🌍 SEO & Metadata

### Sitemap

Generated automatically by `@astrojs/sitemap` integration on build.
Available at: `https://mahfujkabir.com/sitemap-index.xml`

### Robots.txt

Edit `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://mahfujkabir.com/sitemap-index.xml
```

### Structured Data (JSON-LD)

Automatically included in `BaseLayout.astro`:
- Person schema
- WebSite schema
- Article schema (for news pages)

---

## ♿ Accessibility

### Features Implemented

- ✅ Semantic HTML landmarks
- ✅ Skip-to-content link
- ✅ ARIA labels and roles
- ✅ Keyboard navigation (including gallery lightbox)
- ✅ Focus indicators
- ✅ Alt text for all images
- ✅ Color contrast WCAG AA compliant
- ✅ Respects prefers-reduced-motion

### Testing

1. Run Lighthouse accessibility audit
2. Test with keyboard: Tab, Enter, Arrow keys, Escape
3. Test with screen reader (NVDA/JAWS/VoiceOver)

---

## 🐛 Troubleshooting

### Images Not Showing

1. Check image exists in `public/images/`
2. Run `npm run optimize-images`
3. Verify path starts with `/images/` not `./images/`

### Build Fails

1. Delete `node_modules/` and `package-lock.json`
2. Run `npm install` again
3. Check Node.js version (requires >= 18)

### Forms Not Working

1. Verify endpoint in `src/data/site.json`
2. Check browser console for errors
3. Test with Formspree directly: https://formspree.io/

---

## 📝 Maintenance Checklist

### Monthly

- [ ] Update news section with latest articles
- [ ] Check and remove outdated events
- [ ] Review analytics data
- [ ] Test all forms
- [ ] Run Lighthouse audit

### Quarterly

- [ ] Update dependencies: `npm outdated`, then `npm update`
- [ ] Review content for accuracy
- [ ] Check broken links
- [ ] Backup website and data files

### Annually

- [ ] Update copyright year in Footer
- [ ] Review and update timeline
- [ ] Refresh gallery images
- [ ] SEO audit

---

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build) 5.x
- **Language**: TypeScript (strict mode)
- **Styling**: Vanilla CSS with modern features
- **Image Optimization**: Sharp
- **Build**: Vite
- **Deployment**: Netlify / Vercel recommended

---

## 📞 Support

For technical issues or questions:

1. Check `CONTENT-TODO.md` for content guidance
2. Review this README
3. Consult Astro documentation: https://docs.astro.build

---

## 📜 License

© 2026 Mahfuz Kabir Mukta. All rights reserved.

This website is proprietary. The code and design are custom-built for mahfujkabir.com and may not be reused without permission.

---

**Built with ❤️ for Mahfuz Kabir Mukta**

Last Updated: October 24, 2026


---

## 🎨 Organization Logos

Organization logos are displayed as circular badges in the timeline section.

### Current Logos

Located in `public/images/logos/`:

1. **vodbangla.png** - VOD Bangla (34.60 KB)
2. **zia-smriti-pathagar.png** - Zia Smriti Pathagar (28.46 KB)
3. **bnp.png** - Bangladesh Nationalist Party (14.78 KB)
4. **bnpp.png** - Bangladesh Nationalist Publicity Party (62.19 KB)
5. **liberation-war-ministry.png** - Ministry of Liberation War Affairs (22.47 KB)

### Adding New Logos

1. Place source logo file in parent `../images/logos/` directory
2. Update `scripts/convert-logos.js` with the new mapping
3. Run conversion: `node scripts/convert-logos.js`
4. Add logo reference to timeline entry in `src/data/timeline.json`:

```json
{
  "logo": "organization-name.png",
  "logoAlt": {
    "bn": "সংস্থা লোগো",
    "en": "Organization logo"
  }
}
```

5. Build and verify: `npm run build`

### Logo Specifications

- **Format**: PNG (optimized)
- **Max Size**: 400px width (maintains aspect ratio)
- **Target File Size**: <50 KB per logo
- **Display**: 64px circular badge (56px on mobile)
- **Background**: White/cream with gold border
- **Naming**: lowercase-ascii-hyphenated.png

See [LOGO-MAPPING.md](./LOGO-MAPPING.md) for detailed conversion history and technical specs.

---
