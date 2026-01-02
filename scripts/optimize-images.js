#!/usr/bin/env node
/**
 * Image optimization script
 * - Recursively scans an input directory for images
 * - Converts JPG/PNG to WebP and re-encodes WebP with specified quality
 * - Preserves folder structure under the output directory
 *
 * Usage:
 *   node scripts/optimize-images.js --in public/images --out public/images/optimized --quality 78
 */

const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { inDir: 'public/images', outDir: 'public/images/optimized', quality: 78 };
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i];
    const val = args[i + 1];
    if (!key) continue;
    if (key === '--in' && val) out.inDir = val;
    if (key === '--out' && val) out.outDir = val;
    if (key === '--quality' && val) out.quality = Number(val) || out.quality;
  }
  return out;
}

async function ensureDir(dirPath) {
  await fsp.mkdir(dirPath, { recursive: true });
}

function isImage(file) {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
}

function destPathFor(srcPath, inDir, outDir) {
  const rel = path.relative(inDir, srcPath);
  const ext = path.extname(rel).toLowerCase();
  const base = rel.slice(0, -ext.length);
  // Always output .webp
  return path.join(outDir, `${base}.webp`);
}

async function processImage(srcPath, destPath, quality) {
  const ext = path.extname(srcPath).toLowerCase();
  try {
    if (ext === '.webp') {
      await sharp(srcPath)
        .webp({ quality, effort: 4 })
        .toFile(destPath);
    } else if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      await sharp(srcPath)
        .webp({ quality, effort: 4 })
        .toFile(destPath);
    }
    return true;
  } catch (err) {
    console.error(`❌ Failed to optimize ${srcPath}:`, err.message);
    return false;
  }
}

async function walk(dir, files = []) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, files);
    } else if (entry.isFile() && isImage(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const { inDir, outDir, quality } = parseArgs();
  console.log('🛠️  Image optimization starting...');
  console.log(`   Input:  ${inDir}`);
  console.log(`   Output: ${outDir}`);
  console.log(`   Quality: ${quality}`);

  if (!fs.existsSync(inDir)) {
    console.error(`Input directory not found: ${inDir}`);
    process.exit(1);
  }

  await ensureDir(outDir);

  const files = await walk(inDir);
  console.log(`📦 Found ${files.length} images to process`);

  let ok = 0, fail = 0;
  for (const src of files) {
    const dest = destPathFor(src, inDir, outDir);
    await ensureDir(path.dirname(dest));
    const success = await processImage(src, dest, quality);
    if (success) ok++; else fail++;
  }

  console.log(`\n✅ Optimization complete: ${ok} succeeded, ${fail} failed`);
  console.log('   Next: Wire optimized images where beneficial (or keep originals for hero backgrounds).');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
