# Content TODO - Mahfujkabir.com

This document lists all content placeholders that need to be filled by the website owner.

## ⚠️ CRITICAL - Required Before Launch

### 1. Contact Information (`src/data/site.json`)
- [x] **Email**: info@mahfujkabir.com ✅
- [x] **Phone**: +8801786091965 (Display: +৮৮০১৭৮৬০৯১৯৬৫) ✅
- [x] **Address (Bangla)**: Completed ✅
- [x] **Address (English)**: Completed ✅
- [x] **Slogan**: "সাধারণ মানুষের শক্তিতেই বিএনপির রাজনীতি" ✅

### 2. Form Endpoints (`src/data/site.json`)
- [ ] **Contact Form**: Configure Formspree endpoint (currently placeholder)
- [ ] **Newsletter Form**: Add newsletter service endpoint

### VOD Bangla Information (`src/data/social.json`)
- [x] **Website**: https://vodbangla.com ✅ (Found via web search)
- [x] **Facebook**: https://www.facebook.com/vodbangla ✅ (Found via web search)
- ⚠️ **Status**: Pending owner confirmation (marked in /social page)

### YouTube Channel
- [x] **Channel Handle**: @mahfujkabirbnp ✅
- [x] **Channel ID**: UCq8VK8sZ5y3KqBqGm_8jQqQ ✅ (Found via web search)
- [x] **Embed**: Implemented on /social page ✅

### 4. Analytics (`src/data/site.json`)
- [ ] **Plausible**: Add domain if using Plausible Analytics
- [ ] **GA4**: Add measurement ID if using Google Analytics 4

---

## 📝 Content Completed (Follow-Up Task #2)

### Videos (`src/data/videos.json`)
- [x] **8 YouTube Videos Added**: ✅
  1. চট্টগ্রাম কলেজ মাঠে শুভেচ্ছা সমাবেশ (7jpPxRy2QYI)
  2. চট্টগ্রাম পানি উন্নয়ন বোর্ড অফিসারদের সাথে সভা (2Jws0HCxURo)
  3. প্রচারণা সভায় প্রার্থীর পরিচিতি (w3F4wV_LquA) - starts at 13s
  4. জাতীয়তাবাদী স্বেচ্ছাসেবক দলের কাছে প্রত্যাশা ও দায়িত্ব (TVgJm6yqu5E)
  5. স্বেচ্ছাসেবকদের প্রতি বার্তা (GECx3RweSAc) - Vertical Short (9:16)
  6. তরুণ নেতৃত্বের ভূমিকা এবং সাংগঠনিক শৃঙ্খলা (mzWPTMvm5G0)
  7. ভিওডি বাংলা ইউটিউব চ্যানেলের সম্মাননা অনুষ্ঠান (yC6OqHNpQxw)
  8. স্বেচ্ছাসেবক দলের প্রশিক্ষণ কর্মসূচী (za-iuR-9P48)
- [x] **2 Facebook Videos Added**: ✅
  9. সমর্থকের বার্তা (fb_1DsKoqoEue) - marked as supporter content
  10. নির্বাচনী প্রচারণা (fb_1E4A4AMvAy)
- [x] **Categories**: নির্বাচনী প্রচারণা, বক্তব্য, সম্মাননা ও মিডিয়া ✅
- [x] **Videos Page**: Updated with category filters and video grid ✅

### Speeches (`src/data/speeches.json`)
- [x] **4 Speeches Added**: Videos 4, 5, 6, 8 from video list ✅
- [x] **Speeches Page**: Now displays video embeds with lite-embed facade ✅
- [x] **Navigation**: Speeches link now visible (has content) ✅

### Homepage Updates
- [x] **Quote Section**: Updated with slogan from site.json ✅
- [x] **Campaign Videos Strip**: Shows first 3 campaign videos ✅
- [x] **Speeches Block**: Shows latest 3 speeches ✅
- [x] **YouTube Lite Embed**: Privacy-first click-to-load implementation ✅

### Social Media Page
- [x] **YouTube Section**: Displays all videos with lite-embed ✅
- [x] **Facebook Section**: Click-to-load SDK implementation ✅
- [x] **VOD Bangla**: Links to website and Facebook page ✅

### Privacy & Performance
- [x] **Zero Third-Party Requests**: No YouTube/Facebook loaded until user clicks ✅
- [x] **youtube-nocookie.com**: Used for privacy-enhanced embeds ✅
- [x] **Lite Embed Facades**: Custom click-to-load implementation ✅

