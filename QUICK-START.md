# 🚀 Quick Start Guide
## Mahfujkabir.com Website

**Status**: ✅ Built and ready for content  
**Preview**: http://localhost:4321 (when running `npm run preview`)

---

## ⚡ Essential Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Optimize images (runs automatically before build)
npm run optimize-images
```

---

## 📋 Before You Launch - Checklist

### 1. Add Your Content

Edit these files in `src/data/`:

- [ ] **`site.json`** - Add email, phone, address
- [ ] **`timeline.json`** - Verify all career entries
- [ ] **`news.json`** - Replace placeholder news with real content

### 2. Fill Text Content

Pages needing content (look for `[` brackets):

- [ ] **About page** - Full biography
- [ ] **Vision page** - Vision statement and detailed plans
- [ ] **Homepage** - Expand about section and quote
- [ ] **News articles** - Real headlines and content
- [ ] **Privacy & Terms** - Legal policies

**Full details in**: `CONTENT-TODO.md`

### 3. Configure Forms

In `src/data/site.json`, add form endpoints:

```json
{
  "forms": {
    "contact": "https://formspree.io/f/YOUR_ID",
    "newsletter": "https://YOUR_NEWSLETTER_SERVICE"
  }
}
```

**Recommended**: [Formspree](https://formspree.io) (free tier available)

### 4. Set Up Deployment

#### Option A: Netlify (Easiest)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Settings are pre-configured in `netlify.toml` ✅
6. Click "Deploy"
7. Add custom domain: mahfujkabir.com

#### Option B: Vercel

Similar to Netlify, auto-detects Astro settings.

#### Option C: Manual Upload

1. Run `npm run build`
2. Upload `dist/` folder to your hosting via FTP
3. Point domain to that directory

---

## 📁 Where Everything Is

```
📦 Key Files You'll Edit:
├── src/data/
│   ├── site.json        ← Contact info, social links
│   ├── navigation.json  ← Menu items
│   ├── timeline.json    ← Career history
│   └── news.json        ← News articles
│
📄 Pages:
├── src/pages/
│   ├── index.astro      ← Homepage
│   ├── about.astro      ← About page
│   ├── contact.astro    ← Contact page
│   └── ... (11 more)
│
🎨 Design:
├── src/styles/
│   └── global.css       ← All styling (colors, layout, etc.)
│
🖼️ Images:
├── src/images-source/   ← Put new original images here
└── public/images/       ← Optimized images (auto-generated)
```

---

## ✏️ Common Tasks

### Add a News Article

1. Open `src/data/news.json`
2. Add new entry:
```json
{
  "id": 5,
  "slug": "my-article",
  "title": { "bn": "শিরোনাম", "en": "Headline" },
  "content": { "bn": "বিষয়বস্তু", "en": "Content" },
  "excerpt": { "bn": "সংক্ষিপ্ত", "en": "Brief" },
  "date": "2026-10-24",
  "image": "news-5.jpg",
  "category": { "bn": "সংবাদ", "en": "News" },
  "featured": false
}
```
3. Add image to `src/images-source/` as `[original-name].jpg`
4. Add to `scripts/optimize-images.js`:
```javascript
'original-name.jpg': 'news-5.jpg'
```
5. Run `npm run build`

### Change Colors

Edit `src/styles/global.css`:

```css
:root {
  --g9: #062a20;     /* Deep green */
  --g8: #0a3d2e;     /* Primary green */
  --gold: #e8a83a;   /* Accent gold */
  --cream: #faf6ec;  /* Background */
}
```

### Update Navigation Menu

Edit `src/data/navigation.json` to add/remove/reorder menu items.

---

## 🧪 Testing

Before deploying:

```bash
# Build the site
npm run build

# Preview it locally
npm run preview

# Open http://localhost:4321
# Click through EVERY page
# Test EVERY link and button
# Test forms
# Test on mobile (Chrome DevTools → Toggle Device Toolbar)
```

---

## ❓ Need Help?

1. **Full documentation**: Read `README.md`
2. **Content guide**: Check `CONTENT-TODO.md`
3. **Project details**: See `FINAL-REPORT.md`
4. **Astro docs**: https://docs.astro.build

---

## 🎯 Launch Steps (In Order)

1. [ ] Fill in critical content (see `CONTENT-TODO.md`)
2. [ ] Test locally: `npm run preview`
3. [ ] Fix any issues
4. [ ] Push to GitHub
5. [ ] Deploy to Netlify/Vercel
6. [ ] Configure custom domain
7. [ ] Test live site thoroughly
8. [ ] Set up form submissions
9. [ ] Configure analytics (optional)
10. [ ] 🎉 **GO LIVE!**

---

**Preview server running at**: http://localhost:4321  
**To stop preview**: Press Ctrl+C in the terminal

**Good luck! The site is ready to shine once you add your content! ✨**
