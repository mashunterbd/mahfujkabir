import sharp from 'sharp';

const thumbnailSvg = `
<svg width="120" height="90" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a3d2e"/>
      <stop offset="100%" style="stop-color:#14684f"/>
    </linearGradient>
  </defs>
  <rect width="120" height="90" fill="url(#g1)"/>
  <text x="60" y="50" text-anchor="middle" fill="rgba(232,168,58,0.4)" font-size="24" font-family="Arial" font-weight="bold">মুক্তা</text>
</svg>
`;

const fullSvg = `
<svg width="700" height="394" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a3d2e"/>
      <stop offset="100%" style="stop-color:#14684f"/>
    </linearGradient>
  </defs>
  <rect width="700" height="394" fill="url(#g2)"/>
  <text x="350" y="210" text-anchor="middle" fill="rgba(232,168,58,0.3)" font-size="72" font-family="Arial" font-weight="bold">মুক্তা.</text>
</svg>
`;

console.log('Creating fallback images...');

Promise.all([
  sharp(Buffer.from(thumbnailSvg))
    .jpeg({ quality: 85 })
    .toFile('public/images/fallback-news-thumb.jpg')
    .then(() => console.log('✓ Created fallback-news-thumb.jpg')),
  
  sharp(Buffer.from(fullSvg))
    .jpeg({ quality: 85 })
    .toFile('public/images/fallback-news.jpg')
    .then(() => console.log('✓ Created fallback-news.jpg'))
]).then(() => {
  console.log('\nFallback images created successfully!');
}).catch(err => {
  console.error('Error creating fallback images:', err);
  process.exit(1);
});
