# Image Copy Helper Script
# This script helps you copy your images to the public/images folder

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Valentine's Day Gallery Setup" -ForegroundColor Magenta
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

$imagesFolder = "c:\Users\ABC\Desktop\anigrevity\anitigravity_workspace\public\images"

Write-Host "Target folder: $imagesFolder" -ForegroundColor Yellow
Write-Host ""
Write-Host "Please copy your images to this folder with these names:" -ForegroundColor Green
Write-Host "  - heart1.jpg (I Miss You Bachhhhaaa)" -ForegroundColor White
Write-Host "  - heart2.jpg (Love You Baby Doll)" -ForegroundColor White
Write-Host "  - flower.jpg (Beautiful Moments)" -ForegroundColor White
Write-Host "  - video1.mp4 (Optional: Your video)" -ForegroundColor White
Write-Host ""
Write-Host "Opening the images folder now..." -ForegroundColor Cyan

# Open the folder in File Explorer
Start-Process explorer.exe $imagesFolder

Write-Host ""
Write-Host "✓ Folder opened! Copy your images there." -ForegroundColor Green
Write-Host "✓ The website will automatically update when you add images!" -ForegroundColor Green
Write-Host ""
Write-Host "Your website is running at: http://localhost:5174/" -ForegroundColor Magenta
