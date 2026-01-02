# Stock Image Fetching Guide

This guide helps you fetch high-quality stock images from Pexels, Unsplash, and Pixabay APIs to populate your image directories.

## Setup

### 1. Install Dependencies

```bash
npm install dotenv --save-dev
```

### 2. Get API Keys

**Pexels:**
- Visit: https://www.pexels.com/api/
- Sign up for free account
- Get your API key

**Unsplash:**
- Visit: https://unsplash.com/developers
- Create a developer account
- Create a new application
- Get your Access Key

**Pixabay:**
- Visit: https://pixabay.com/api/docs/
- Sign up for free account
- Get your API key

### 3. Add to .env.local

Create or update `.env.local` in the project root:

```env
PEXELS_API_KEY=your_pexels_key_here
UNSPLASH_ACCESS_KEY=your_unsplash_key_here
PIXABAY_API_KEY=your_pixabay_key_here
```

## Usage

### Node.js Script (Recommended)

```bash
node scripts/fetch-stock-images.js
```

This will:
- Fetch images from all three APIs
- Download them to appropriate directories
- Use kebab-case naming
- Save as WebP format (if API supports it)

### PowerShell Script

```powershell
.\scripts\fetch-stock-images.ps1
```

Note: The PowerShell version is a placeholder. Use the Node.js script for full functionality.

## Image Categories

### Clinical (`public/images/clinical/`)
- Medical diagrams
- Healthcare charts
- Doctor consultations
- Medical expertise visuals

### Locations (`public/images/locations/`)
- Carmel, Indiana
- Zionsville, Indiana
- Fishers, Indiana
- Geist, Indiana
- Indianapolis suburban areas

### Marketing (`public/images/marketing/`)
- Senior healthcare lifestyle
- Employer wellness programs
- Blue-collar workers
- Small business teams
- Healthcare savings visuals

### UI (`public/images/ui/`)
- Medical icons
- Healthcare backgrounds
- Glassmorphism overlays

## Customization

Edit `scripts/fetch-stock-images.js` to:
- Add more image queries
- Change image sources
- Modify file naming
- Adjust image sizes

## After Fetching

1. **Review Images**: Check quality and relevance
2. **Optimize**: Use sharp or online tools to optimize file sizes
3. **Convert to WebP**: Ensure all images are in WebP format
4. **Update References**: Update component code to use new image paths
5. **Test**: Verify images load correctly on the site

## Rate Limits

- **Pexels**: 200 requests/hour (free tier)
- **Unsplash**: 50 requests/hour (free tier)
- **Pixabay**: 100 requests/minute (free tier)

The script includes 1-second delays between requests to respect rate limits.

## Troubleshooting

**Issue**: API key not found
- **Solution**: Ensure `.env.local` exists and contains the correct keys

**Issue**: Images not downloading
- **Solution**: Check API key validity and rate limits

**Issue**: Wrong image quality
- **Solution**: Modify the API calls to request higher resolution images

## Alternative: Manual Download

If APIs are unavailable, manually download images:
1. Visit stock photo sites
2. Search for relevant images
3. Download and save to appropriate directories
4. Use kebab-case naming
5. Convert to WebP format

