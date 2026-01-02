/**
 * Cleanup Duplicate Images Script
 * Removes old duplicate files after reorganization
 *
 * Usage: node scripts/cleanup-duplicate-images.js
 *
 * This script removes old files that have been replaced by new strategic names.
 * Run after verifying new images work correctly.
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public', 'images');

// Files to remove (old names that have been replaced)
const filesToRemove = [
  'clinical/doctor-consultation.webp',  // Replaced by round-table.webp
  'marketing/blue-collar-worker.webp',  // Replaced by trades-90-10.webp
  'locations/carmel-indiana.webp',      // Replaced by carmel-hero.webp
  'ui/healthcare-background.webp',      // Replaced by mega-menu-overlay.webp
];

// Verify new files exist before removing old ones
const verificationMap = {
  'clinical/doctor-consultation.webp': 'clinical/round-table.webp',
  'marketing/blue-collar-worker.webp': 'marketing/trades-90-10.webp',
  'locations/carmel-indiana.webp': 'locations/carmel-hero.webp',
  'ui/healthcare-background.webp': 'ui/mega-menu-overlay.webp',
};

function cleanupDuplicates() {
  console.log('🧹 Starting duplicate image cleanup...\n');
  console.log('⚠️  This will remove old files that have been replaced.\n');

  let removedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const oldFile of filesToRemove) {
    const oldPath = path.join(imagesDir, oldFile);
    const newFile = verificationMap[oldFile];
    const newPath = path.join(imagesDir, newFile);

    try {
      // Check if old file exists
      if (!fs.existsSync(oldPath)) {
        console.log(`ℹ️  Old file not found: ${oldFile} (already removed or never existed)`);
        skippedCount++;
        continue;
      }

      // Verify new file exists
      if (!fs.existsSync(newPath)) {
        console.warn(`⚠️  New file not found: ${newFile}`);
        console.warn(`   Keeping old file: ${oldFile} for safety`);
        skippedCount++;
        continue;
      }

      // Remove old file
      fs.unlinkSync(oldPath);
      console.log(`✅ Removed: ${oldFile}`);
      console.log(`   Replaced by: ${newFile}`);
      removedCount++;
    } catch (error) {
      console.error(`❌ Error removing ${oldFile}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n📊 Cleanup complete:`);
  console.log(`   ✅ Removed: ${removedCount}`);
  console.log(`   ⏭️  Skipped: ${skippedCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);

  if (removedCount > 0) {
    console.log('\n💡 Old duplicate files have been removed.');
    console.log('   New strategic files are now the only versions.');
  }
}

cleanupDuplicates();

