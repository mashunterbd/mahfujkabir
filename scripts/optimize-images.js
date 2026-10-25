import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, '../src/images-source');
const outputDir = path.join(__dirname, '../public/images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image mapping - rename meaningfully
const imageMapping = {
  // Hero and main images
  '844758319_1841245136892551_1086551566599512235_n.jpg': 'hero-portrait.jpg',
  '163598575_538510457543982_2590957880755517727_n.jpg': 'about.jpg',
  
  // Vision/pledge cards
  '487172012_1660460885348928_1608326421633506920_n.jpg': 'pledge-1.jpg',
  '486263161_1659776372084046_3128343412730604060_n.jpg': 'pledge-2.jpg',
  '487315187_1661372398591110_5020172172233822797_n.jpg': 'pledge-3.jpg',
  
  // News images
  '471254878_1584565576271793_6013939147064017688_n.jpg': 'news-1.jpg',
  '486227425_1658074052254278_5961579562912646555_n.jpg': 'news-2.jpg',
  '486679844_1659773275417689_8392996032612401122_n.jpg': 'news-3.jpg',
  '487147493_1659767295418287_2796173727659744392_n.jpg': 'news-4.jpg',
  
  // Gallery images (numbered)
  '486618401_1659767322084951_2994324586328153420_n.jpg': 'gallery-1.jpg',
  '487239870_1660562395338777_8340752155591076122_n.jpg': 'gallery-2.jpg',
  '487311319_1659239772137706_1215861515309005819_n.jpg': 'gallery-3.jpg',
  '487494024_1661370278591322_8394192155499310117_n.jpg': 'gallery-4.jpg',
  '608650126_1905563697505311_5071774748529156131_n.jpg': 'gallery-5.jpg',
  '773736102_2106397424088603_2869878948255379281_n.jpg': 'gallery-6.jpg',
  '774350208_2106427734085572_2692769779501108712_n.jpg': 'gallery-7.jpg',
  '796746069_1792124465247198_5845418463360650056_n.jpg': 'gallery-8.jpg',
  '797745381_957242083301012_6349895594219011614_n.jpg': 'gallery-9.jpg',
  '792158067_28561503083485461_4468136508809984928_n.jpg': 'gallery-10.jpg',
  '795704690_1093261689876737_5775096745881443072_n.jpg': 'gallery-11.jpg',
  '780104378_1082671424161005_4758074320051400300_n.jpg': 'gallery-12.jpg',
  '790318413_1441891184575359_4229728529427784927_n.jpg': 'gallery-13.jpg',
  '791438116_1617387513068946_3960186898318039221_n.jpg': 'gallery-14.jpg',
  '773714148_1582632150204337_3020972377345859318_n.jpg': 'gallery-15.jpg',
  '506396784_1726104552117894_2893767434422243888_n.jpg': 'gallery-18.jpg',
  '839012366_1421367052767464_4575236962858430567_n.jpg': 'gallery-17.jpg',
};

// Optimization settings
const WIDTHS = [480, 768, 1280, 1920];
const HERO_MAX_SIZE = 150 * 1024; // 150KB
const REGULAR_MAX_SIZE = 100 * 1024; // 100KB

async function optimizeImage(inputPath, outputName, isHero = false) {
  const maxSize = isHero ? HERO_MAX_SIZE : REGULAR_MAX_SIZE;
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Processing: ${outputName}`);
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${metadata.format}`);
    
    // Generate responsive sizes
    for (const width of WIDTHS) {
      if (width >= metadata.width) continue;
      
      const outputPath = path.join(
        outputDir,
        outputName.replace('.jpg', `-${width}w.webp`)
      );
      
      await image
        .clone()
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      const stats = fs.statSync(outputPath);
      console.log(`  Generated: ${width}w (${(stats.size / 1024).toFixed(1)}KB)`);
    }
    
    // Original size optimized
    const mainOutputPath = path.join(outputDir, outputName);
    let quality = 85;
    let result;
    
    // Try to meet size budget
    do {
      result = await image
        .clone()
        .webp({ quality, effort: 6 })
        .toBuffer();
      
      if (result.length <= maxSize || quality <= 60) break;
      quality -= 5;
    } while (true);
    
    fs.writeFileSync(mainOutputPath, result);
    console.log(`  Main: ${(result.length / 1024).toFixed(1)}KB (quality: ${quality})`);
    
  } catch (error) {
    console.error(`Error processing ${outputName}:`, error.message);
  }
}

async function main() {
  console.log('Starting image optimization...\n');
  
  const files = fs.readdirSync(sourceDir);
  
  for (const [sourceFile, outputName] of Object.entries(imageMapping)) {
    const inputPath = path.join(sourceDir, sourceFile);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`Warning: ${sourceFile} not found, skipping...`);
      continue;
    }
    
    const isHero = outputName.includes('hero') || outputName.includes('about');
    await optimizeImage(inputPath, outputName, isHero);
    console.log('');
  }
  
  console.log('Image optimization complete!');
}

main().catch(console.error);
