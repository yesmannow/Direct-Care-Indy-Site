/**
 * Refined Stock Image Fetching Script
 * Fetches high-quality images with targeted, high-intent keywords
 * aligned with "Physician-Led, Technology-Enabled" aesthetic
 *
 * Usage:
 *   node scripts/fetch-stock-images-refined.js
 *   node scripts/fetch-stock-images-refined.js --clinical "modern pulmonary clinic" --marketing "diverse tradespeople"
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables
require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });

// Parse command-line arguments
const args = process.argv.slice(2);
const customQueries = {};
for (let i = 0; i < args.length; i += 2) {
  if (args[i]?.startsWith('--')) {
    const key = args[i].replace('--', '');
    const value = args[i + 1];
    if (value && !value.startsWith('--')) {
      customQueries[key] = value.split(',').map(q => q.trim());
    }
  }
}

const imagesDir = path.join(process.cwd(), 'public', 'images');
const clinicalDir = path.join(imagesDir, 'clinical');
const locationsDir = path.join(imagesDir, 'locations');
const marketingDir = path.join(imagesDir, 'marketing');
const uiDir = path.join(imagesDir, 'ui');

// Refined image requirements with high-intent keywords
const imageRequirements = {
  clinical: customQueries.clinical || [
    { query: 'modern pulmonary clinic', filename: 'pulmonary-clinic.webp', source: 'pexels' },
    { query: 'medical laboratory research', filename: 'medical-laboratory.webp', source: 'unsplash' },
    { query: 'board certified doctor consultation', filename: 'round-table.webp', source: 'pexels' },
    { query: 'specialist medical team', filename: 'specialist-team.webp', source: 'unsplash' },
  ],
  locations: customQueries.locations || [
    { query: 'indiana suburban house', filename: 'indiana-suburban-home.webp', source: 'unsplash' },
    { query: 'upscale carmel neighborhood', filename: 'carmel-hero.webp', source: 'unsplash' },
    { query: 'zionsville street residential', filename: 'zionsville-hero.webp', source: 'unsplash' },
    { query: 'fishers indiana community', filename: 'fishers-hero.webp', source: 'unsplash' },
    { query: 'geist indiana neighborhood', filename: 'geist-hero.webp', source: 'unsplash' },
  ],
  marketing: customQueries.marketing || [
    { query: 'diverse tradespeople', filename: 'trades-diverse.webp', source: 'pexels' },
    { query: 'hvac technician', filename: 'hvac-technician.webp', source: 'pexels' },
    { query: 'senior wellness outdoors', filename: 'senior-wellness.webp', source: 'unsplash' },
    { query: 'small business office team', filename: 'small-business-office.webp', source: 'unsplash' },
    { query: 'tradespeople 90 10 benefit', filename: 'trades-90-10.webp', source: 'pexels' },
  ],
  ui: customQueries.ui || [
    { query: 'abstract blue medical background', filename: 'mega-menu-overlay.webp', source: 'unsplash' },
    { query: 'clean clinical texture', filename: 'clinical-texture.webp', source: 'pexels' },
    { query: 'teal blue gradient', filename: 'teal-gradient.webp', source: 'unsplash' },
  ],
};

// API Functions with better error handling
async function fetchFromPexels(query, filename, targetDir) {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    console.warn(`⚠️  PEXELS_API_KEY not found. Skipping ${filename}`);
    return false;
  }

  try {
    // Ensure query is not empty
    if (!query || query.trim().length === 0) {
      console.warn(`⚠️  Empty query for ${filename}. Skipping.`);
      return false;
    }

    const searchUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&size=large`;

    const response = await fetch(searchUrl, {
      headers: {
        'Authorization': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.photos && data.photos.length > 0) {
      const photo = data.photos[0];
      const imageUrl = photo.src.large || photo.src.medium;
      await downloadImage(imageUrl, path.join(targetDir, filename));
      console.log(`✅ Fetched from Pexels: ${filename} (${query})`);
      return true;
    } else {
      console.warn(`⚠️  No results for "${query}". Trying alternative...`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error fetching from Pexels (${filename}):`, error.message);
    return false;
  }
}

async function fetchFromUnsplash(query, filename, targetDir) {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!apiKey) {
    console.warn(`⚠️  UNSPLASH_ACCESS_KEY not found. Skipping ${filename}`);
    return false;
  }

  try {
    if (!query || query.trim().length === 0) {
      console.warn(`⚠️  Empty query for ${filename}. Skipping.`);
      return false;
    }

    const searchUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;

    const response = await fetch(searchUrl, {
      headers: {
        'Authorization': `Client-ID ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const photo = data.results[0];
      const imageUrl = photo.urls.regular || photo.urls.small;
      await downloadImage(imageUrl, path.join(targetDir, filename));
      console.log(`✅ Fetched from Unsplash: ${filename} (${query})`);
      return true;
    } else {
      console.warn(`⚠️  No results for "${query}". Trying alternative...`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error fetching from Unsplash (${filename}):`, error.message);
    return false;
  }
}

async function fetchFromPixabay(query, filename, targetDir) {
  const apiKey = process.env.PIXABAY_API_KEY;
  if (!apiKey) {
    console.warn(`⚠️  PIXABAY_API_KEY not found. Skipping ${filename}`);
    return false;
  }

  try {
    if (!query || query.trim().length === 0) {
      console.warn(`⚠️  Empty query for ${filename}. Skipping.`);
      return false;
    }

    // Pixabay requires category or valid query
    const searchUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&category=health&per_page=1&safesearch=true`;

    const response = await fetch(searchUrl);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.hits && data.hits.length > 0) {
      const photo = data.hits[0];
      const imageUrl = photo.largeImageURL || photo.webformatURL;
      await downloadImage(imageUrl, path.join(targetDir, filename));
      console.log(`✅ Fetched from Pixabay: ${filename} (${query})`);
      return true;
    } else {
      console.warn(`⚠️  No results for "${query}". Trying alternative...`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error fetching from Pixabay (${filename}):`, error.message);
    return false;
  }
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  console.log('🖼️  Starting refined stock image fetching...\n');
  console.log('📋 Using high-intent keywords for "Physician-Led, Technology-Enabled" aesthetic\n');

  // Ensure directories exist
  [clinicalDir, locationsDir, marketingDir, uiDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  let successCount = 0;
  let failCount = 0;

  // Process each category
  for (const [category, images] of Object.entries(imageRequirements)) {
    console.log(`\n📁 Processing ${category} images...`);
    const targetDir = path.join(imagesDir, category);

    for (const image of images) {
      let success = false;

      switch (image.source) {
        case 'pexels':
          success = await fetchFromPexels(image.query, image.filename, targetDir);
          break;
        case 'unsplash':
          success = await fetchFromUnsplash(image.query, image.filename, targetDir);
          break;
        case 'pixabay':
          success = await fetchFromPixabay(image.query, image.filename, targetDir);
          break;
      }

      if (success) {
        successCount++;
      } else {
        failCount++;
      }

      // Rate limiting - wait 1.5 seconds between requests
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
  }

  console.log(`\n📊 Fetch complete: ${successCount} succeeded, ${failCount} failed`);
  console.log('\n💡 Next steps:');
  console.log('1. Review downloaded images for color/vibe alignment');
  console.log('2. Run reorganization script: node scripts/reorganize-images.js');
  console.log('3. Verify images match teal/navy/white color scheme');
  console.log('4. Test image loading on the site');
}

main().catch(console.error);

