# Open Music Folder Script
# This script will open the music folder where you can add your love song

$musicFolder = "c:\Users\ABC\Desktop\anigrevity\anitigravity_workspace\public\music"

Write-Host "================================================" -ForegroundColor Magenta
Write-Host "       🎵 ADD YOUR LOVE SONG 🎵" -ForegroundColor Pink
Write-Host "================================================" -ForegroundColor Magenta
Write-Host ""
Write-Host "Opening music folder..." -ForegroundColor Cyan
Write-Host ""
Write-Host "INSTRUCTIONS:" -ForegroundColor Yellow
Write-Host "1. Download 'Tumhare Sang Har Ek Lamha' or any romantic song" -ForegroundColor White
Write-Host "2. Copy the MP3 file to this folder" -ForegroundColor White
Write-Host "3. Rename it to: love-song.mp3" -ForegroundColor Green
Write-Host "4. Refresh your browser - music will play!" -ForegroundColor White
Write-Host ""
Write-Host "Current folder: $musicFolder" -ForegroundColor Gray
Write-Host ""
Write-Host "If folder doesn't exist, it will be created..." -ForegroundColor Yellow

# Create folder if it doesn't exist
if (-not (Test-Path $musicFolder)) {
    New-Item -ItemType Directory -Path $musicFolder -Force | Out-Null
    Write-Host "✓ Music folder created!" -ForegroundColor Green
} else {
    Write-Host "✓ Music folder exists!" -ForegroundColor Green
}

# Open the folder
Start-Process explorer.exe $musicFolder

Write-Host ""
Write-Host "✓ Folder opened! Add your song now! 💕" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Magenta
Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