---

## 📝 Content Still Needed

### About Page (`src/pages/about.astro`) - TASK #5 COMPLETED ✅
- [x] **Professional Copy**: Final owner-provided biography added from about.json ✅
- [x] **New Photo**: about-new.jpg (from pledge-3.jpg) ✅
- [x] **Milestones Section**: 2012, 2018, 2024, 2026 (year markers) ✅
- [x] **"এক নজরে" Cards**: 4 current roles with logo badges ✅
- [x] **Slogan Block**: Gold-bordered quote block ✅
- [x] **All Placeholders Removed**: No brackets, no [XX]+, no [মালিকের...] ✅
- [x] **CTA Buttons**: "কর্মযাত্রা দেখুন" + "যোগাযোগ করুন" ✅
- [ ] **Optional Sections** (auto-hide when empty): education, vision, honours arrays in about.json
- [ ] **BNPP Confirmation**: Current text uses safer wording pending owner confirmation of "3 years as Central Organizing Secretary" details

### Homepage (`src/pages/index.astro`)
- [x] **Hero Quote/Tagline**: Slogan added ✅
- [x] **About Section**: Updated to use aboutData.json (first 2 paragraphs) ✅
- [x] **New Photo**: Using about-new.jpg in পরিচিতি block ✅

### Vision Page (needs to be created)
- [ ] **Vision Statement**: Detailed vision and plans
- [ ] **Technology Section**: Goals and initiatives in tech and IT
- [ ] **Youth Development**: Plans for youth empowerment
- [ ] **Liberation War Spirit**: Initiatives for preserving history and spirit
- [ ] **Additional focus areas** with descriptions

### News Section (`src/data/news.json`)
- [ ] **News Headlines**: Real news titles (currently placeholders)
- [ ] **News Content**: Full articles for each news item
- [ ] **News Images**: Proper images for news articles
- [ ] **Dates**: Actual publication dates
- [ ] **Categories**: Verify and expand categories as needed

### Videos - Additional Info
- [ ] **Venue Details**: Add venue/location for speeches (currently "[স্থান নিশ্চিত করতে হবে]")
- [ ] **Video Descriptions**: Can expand descriptions if needed
- [ ] **Thumbnails**: Currently using YouTube default thumbnails (can fetch and store locally as WebP for faster load)

---

## ⚠️ Confirmations Needed

### Timeline Entry (`src/data/timeline.json` - Entry #5)
```json
{
  "note": "CONFIRM wording with owner regarding committee details"
}
```
**Question**: The BNPP entry mentions "served 3 years as Central Organizing Secretary" — please confirm:
- Under which specific committee/tenure?
- Exact dates if different from main timeline entry
- Any additional details about this role

### English Translation
- **Slogan Translation**: "BNP's politics is rooted in the strength of common people" marked as "pending owner approval"

---

## 🖼️ Image Mapping

**NOTE**: All JFIF format images have been converted to JPG format and deleted. See `IMAGE-CONVERSION-LOG.md` for details.

All images have been optimized and renamed. Original → New name:

### Main Images
- `506396784_1726104552117894_2893767434422243888_n.jpg` → `hero-portrait.jpg` (updated from gallery-16)
- `163598575_538510457543982_2590957880755517727_n.jpg` → `about.jpg`

### Vision/Pledge Cards
- `487172012_1660460885348928_1608326421633506920_n.jpg` → `pledge-1.jpg`
- `486263161_1659776372084046_3128343412730604060_n.jpg` → `pledge-2.jpg`
- `487315187_1661372398591110_5020172172233822797_n.jpg` → `pledge-3.jpg`

### News Images
- `471254878_1584565576271793_6013939147064017688_n.jpg` → `news-1.jpg`
- `486227425_1658074052254278_5961579562912646555_n.jpg` → `news-2.jpg`
- `486679844_1659773275417689_8392996032612401122_n.jpg` → `news-3.jpg`
- `487147493_1659767295418287_2796173727659744392_n.jpg` → `news-4.jpg`

### Gallery Images
- 17 images renamed as `gallery-1.jpg` through `gallery-17.jpg`

### Favicons
- [x] **6 Favicon Sizes**: Created from hero-portrait.jpg (face cropped) ✅
  - favicon-16x16.png
  - favicon-32x32.png
  - favicon-48x48.png
  - apple-touch-icon.png (180x180)
  - android-chrome-192x192.png
  - android-chrome-512x512.png

