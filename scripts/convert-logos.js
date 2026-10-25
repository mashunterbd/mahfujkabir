import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source and destination paths
const sourceDir = 'c:\\Users\\M.A.S SHUVO\\Desktop\\Production\\mahfujkabir\\images\\logos';
const destDir = join(__dirname, '../public/images/logos');

// Logo mapping: original name -> new clean name
const logoMapping = {
  'vodbangla logo.jfif': 'vodbangla.png',
  'জিয়া স্মৃতি পাঠাগার logo.jfif': 'zia-smriti-pathagar.png',
  'বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) logo.png': 'bnp.png',
  'বাংলাদেশ ন্যাশনালিস্ট পাবলিসিটি পার্টি (বিএনপিপি).jfif': 'bnpp.png',
  'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয় logo.avif': 'liberation-war-ministry.png'
};

async function convertAndOptimizeLogo(sourcePath, destPath, filename) {
  console.log(`\nProcessing: ${filename}`);
  
  try {
    const image = sharp(sourcePath);
    const metadata = await image.metadata();
    
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${metadata.format}`);
    
    // Resize if too large (max 400px width, maintain aspect ratio)
    let pipeline = image;
    if (metadata.width > 400) {
      pipeline = pipeline.resize(400, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Convert to PNG with optimization
    await pipeline
      .png({
        quality: 90,
        compressionLevel: 9,
        effort: 10
      })
      .toFile(destPath);
    
    // Check output size
    const outputMetadata = await sharp(destPath).metadata();
    const stats = await sharp(destPath).toBuffer();
    const sizeKB = (stats.length / 1024).toFixed(2);
    
    console.log(`  Output: ${outputMetadata.width}x${outputMetadata.height}, ${sizeKB} KB`);
    
    return true;
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('Starting logo conversion and optimization...\n');
  console.log('Logo Mapping:');
  console.log('='.repeat(80));
  
  let successCount = 0;
  let totalSizeBefore = 0;
  let totalSizeAfter = 0;
  
  for (const [oldName, newName] of Object.entries(logoMapping)) {
    console.log(`${oldName}`);
    console.log(`  -> ${newName}`);
    
    const sourcePath = join(sourceDir, oldName);
    const destPath = join(destDir, newName);
    
    // Get original size
    try {
      const originalBuffer = await sharp(sourcePath).toBuffer();
      totalSizeBefore += originalBuffer.length;
    } catch (e) {
      console.log(`  ⚠️  Could not read original file`);
    }
    
    const success = await convertAndOptimizeLogo(sourcePath, destPath, oldName);
    
    if (success) {
      successCount++;
      // Get new size
      const newBuffer = await sharp(destPath).toBuffer();
      totalSizeAfter += newBuffer.length;
    }
  }
  
  console.log('\n' + '='.repeat(80));
  console.log(`\n✅ Conversion complete!`);
  console.log(`   Success: ${successCount}/${Object.keys(logoMapping).length} logos`);
  console.log(`   Total size before: ${(totalSizeBefore / 1024).toFixed(2)} KB`);
  console.log(`   Total size after: ${(totalSizeAfter / 1024).toFixed(2)} KB`);
  console.log(`   Saved: ${((totalSizeBefore - totalSizeAfter) / 1024).toFixed(2)} KB (${((1 - totalSizeAfter / totalSizeBefore) * 100).toFixed(1)}%)`);
  
  console.log('\n📁 All PNG files are now in: public/images/logos/');
  console.log('\n⚠️  Next step: Delete original files from source directory manually after verification');
}

main().catch(console.error);
