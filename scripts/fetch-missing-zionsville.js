/**
 * Fetch Missing Zionsville Hero Image
 * Attempts to fetch zionsville-hero.webp with alternative search terms
 *
 * Usage: node scripts/fetch-missing-zionsville.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });

const imagesDir = path.join(process.cwd(), 'public', 'images');
const locationsDir = path.join(imagesDir, 'locations');

// Alternative search terms for Zionsville
const zionsvilleQueries = [
  'zionsville indiana',
  'indiana small town',
  'suburban indiana neighborhood',
  'indiana residential street',
  'midwest suburban community',
];

async function fetchFromUnsplash(query, filename, targetDir) {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!apiKey) {
    console.warn(`⚠️  UNSPLASH_ACCESS_KEY not found.`);
    return false;
  }

  try {
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
      console.log(`✅ Fetched: ${filename} (${query})`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
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
  console.log('🔍 Fetching missing Zionsville hero image...\n');

  if (!fs.existsSync(locationsDir)) {
    fs.mkdirSync(locationsDir, { recursive: true });
  }

  const targetFile = path.join(locationsDir, 'zionsville-hero.webp');

  // Check if already exists
  if (fs.existsSync(targetFile)) {
    console.log('✅ zionsville-hero.webp already exists!');
    return;
  }

  // Try each query until one succeeds
  for (const query of zionsvilleQueries) {
    console.log(`Trying: "${query}"...`);
    const success = await fetchFromUnsplash(query, 'zionsville-hero.webp', locationsDir);

    if (success) {
      console.log(`\n✅ Successfully fetched zionsville-hero.webp!`);
      return;
    }

    // Wait between attempts
    await new Promise(resolve => setTimeout(resolve, 1500));
  }

  console.log('\n⚠️  Could not fetch zionsville-hero.webp with any query.');
  console.log('   You may need to manually find and add this image.');
}

main().catch(console.error);

