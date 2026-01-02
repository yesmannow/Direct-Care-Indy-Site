/**
 * Image Conversion Script
 * Converts JPG/JPEG images to WebP format for better performance
 *
 * Usage: node scripts/convert-images-to-webp.js
 *
 * Requirements: Install sharp first
 * npm install sharp --save-dev
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public', 'images');
const providersDir = path.join(imagesDir, 'providers');

// Images to convert
const imagesToConvert = [
  { input: 'chase-keirn.jpg', output: 'chase-keirn.webp' },
  { input: 'karina-white.jpg', output: 'karina-white.webp' },
  { input: 'maddie-klinger.jpg', output: 'maddie-klinger.webp' },
];

async function convertImage(inputPath, outputPath) {
  try {
    const fullInputPath = path.join(providersDir, inputPath);
    const fullOutputPath = path.join(providersDir, outputPath);

    // Check if output already exists
    if (fs.existsSync(fullOutputPath)) {
      console.log(`✅ WebP already exists: ${outputPath} (skipping conversion)`);
      return true;
    }

    // Check if input file exists
    if (!fs.existsSync(fullInputPath)) {
      console.warn(`⚠️  Input file not found: ${inputPath}`);
      console.log(`   Checking if WebP version already exists...`);

      // Check if WebP version exists with different name
      const webpExists = fs.existsSync(fullOutputPath);
      if (webpExists) {
        console.log(`   ✅ WebP version found: ${outputPath}`);
        return true;
      }

      return false;
    }

    // Convert to WebP with quality optimization
    await sharp(fullInputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(fullOutputPath);

    const inputStats = fs.statSync(fullInputPath);
    const outputStats = fs.statSync(fullOutputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✅ Converted: ${inputPath} → ${outputPath}`);
    console.log(`   Size: ${(inputStats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB (${savings}% smaller)`);

    return true;
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🔄 Starting image conversion to WebP format...\n');

  let successCount = 0;
  let failCount = 0;

  for (const image of imagesToConvert) {
    const success = await convertImage(image.input, image.output);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log(`\n📊 Conversion complete: ${successCount} succeeded, ${failCount} failed`);

  if (successCount > 0) {
    console.log('\n⚠️  Next steps:');
    console.log('1. Verify the WebP images look correct');
    console.log('2. Update lib/data/providers.ts to use .webp extensions');
    console.log('3. Delete the old .jpg files after verification');
    console.log('4. Test the site to ensure images load properly');
  }
}

main().catch(console.error);

