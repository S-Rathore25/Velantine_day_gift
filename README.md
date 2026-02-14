# 💕 Valentine's Day Gift - Romantic Gallery Website

A beautiful, interactive Valentine's Day website with a stunning photo gallery, confetti celebrations, and romantic music! 🎉✨

## 🌟 Features

### 🎨 Beautiful Gallery
- **Masonry Layout** - Pinterest-style responsive grid
- **11 Images + 2 Videos** - All your precious memories
- **Glassmorphism Design** - Modern, premium UI
- **Smooth Animations** - Framer Motion powered
- **Filter Options** - Images & Videos tabs

### 🎊 Interactive Modal
- **Confetti Celebration** - 150 pink confetti pieces
- **Animated Gradient Background** - Pink → Purple → Rose
- **25 Floating Hearts** - Romantic animations
- **30 Sparkles Effect** - Twinkling stars
- **3D Card Flip** - Spring bounce animation
- **Glowing Border** - Animated gradient glow

### 🎵 Music Player
- **Background Music** - Romantic love songs
- **Toggle Control** - Click to play/pause
- **Visual Feedback** - Green when playing, pink when paused
- **Wiggle Animation** - When music is playing

### ⬅️ Easy Navigation
- **Back Button** - Always visible at bottom
- **Sticky Position** - No scrolling needed
- **Smooth Transitions** - Beautiful animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/S-Rathore25/Velantine_day_gift.git
   cd Velantine_day_gift
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your images**
   - Copy your images to `public/images/`
   - Images are already configured in the gallery!

4. **Add your love song (Optional)**
   ```bash
   # Run the script to open music folder
   .\add-music.ps1
   
   # Or manually:
   # 1. Download "Tumhare Sang Har Ek Lamha" or any romantic song
   # 2. Copy to: public/music/
   # 3. Rename to: love-song.mp3
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   ```
   http://localhost:5174/
   ```

## 📸 Adding Your Images

Your images are already in `public/images/`:
- 11 beautiful photos
- 2 special videos
- All configured with romantic captions!

## 🎵 Music Setup

### Option 1: Use the Script
```powershell
.\add-music.ps1
```
This will:
- Open the music folder
- Show instructions
- Create folder if needed

### Option 2: Manual Setup
1. Download your favorite romantic song (MP3)
2. Copy to `public/music/`
3. Rename to `love-song.mp3`
4. Refresh browser!

**Default:** Falls back to online romantic piano music if local file not found.

## 🎨 Gallery Features

### Current Images (13 items total)
1. Heart Made With Love 💕
2. My Beautiful Bachhhhaaa 😘
3. Beautiful Flowers 🌸
4. I Miss You Baby Doll 💖
5. Love You So Much ❤️
6. Our Special Moments 🎥 (Video)
7. Together Forever 💑
8. My Everything 💝
9. Sweet Memories 🎬 (Video)
10. Precious Moments 🌟
11. My Love 💗
12. Always & Forever 💞
13. I Love You Bachhhhaaa 💕

### Gallery Layout
- **Mobile:** 2 columns
- **Tablet:** 3 columns
- **Desktop:** 4 columns

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool & dev server
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Confetti** - Celebration effects
- **CSS3** - Styling (Glassmorphism, Gradients)

## 📁 Project Structure

```
anitigravity_workspace/
├── public/
│   ├── images/          # Your photos & videos
│   └── music/           # Background music
├── src/
│   ├── pages/
│   │   └── Memories.jsx # Gallery component
│   ├── gallery-styles.css
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── add-music.ps1        # Music folder helper
└── package.json
```

## 🎯 Usage

1. **Navigate to Memories**
   - Click "Memories" in the navigation

2. **View Gallery**
   - Browse through images and videos
   - Use filter buttons (Images/Videos)

3. **Click on any item**
   - Enjoy the confetti celebration! 🎊
   - See floating hearts and sparkles
   - View full-size image/video

4. **Control Music**
   - Click music button (top right)
   - Pink = Paused, Green = Playing

5. **Go Back**
   - Click "Back to Gallery" button (always visible at bottom)

## 💖 Customization

### Change Captions
Edit `src/pages/Memories.jsx`:
```javascript
const mediaItems = [
    {
        id: 1,
        caption: 'Your Custom Caption 💕',
        description: 'Your custom description',
        // ...
    }
];
```

### Change Colors
Edit `src/gallery-styles.css` or `src/index.css`

### Add More Images
1. Add images to `public/images/`
2. Update `mediaItems` array in `Memories.jsx`

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Connect your GitHub repo
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy! 🚀

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `.\add-music.ps1` - Open music folder

## 🎁 Special Features

- ✨ **Confetti on every image click**
- 💕 **25 floating hearts**
- ⭐ **30 twinkling sparkles**
- 🌈 **Animated gradient backgrounds**
- 🎵 **Romantic background music**
- 📱 **Fully responsive design**
- 🎨 **Glassmorphism effects**
- 🔄 **Smooth transitions**

## 💝 Made with Love

Created with ❤️ for a special someone on Valentine's Day 2026!

## 📄 License

This project is open source and available for personal use.

---

**Happy Valentine's Day! 💕✨🎉**