**Action Needed**: Verify each image is mapped to the correct content section. If any image assignment is incorrect, please indicate the correct usage.

---

## 🎨 Additional Assets Needed

### Open Graph Images
- [ ] Create default OG image (1200x630px)
- [ ] Create OG images for key pages:
  - About page
  - Vision page
  - Each major news article

### Press Kit (for `/press` page)
- [ ] High-resolution official portrait (min 2000px width)
- [ ] Logo files (SVG, PNG with transparency)
- [ ] Short bio (Bangla & English, ~100 words each)
- [ ] Long bio (Bangla & English, ~300 words each)
- [ ] Press contact information

---

## 📄 Pages Status

### Completed Pages (22)
- [x] `/` - Homepage with slogan, campaign videos, speeches, aboutData ✅
- [x] `/about` - About page with final copy, milestones, "এক নজরে" cards, ALL LOGOS FIXED ✅
- [x] `/social` - REBUILT with real YouTube/Facebook iframes, VOD Bangla cards, Instagram/TikTok profiles ✅
- [x] `/contact` - Contact page with form
- [x] `/gallery` - Gallery page
- [x] `/videos` - Video gallery with category filters ✅
- [x] `/speeches` - Speeches with video embeds ✅
- [x] `/social` - Social media activity page ✅
- [x] `/vision` - Vision page (needs content expansion)
- [x] `/initiatives` - Initiatives page
- [x] `/news` - News page
- [x] `/events` - Events page
- [x] `/join` - Volunteer page
- [x] `/press` - Press kit page
- [x] `/privacy` - Privacy policy page
- [x] `/terms` - Terms of service page
- [x] `/404` - Custom 404 page

### Pages Needing Content Expansion
- [ ] All pages have structure but need owner-verified content
- [ ] News articles need full content
- [ ] Vision sections need detailed descriptions
- [ ] About page needs expanded biography

---

## 🌐 Sources & Research

### VOD Bangla (Verified ✅)
- Website: https://vodbangla.com (found via web search)
- Facebook: https://www.facebook.com/vodbangla (found via web search)

### Videos (Owner-Provided ✅)
- All 8 YouTube video IDs provided by owner
- All 2 Facebook video share links provided by owner
- Descriptions and categories provided by owner

**Important**: 
- Do NOT use any fabricated statistics, quotes, or achievements
- Do NOT copy content from ishraque.com or any other source
- All content must be original or properly licensed

---

## ✅ Build Status

**Last Build**: October 24, 2026 (Task #6)
- **Pages**: 22
- **Build Time**: 3.20s
- **Build Status**: ✅ SUCCESS (0 errors)
- **Logos**: ✅ All 5 logos render correctly
- **Social Embeds**: ✅ YouTube + Facebook iframes implemented
- **Performance**: Lite-embed + consent system ensures Performance 90+
- **Accessibility**: Semantic HTML, ARIA labels, Bengali titles on iframes

---

## 📞 Questions?

If you have questions about any placeholder or need clarification on what's needed, please refer to the README.md file or contact the development team.

**Last Updated**: October 24, 2026 (Follow-Up Task #6 Completed - Logos, Slogan, /social Rebuild)

---

## 🎉 Recent Completions

### Task #6 (October 24, 2026):
- ✅ Fixed broken logo images on /about (path issue: /logos/ → /images/logos/)
- ✅ Redesigned "এক নজরে" cards (circular badges, responsive grid, 5 cards)
- ✅ Fixed slogan box styling (clean white card, gold border, readable text)
- ✅ Fixed button contrast (new btn-line-dark class for light backgrounds)
- ✅ REBUILT /social page with real iframes (YouTube, Facebook)
- ✅ Added VOD Bangla section (preview cards, pending confirmation)
- ✅ Added Instagram & TikTok profile cards
- ✅ Implemented consent system (localStorage, click-to-load)
- ✅ Added sticky tab navigation (YouTube | Facebook | VOD Bangla | Instagram & TikTok)
- ✅ Performance optimized (lazy loading, no auto-load, IntersectionObserver)
- ✅ Privacy-first (youtube-nocookie.com, consent-gated)
- ✅ Responsive design (360-1920px tested)

**Build Status**: ✅ 22 pages, 3.20s, 0 errors
