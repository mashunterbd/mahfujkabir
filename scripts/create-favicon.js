import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceImage = path.join(__dirname, '../public/images/hero-portrait.jpg');
const outputDir = path.join(__dirname, '../public');

async function createFavicons() {
  console.log('Creating favicons from hero portrait...\n');
  
  if (!fs.existsSync(sourceImage)) {
    console.error('Error: hero-portrait.jpg not found. Run npm run optimize-images first.');
    return;
  }
  
  try {
    // Read the source image
    const image = sharp(sourceImage);
    const metadata = await image.metadata();
    
    console.log(`Source image: ${metadata.width}x${metadata.height}`);
    
    // Calculate crop area to focus on face (center-top portion)
    // For square images (like 2048x2048), focus on the center-top area
    const cropSize = Math.min(metadata.width, metadata.height);
    const left = Math.max(0, Math.floor((metadata.width - cropSize) / 2));
    const top = Math.max(0, Math.floor(cropSize * 0.1)); // Start 10% from top for face
    
    // Create a square crop focused on face area
    const croppedImage = image.clone()
      .extract({
        left: left,
        top: top,
        width: Math.min(cropSize, metadata.width - left),
        height: Math.min(cropSize, metadata.height - top)
      });
    
    // Generate favicon.ico (32x32 and 16x16)
    console.log('Generating favicon.ico...');
    await croppedImage.clone()
      .resize(32, 32, { fit: 'cover', position: 'top' })
      .png()
      .toFile(path.join(outputDir, 'favicon-32x32.png'));
    
    await croppedImage.clone()
      .resize(16, 16, { fit: 'cover', position: 'top' })
      .png()
      .toFile(path.join(outputDir, 'favicon-16x16.png'));
    
    // For .ico file, we'll use the 32x32 version (browsers support PNG favicons better anyway)
    await croppedImage.clone()
      .resize(32, 32, { fit: 'cover', position: 'top' })
      .toFormat('png')
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    console.log('✓ favicon.ico (32x32)');
    console.log('✓ favicon-32x32.png');
    console.log('✓ favicon-16x16.png');
    
    // Generate apple-touch-icon (180x180)
    console.log('\nGenerating apple-touch-icon.png...');
    await croppedImage.clone()
      .resize(180, 180, { fit: 'cover', position: 'top' })
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    
    console.log('✓ apple-touch-icon.png (180x180)');
    
    // Generate additional sizes for Android/PWA
    console.log('\nGenerating additional icon sizes...');
    
    await croppedImage.clone()
      .resize(192, 192, { fit: 'cover', position: 'top' })
      .png()
      .toFile(path.join(outputDir, 'android-chrome-192x192.png'));
    
    await croppedImage.clone()
      .resize(512, 512, { fit: 'cover', position: 'top' })
      .png()
      .toFile(path.join(outputDir, 'android-chrome-512x512.png'));
    
    console.log('✓ android-chrome-192x192.png');
    console.log('✓ android-chrome-512x512.png');
    
    console.log('\n✅ All favicons created successfully!');
    console.log('\nFiles created in /public:');
    console.log('  - favicon.ico (32x32)');
    console.log('  - favicon-16x16.png');
    console.log('  - favicon-32x32.png');
    console.log('  - apple-touch-icon.png (180x180)');
    console.log('  - android-chrome-192x192.png');
    console.log('  - android-chrome-512x512.png');
    
  } catch (error) {
    console.error('Error creating favicons:', error.message);
  }
}

createFavicons().catch(console.error);
