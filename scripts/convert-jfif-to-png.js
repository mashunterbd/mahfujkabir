import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, '../src/images-source');

async function convertJfifToPng() {
  console.log('Converting JFIF images to PNG format...\n');
  
  const files = fs.readdirSync(sourceDir);
  const jfifFiles = files.filter(file => file.toLowerCase().endsWith('.jfif'));
  
  if (jfifFiles.length === 0) {
    console.log('No JFIF files found.');
    return;
  }
  
  console.log(`Found ${jfifFiles.length} JFIF files to convert:\n`);
  
  for (const file of jfifFiles) {
    const inputPath = path.join(sourceDir, file);
    const outputPath = path.join(sourceDir, file.replace(/\.jfif$/i, '.jpg'));
    
    try {
      await sharp(inputPath)
        .jpeg({ quality: 95 })
        .toFile(outputPath);
      
      console.log(`✓ Converted: ${file} → ${path.basename(outputPath)}`);
      
      // Delete the original JFIF file
      fs.unlinkSync(inputPath);
      console.log(`  Deleted original: ${file}`);
      
    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
    }
  }
  
  console.log('\n✅ Conversion complete!');
  console.log('All JFIF images have been converted to JPG format.');
  console.log('\nNext step: Run "npm run optimize-images" to re-optimize all images.');
}

convertJfifToPng().catch(console.error);
