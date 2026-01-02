/**
 * Final Cleanup Script
 * Removes any remaining JPG/PNG duplicates now that WebP is active
 *
 * Usage: node scripts/final-cleanup.js
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public', 'images');

// Files to check and remove (old formats)
const filesToCheck = [
  // Provider images
  'providers/chase-keirn.jpg',
  'providers/chase-keirn.jpeg',
  'providers/karina-white.jpg',
  'providers/maddie-klinger.jpg',
  'providers/Dr.-James-Pike.webp', // Old naming convention
  'providers/Karina White...jpg', // Old naming convention
  'providers/Madeline Klinger...jpg', // Old naming convention

  // Old directory structure
  'provider bio/chase-keirn.jpeg',
  'provider bio/Dr.-James-Pike.webp',
  'provider bio/Karina White...jpg',
  'provider bio/Madeline Klinger...jpg',
];

// Duplicate files that have been replaced
const duplicateFiles = [
  'clinical/doctor-consultation.webp',  // Replaced by round-table.webp
  'marketing/blue-collar-worker.webp',  // Replaced by trades-90-10.webp
  'locations/carmel-indiana.webp',      // Replaced by carmel-hero.webp
  'ui/healthcare-background.webp',      // Replaced by mega-menu-overlay.webp
];

function cleanupFiles() {
  console.log('🧹 Starting final cleanup...\n');
  console.log('⚠️  This will remove old JPG/PNG files and duplicates.\n');

  let removedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  // Check and remove old format files
  for (const file of filesToCheck) {
    const filePath = path.join(imagesDir, file);

    try {
      if (fs.existsSync(filePath)) {
        // Check if WebP version exists
        const webpPath = filePath.replace(/\.(jpg|jpeg)$/i, '.webp');
        const webpExists = fs.existsSync(webpPath);

        if (webpExists || file.includes('Dr.-James-Pike') || file.includes('Karina') || file.includes('Madeline')) {
          fs.unlinkSync(filePath);
          console.log(`✅ Removed old format: ${file}`);
          removedCount++;
        } else {
          console.warn(`⚠️  WebP version not found for: ${file}. Keeping original.`);
          skippedCount++;
        }
      } else {
        console.log(`ℹ️  File not found: ${file} (already removed or never existed)`);
        skippedCount++;
      }
    } catch (error) {
      console.error(`❌ Error removing ${file}:`, error.message);
      errorCount++;
    }
  }

  // Remove duplicate files (if replacements exist)
  for (const duplicate of duplicateFiles) {
    const duplicatePath = path.join(imagesDir, duplicate);

    try {
      if (fs.existsSync(duplicatePath)) {
        // Verify replacement exists
        const replacementMap = {
          'clinical/doctor-consultation.webp': 'clinical/round-table.webp',
          'marketing/blue-collar-worker.webp': 'marketing/trades-90-10.webp',
          'locations/carmel-indiana.webp': 'locations/carmel-hero.webp',
          'ui/healthcare-background.webp': 'ui/mega-menu-overlay.webp',
        };

        const replacement = replacementMap[duplicate];
        if (replacement) {
          const replacementPath = path.join(imagesDir, replacement);
          if (fs.existsSync(replacementPath)) {
            fs.unlinkSync(duplicatePath);
            console.log(`✅ Removed duplicate: ${duplicate}`);
            console.log(`   Replaced by: ${replacement}`);
            removedCount++;
          } else {
            console.warn(`⚠️  Replacement not found: ${replacement}. Keeping duplicate.`);
            skippedCount++;
          }
        }
      }
    } catch (error) {
      console.error(`❌ Error removing ${duplicate}:`, error.message);
      errorCount++;
    }
  }

  // Check for old directory structure
  const oldProviderBioDir = path.join(imagesDir, 'provider bio');
  if (fs.existsSync(oldProviderBioDir)) {
    try {
      const files = fs.readdirSync(oldProviderBioDir);
      if (files.length === 0) {
        fs.rmdirSync(oldProviderBioDir);
        console.log(`✅ Removed empty directory: provider bio/`);
        removedCount++;
      } else {
        console.warn(`⚠️  Directory not empty: provider bio/ (${files.length} files remaining)`);
        skippedCount++;
      }
    } catch (error) {
      console.error(`❌ Error removing directory:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n📊 Cleanup complete:`);
  console.log(`   ✅ Removed: ${removedCount}`);
  console.log(`   ⏭️  Skipped: ${skippedCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);

  if (removedCount > 0) {
    console.log('\n💡 Old files have been removed.');
    console.log('   All images are now in WebP format with strategic naming.');
  }

  console.log('\n✅ Final cleanup complete!');
}

cleanupFiles();

