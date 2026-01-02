# PowerShell Stock Image Fetching Script
# Fetches high-quality images from Pexels, Unsplash, and Pixabay APIs
#
# Requirements:
# - Add API keys to .env.local
# - Install dotenv: npm install dotenv
#
# Usage: .\scripts\fetch-stock-images.ps1

$ErrorActionPreference = "Stop"

# Load environment variables
$envPath = Join-Path $PSScriptRoot "..\.env.local"
if (Test-Path $envPath) {
    Get-Content $envPath | ForEach-Object {
        if ($_ -match '^\s*([^#][^=]*)\s*=\s*(.*)\s*$') {
            $key = $matches[1].Trim()
            $value = $matches[2].Trim()
            [Environment]::SetEnvironmentVariable($key, $value, "Process")
        }
    }
}

$imagesDir = Join-Path $PSScriptRoot "..\public\images"
$clinicalDir = Join-Path $imagesDir "clinical"
$locationsDir = Join-Path $imagesDir "locations"
$marketingDir = Join-Path $imagesDir "marketing"
$uiDir = Join-Path $imagesDir "ui"

# Ensure directories exist
@($clinicalDir, $locationsDir, $marketingDir, $uiDir) | ForEach-Object {
    if (-not (Test-Path $_)) {
        New-Item -ItemType Directory -Path $_ -Force | Out-Null
    }
}

Write-Host "🖼️  Starting stock image fetching...`n" -ForegroundColor Cyan

# Note: This is a simplified version. For full functionality, use the Node.js script.
Write-Host "⚠️  PowerShell version is a placeholder." -ForegroundColor Yellow
Write-Host "For full functionality, use the Node.js script:" -ForegroundColor Yellow
Write-Host "   node scripts/fetch-stock-images.js" -ForegroundColor Green
Write-Host "`nThe Node.js script supports:" -ForegroundColor White
Write-Host "  - Pexels API integration" -ForegroundColor Gray
Write-Host "  - Unsplash API integration" -ForegroundColor Gray
Write-Host "  - Pixabay API integration" -ForegroundColor Gray
Write-Host "  - Automatic image downloading" -ForegroundColor Gray
Write-Host "  - Rate limiting" -ForegroundColor Gray

Write-Host "`n📋 Required API Keys in .env.local:" -ForegroundColor Cyan
Write-Host "  PEXELS_API_KEY=your_key_here" -ForegroundColor White
Write-Host "  UNSPLASH_ACCESS_KEY=your_key_here" -ForegroundColor White
Write-Host "  PIXABAY_API_KEY=your_key_here" -ForegroundColor White

Write-Host "`n💡 Get API keys:" -ForegroundColor Cyan
Write-Host "  Pexels: https://www.pexels.com/api/" -ForegroundColor Gray
Write-Host "  Unsplash: https://unsplash.com/developers" -ForegroundColor Gray
Write-Host "  Pixabay: https://pixabay.com/api/docs/" -ForegroundColor Gray

