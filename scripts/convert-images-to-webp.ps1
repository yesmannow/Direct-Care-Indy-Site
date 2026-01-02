# PowerShell Image Conversion Script
# Converts JPG/JPEG images to WebP format using ImageMagick or ffmpeg
#
# Requirements:
# - Install ImageMagick: choco install imagemagick
# - OR install ffmpeg: choco install ffmpeg
#
# Usage: .\scripts\convert-images-to-webp.ps1

$ErrorActionPreference = "Stop"

$imagesDir = Join-Path $PSScriptRoot "..\public\images\providers"
$imagesToConvert = @(
    "chase-keirn.jpg",
    "karina-white.jpg",
    "maddie-klinger.jpg"
)

Write-Host "🔄 Starting image conversion to WebP format...`n" -ForegroundColor Cyan

# Check if ImageMagick is available
$magickAvailable = $false
try {
    $null = Get-Command magick -ErrorAction Stop
    $magickAvailable = $true
    Write-Host "✅ ImageMagick found" -ForegroundColor Green
} catch {
    Write-Host "⚠️  ImageMagick not found. Trying ffmpeg..." -ForegroundColor Yellow
}

# Check if ffmpeg is available
$ffmpegAvailable = $false
if (-not $magickAvailable) {
    try {
        $null = Get-Command ffmpeg -ErrorAction Stop
        $ffmpegAvailable = $true
        Write-Host "✅ ffmpeg found" -ForegroundColor Green
    } catch {
        Write-Host "❌ Neither ImageMagick nor ffmpeg found. Please install one:" -ForegroundColor Red
        Write-Host "   choco install imagemagick" -ForegroundColor Yellow
        Write-Host "   OR" -ForegroundColor Yellow
        Write-Host "   choco install ffmpeg" -ForegroundColor Yellow
        exit 1
    }
}

$successCount = 0
$failCount = 0

foreach ($image in $imagesToConvert) {
    $inputPath = Join-Path $imagesDir $image
    $outputName = $image -replace '\.(jpg|jpeg)$', '.webp'
    $outputPath = Join-Path $imagesDir $outputName

    if (-not (Test-Path $inputPath)) {
        Write-Host "❌ Input file not found: $inputPath" -ForegroundColor Red
        $failCount++
        continue
    }

    try {
        $inputSize = (Get-Item $inputPath).Length

        if ($magickAvailable) {
            # Use ImageMagick
            & magick $inputPath -quality 85 $outputPath
        } elseif ($ffmpegAvailable) {
            # Use ffmpeg
            & ffmpeg -i $inputPath -quality 85 -compression_level 6 $outputPath -y
        }

        if (Test-Path $outputPath) {
            $outputSize = (Get-Item $outputPath).Length
            $savings = [math]::Round((1 - $outputSize / $inputSize) * 100, 1)

            Write-Host "✅ Converted: $image → $outputName" -ForegroundColor Green
            Write-Host "   Size: $([math]::Round($inputSize / 1KB, 1))KB → $([math]::Round($outputSize / 1KB, 1))KB ($savings% smaller)" -ForegroundColor Gray
            $successCount++
        } else {
            throw "Output file was not created"
        }
    } catch {
        Write-Host "❌ Error converting $image : $_" -ForegroundColor Red
        $failCount++
    }
}

Write-Host "`n📊 Conversion complete: $successCount succeeded, $failCount failed" -ForegroundColor Cyan

if ($successCount -gt 0) {
    Write-Host "`n⚠️  Next steps:" -ForegroundColor Yellow
    Write-Host "1. Verify the WebP images look correct" -ForegroundColor White
    Write-Host "2. Update lib/data/providers.ts to use .webp extensions" -ForegroundColor White
    Write-Host "3. Delete the old .jpg files after verification" -ForegroundColor White
    Write-Host "4. Test the site to ensure images load properly" -ForegroundColor White
}

