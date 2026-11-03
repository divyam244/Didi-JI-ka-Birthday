# 🎀 Dreamy Birthday Surprise Website 🌸

A Pinterest-inspired interactive birthday surprise web application built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **🌸 Page 1: Landing Page (Hero)**
  - Handwritten calligraphy (*Great Vibes* & *Dancing Script*) and luxury serif typography (*Playfair Display*).
  - Floating sakura flower petals with physics-based sway & twinkling fairy sparkles.
  - Translucent glassmorphism card with corner cherry blossom branches.
  - Interactive "Open Your Surprise ♡" button with smooth scroll.

- **🎁 Page 2: A Little Surprise (Interactive Gift Box)**
  - Beautiful 3D-styled pink gift box tied with a satin bow.
  - Click to unwrap: the lid lifts, confetti bursts across the screen, and floating hearts/flowers radiate outwards.
  - Reveals a personalized birthday letter card with signature.

- **📸 Page 3: Friendship Wall (Memory Cards)**
  - Polaroid-inspired glass cards with washi tape, decorative stickers, and soft pink shadows.
  - Hover zoom and interactive lightbox modal when clicked.
  - Designed for easy photo replacements.

- **🎂 Page 4: Birthday Wishes & Interactive Cake**
  - Glowing **"HAPPY BIRTHDAY"** typographic banner.
  - Interactive birthday cake with a real flickering candle: **tap to blow it out** to trigger smoke curls and a multi-stage confetti shower!
  - Pastel floating balloons and 4 curated blessing cards.

- **🎵 Background Music Player**
  - Elegant floating music toggle in the top-right corner.
  - Does NOT autoplay (user privacy & web standards compliant).
  - Built-in fallback Web Audio API dreamy music-box synthesizer ensures music always plays seamlessly even offline.

- **✨ Click Sparkles**
  - Tapping or clicking anywhere on the screen spawns gentle floating hearts and blossoms.

---

## 🎨 How to Customize

All content is centralized in one single file:
👉 **[`src/birthdayConfig.ts`](./src/birthdayConfig.ts)**

### 1. Change Friend's Name & Your Name
```typescript
friendName: "Didi ♡", // Change to your friend's name (e.g. "Ananya", "Pooja")
senderName: "With all my heart, [YOUR_NAME]", // Your signature
```

### 2. Replace Memory Photos
Inside `memoriesSection.cards`, replace the `image` URLs with your own photos:
```typescript
{
  id: "1",
  title: "Your Radiant Smile",
  description: "The kind of smile that lights up an entire room...",
  tag: "Pure Sunshine",
  sticker: "🌸",
  image: "/photos/my-friend-1.jpg", // Place images in the /public folder!
}
```

### 3. Change Background Music
Place any `.mp3` file into the `/public` folder (e.g., `/public/my-song.mp3`) and update:
```typescript
music: {
  title: "Special Birthday Song",
  artist: "Favorite Artist",
  audioUrl: "/my-song.mp3",
  fallbackSynthesizer: true,
}
```

---

## 🚀 Running the Project

```bash
# Install dependencies (already installed)
npm install

# Start local development server
npm run dev
```

Visit: `http://localhost:5173`
