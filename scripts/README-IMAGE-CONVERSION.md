# Image Format Optimization Guide

This guide helps you convert JPG/JPEG images to WebP format for better performance and LCP scores.

## Why WebP?

- **Smaller file sizes**: Typically 25-35% smaller than JPG with same quality
- **Better LCP scores**: Faster page loads = better Google rankings
- **Modern format**: Supported by all modern browsers
- **Case-sensitive safe**: Works perfectly on Linux-based Vercel servers

## Current Images to Convert

The following provider images need conversion from JPG to WebP:

1. `public/images/providers/chase-keirn.jpg` → `chase-keirn.webp`
2. `public/images/providers/karina-white.jpg` → `karina-white.webp`
3. `public/images/providers/maddie-klinger.jpg` → `maddie-klinger.webp`

## Conversion Methods

### Option 1: Using Node.js Script (Recommended)

**Prerequisites:**
```bash
npm install sharp --save-dev
```

**Run:**
```bash
node scripts/convert-images-to-webp.js
```

### Option 2: Using PowerShell Script (Windows)

**Prerequisites:**
```powershell
# Install ImageMagick
choco install imagemagick

# OR install ffmpeg
choco install ffmpeg
```

**Run:**
```powershell
.\scripts\convert-images-to-webp.ps1
```

### Option 3: Manual Conversion (Online Tools)

1. Visit https://squoosh.app/ or https://convertio.co/jpg-webp/
2. Upload each JPG file
3. Download as WebP
4. Save to `public/images/providers/` with kebab-case names

### Option 4: Using ImageMagick CLI

```bash
# Single file
magick public/images/providers/chase-keirn.jpg -quality 85 public/images/providers/chase-keirn.webp

# All files at once (PowerShell)
Get-ChildItem public/images/providers/*.jpg | ForEach-Object {
    $output = $_.FullName -replace '\.jpg$', '.webp'
    magick $_.FullName -quality 85 $output
}
```

## Verification Steps

After conversion:

1. ✅ **Check file sizes**: WebP should be 25-35% smaller
2. ✅ **Visual inspection**: Open WebP files to ensure quality is acceptable
3. ✅ **Code updated**: `lib/data/providers.ts` already references `.webp` extensions
4. ✅ **Test locally**: Run `npm run dev` and check provider pages
5. ✅ **Delete old files**: Remove `.jpg` files after confirming WebP works

## File Naming Convention

All images follow kebab-case naming:
- ✅ `james-pike.webp` (correct)
- ✅ `karina-white.webp` (correct)
- ❌ `James Pike.webp` (wrong - has spaces and capital letters)
- ❌ `karina_white.webp` (wrong - uses underscores)

## Additional Images to Consider

The following images are referenced but may need conversion:

- `og-image.jpg` - Used in metadata and structured data
  - Location: `public/og-image.jpg` (if it exists)
  - Should be converted to `og-image.webp` and references updated

## After Conversion Checklist

- [ ] All JPG files converted to WebP
- [ ] Code references updated (already done in `lib/data/providers.ts`)
- [ ] Images display correctly on provider pages
- [ ] Old JPG files deleted
- [ ] Site tested locally
- [ ] Deployed to staging/production and verified

## Performance Impact

Expected improvements:
- **LCP (Largest Contentful Paint)**: 20-30% faster
- **Total page weight**: 25-35% reduction
- **Bandwidth savings**: Significant for mobile users
- **SEO boost**: Better Core Web Vitals scores

## Troubleshooting

**Issue**: WebP images don't display
- **Solution**: Check browser support (all modern browsers support WebP)

**Issue**: Quality looks poor
- **Solution**: Increase quality parameter (try 90 instead of 85)

**Issue**: File size not smaller
- **Solution**: Some images may already be optimized; WebP still provides better compression

