/**
 * Stock Image Fetching Script
 * Fetches high-quality images from Pexels, Unsplash, and Pixabay APIs
 * and organizes them into the proper directory structure.
 *
 * Usage: node scripts/fetch-stock-images.js
 *
 * Requirements: Add API keys to .env.local:
 * PEXELS_API_KEY=your_key_here
 * UNSPLASH_ACCESS_KEY=your_key_here
 * PIXABAY_API_KEY=your_key_here
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables
require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });

const imagesDir = path.join(process.cwd(), 'public', 'images');
const clinicalDir = path.join(imagesDir, 'clinical');
const locationsDir = path.join(imagesDir, 'locations');
const marketingDir = path.join(imagesDir, 'marketing');
const uiDir = path.join(imagesDir, 'ui');

// Image requirements
const imageRequirements = {
  clinical: [
    { query: 'medical diagram', filename: 'medical-diagram-1.webp', source: 'pexels' },
    { query: 'healthcare chart', filename: 'healthcare-chart-1.webp', source: 'unsplash' },
    { query: 'doctor consultation', filename: 'doctor-consultation.webp', source: 'pexels' },
  ],
  locations: [
    { query: 'Carmel Indiana', filename: 'carmel-indiana.webp', source: 'unsplash' },
    { query: 'Zionsville Indiana', filename: 'zionsville-indiana.webp', source: 'unsplash' },
    { query: 'Fishers Indiana', filename: 'fishers-indiana.webp', source: 'unsplash' },
    { query: 'Geist Indiana', filename: 'geist-indiana.webp', source: 'unsplash' },
    { query: 'Indianapolis suburban', filename: 'indianapolis-suburban.webp', source: 'pexels' },
  ],
  marketing: [
    { query: 'senior healthcare', filename: 'senior-healthcare.webp', source: 'pexels' },
    { query: 'employer wellness', filename: 'employer-wellness.webp', source: 'unsplash' },
    { query: 'blue collar worker', filename: 'blue-collar-worker.webp', source: 'pexels' },
    { query: 'small business team', filename: 'small-business-team.webp', source: 'unsplash' },
    { query: 'healthcare savings', filename: 'healthcare-savings.webp', source: 'pixabay' },
  ],
  ui: [
    { query: 'medical icon', filename: 'medical-icon.webp', source: 'pixabay' },
    { query: 'healthcare background', filename: 'healthcare-background.webp', source: 'unsplash' },
  ],
};

// API Functions
async function fetchFromPexels(query, filename, targetDir) {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    console.warn(`⚠️  PEXELS_API_KEY not found. Skipping ${filename}`);
    return false;
  }

  try {
    const searchUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;

    const response = await fetch(searchUrl, {
      headers: {
        'Authorization': apiKey,
      },
    });

    const data = await response.json();

    if (data.photos && data.photos.length > 0) {
      const photo = data.photos[0];
      const imageUrl = photo.src.large;
      await downloadImage(imageUrl, path.join(targetDir, filename));
      console.log(`✅ Fetched from Pexels: ${filename}`);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error fetching from Pexels (${filename}):`, error.message);
  }
  return false;
}

async function fetchFromUnsplash(query, filename, targetDir) {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!apiKey) {
    console.warn(`⚠️  UNSPLASH_ACCESS_KEY not found. Skipping ${filename}`);
    return false;
  }

  try {
    const searchUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;

    const response = await fetch(searchUrl, {
      headers: {
        'Authorization': `Client-ID ${apiKey}`,
      },
    });

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const photo = data.results[0];
      const imageUrl = photo.urls.regular;
      await downloadImage(imageUrl, path.join(targetDir, filename));
      console.log(`✅ Fetched from Unsplash: ${filename}`);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error fetching from Unsplash (${filename}):`, error.message);
  }
  return false;
}

async function fetchFromPixabay(query, filename, targetDir) {
  const apiKey = process.env.PIXABAY_API_KEY;
  if (!apiKey) {
    console.warn(`⚠️  PIXABAY_API_KEY not found. Skipping ${filename}`);
    return false;
  }

  try {
    const searchUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&per_page=1`;

    const response = await fetch(searchUrl);
    const data = await response.json();

    if (data.hits && data.hits.length > 0) {
      const photo = data.hits[0];
      const imageUrl = photo.largeImageURL || photo.webformatURL;
      await downloadImage(imageUrl, path.join(targetDir, filename));
      console.log(`✅ Fetched from Pixabay: ${filename}`);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error fetching from Pixabay (${filename}):`, error.message);
  }
  return false;
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
  console.log('🖼️  Starting stock image fetching...\n');

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

      // Rate limiting - wait 1 second between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log(`\n📊 Fetch complete: ${successCount} succeeded, ${failCount} failed`);
  console.log('\n💡 Next steps:');
  console.log('1. Review downloaded images for quality and relevance');
  console.log('2. Optimize images using sharp or online tools');
  console.log('3. Update component references to use new image paths');
  console.log('4. Test image loading on the site');
}

main().catch(console.error);

