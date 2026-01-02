/**
 * Strategic Image Reorganization Script
 * Reorganizes existing images to match Mega Menu structure
 *
 * Usage: node scripts/reorganize-images.js
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public', 'images');

// Strategic mapping: Current Filename -> New Path -> Mega Menu Usage
const reorganizationMap = [
  {
    current: 'clinical/doctor-consultation.webp',
    new: 'clinical/round-table.webp',
    usage: 'Expertise Tab: Highlights Dr. Pike\'s oversight'
  },
  {
    current: 'marketing/blue-collar-worker.webp',
    new: 'marketing/trades-90-10.webp',
    usage: 'Employers Tab: Visual for the "90/10" benefit model'
  },
  {
    current: 'locations/carmel-indiana.webp',
    new: 'locations/carmel-hero.webp',
    usage: 'Care Models: Hero for the Carmel neighborhood page'
  },
  {
    current: 'ui/healthcare-background.webp',
    new: 'ui/mega-menu-overlay.webp',
    usage: 'UI: The glassmorphism background for the nav panel'
  },
];

function reorganizeImages() {
  console.log('🔄 Starting strategic image reorganization...\n');

  let successCount = 0;
  let failCount = 0;

  for (const mapping of reorganizationMap) {
    const currentPath = path.join(imagesDir, mapping.current);
    const newPath = path.join(imagesDir, mapping.new);
    const newDir = path.dirname(newPath);

    try {
      // Check if source file exists
      if (!fs.existsSync(currentPath)) {
        console.warn(`⚠️  Source file not found: ${mapping.current}`);
        failCount++;
        continue;
      }

      // Create target directory if it doesn't exist
      if (!fs.existsSync(newDir)) {
        fs.mkdirSync(newDir, { recursive: true });
      }

      // Check if target already exists
      if (fs.existsSync(newPath)) {
        // Check if it's the same file (already reorganized)
        const currentStats = fs.statSync(currentPath);
        const newStats = fs.statSync(newPath);

        if (currentStats.size === newStats.size) {
          console.log(`✅ Already reorganized: ${mapping.new} (matches ${mapping.current})`);
          console.log(`   Usage: ${mapping.usage}`);
          successCount++;
        } else {
          console.log(`ℹ️  Target exists but different: ${mapping.new}`);
          console.log(`   Keeping both files. New file from fetch script is preferred.`);
          successCount++;
        }
        continue;
      }

      // Copy file to new location
      fs.copyFileSync(currentPath, newPath);
      console.log(`✅ Reorganized: ${mapping.current} → ${mapping.new}`);
      console.log(`   Usage: ${mapping.usage}`);

      // Optionally remove old file (uncomment if desired)
      // fs.unlinkSync(currentPath);
      // console.log(`   Removed old file: ${mapping.current}`);

      successCount++;
    } catch (error) {
      console.error(`❌ Error reorganizing ${mapping.current}:`, error.message);
      failCount++;
    }
  }

  console.log(`\n📊 Reorganization complete: ${successCount} succeeded, ${failCount} failed`);
  console.log('\n💡 Note: Old files are kept for safety. Delete manually after verification.');
}

reorganizeImages();

