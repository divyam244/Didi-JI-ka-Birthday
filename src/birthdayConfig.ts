/**
 * =========================================================================
 * 🎀 DREAMY BIRTHDAY SURPRISE - CENTRAL CONFIGURATION FILE
 * =========================================================================
 * 
 * You can customize ALL text, names, images, messages, and music in this file!
 * Simply change the values below to personalize the birthday website.
 * 
 * Replace [FRIEND_NAME] with your friend or Didi's real name or nickname.
 * Replace [YOUR_NAME] with your own name.
 */

export interface MemoryItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  sticker: string;
  image: string; // Replace with your own photos (URL or local import)
}

export interface WishCard {
  icon: string;
  title: string;
  description: string;
}

export interface BirthdayConfig {
  // Names
  friendName: string;
  senderName: string;
  
  // SEO & Header
  websiteTitle: string;
  subtitle: string;

  // Music Settings
  music: {
    title: string;
    artist: string;
    audioUrl: string; // Local path or external URL (e.g., "/music/birthday-lofi.mp3")
    fallbackSynthesizer: boolean; // Plays a gentle dreamy music box melody if no MP3 file is provided
  };

  // Section 1: Hero Landing
  hero: {
    tagline: string;
    heading: string;
    subtitle: string;
    personalNote: string;
    ctaButton: string;
  };

  // Section 2: Gift Surprise
  surprise: {
    heading: string;
    subheading: string;
    giftPrompt: string;
    revealedTitle: string;
    message: string;
    signature: string;
  };

  // Section 3: Friendship Wall & Memories
  memoriesSection: {
    heading: string;
    subheading: string;
    cards: MemoryItem[];
  };

  // Section 4: Final Birthday Wishes & Cake
  wishesSection: {
    heading: string;
    subheading: string;
    blowCandlePrompt: string;
    candleBlownMessage: string;
    mainWish: string;
    wishes: WishCard[];
    footerNote: string;
  };
}

export const BIRTHDAY_CONFIG: BirthdayConfig = {
  // 🌸 Friend's Name / Nickname
  // Edit this: replace "Didi ♡" or "[FRIEND_NAME]" with her actual name!
  friendName: "Didi ♡", // e.g. "Ananya", "Pooja", "Didi", "Angel"

  // 🌸 Your Name / Signature
  senderName: "With all my heart, KOena didi",

  // 🌸 Browser Tab Title
  websiteTitle: "Happy Birthday ♡ | A Dreamy Surprise For Someone Special",
  subtitle: "To someone who makes the world a little more beautiful.",

  // 🎵 Background Music
  music: {
    title: "Dreamy Birthday Lullaby",
    artist: "Music Box Melodies",
    // You can place an MP3 inside /public/music.mp3 and set this to "/music.mp3"
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=soft-piano-ambient-111154.mp3",
    // If true, will also provide a built-in magical music box synth fallback so it NEVER fails!
    fallbackSynthesizer: true,
  },

  // 🎀 Page 1: Landing Page
  hero: {
    tagline: "🌸 Today is all about celebrating you 🌸",
    heading: "Happy Birthday ♡",
    subtitle: "To someone who makes the world a little more beautiful.",
    personalNote: "May your day sparkle with as much warmth, softness, and joy as you bring into our lives every single day.",
    ctaButton: "Open Your Surprise ♡",
  },

  // 🎁 Page 2: A Little Surprise (Interactive Gift Box)
  surprise: {
    heading: "A Little Something For You",
    subheading: "A gentle gift wrapped with endless warmth and sweetest thoughts. Tap the bow to open!",
    giftPrompt: "Tap the gift to unwrap 🎀",
    revealedTitle: "A Heartfelt Letter For You ✨",
    message: "Didi!! 💗 Aapki cute si harkatein, har baat pe hasna, bina permission phone laana aur usse making memories bolna, sab bahut special hai.\n\nAap hamesha aise hi khush raho aur sabko hasaate raho. Bas us 1/10 rotten egg ko thodi kam attention dena!\n\nWishing you endless happiness, lots of love, beautiful memories and everything your heart wishes for. Hamesha aise hi amazing rehna.\n\nOnce again, a veryyy Happy Birthday, Didi!! Lots and lots of loveee! 🎀🌸",
    signature: "Always grateful to have you in my corner 🌸",
  },

  // 📸 Page 3: Friendship Wall (Memory Cards)
  memoriesSection: {
    heading: "Some People Are Just Special ♡",
    subheading: "A little gallery dedicated to the moments, the smiles, and the comfort you share with everyone around you.",
    cards: [
      {
        id: "1",
        title: "Your Radiant Smile",
        description: "The kind of smile that lights up an entire room and instantly makes everything feel a little softer.",
        tag: "Pure Sunshine",
        sticker: "🌸",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "2",
        title: "The Sweetest Soul",
        description: "Always listening, always caring, and always being the most genuine, thoughtful friend anyone could ask for.",
        tag: "Golden Heart",
        sticker: "🎀",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "3",
        title: "Warm Cozy Chats",
        description: "From deep late-night conversations to silly giggle fits, every single moment spent talking to you is a treasure.",
        tag: "Little Moments",
        sticker: "✨",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "4",
        title: "Grace & Kindness",
        description: "You carry so much gentle grace in everything you do, inspiring everyone around you to be kinder.",
        tag: "Inspiration",
        sticker: "🌷",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "5",
        title: "Adventures & Memories",
        description: "Looking forward to creating hundreds more chapters of laughter, good food, and unforgettable memories with you.",
        tag: "Forever Bond",
        sticker: "🧁",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "6",
        title: "Unconditional Support",
        description: "Thank you for simply being you — the best guide, confidante, and truest blessing in life.",
        tag: "Best Friend Ever",
        sticker: "💖",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },

  // 🎂 Page 4: Birthday Wishes & Interactive Cake
  wishesSection: {
    heading: "One Last Thing...",
    subheading: "Close your eyes, make a secret wish in your heart, and tap the candle to blow it out! 🕯️✨",
    blowCandlePrompt: "Tap the candle flame to blow it out! 🎂",
    candleBlownMessage: "✨ Yay! May all your secret birthday wishes come true! ✨",
    mainWish: "May this new chapter bring you endless happiness, countless reasons to smile and memories worth keeping forever. Never stop being YOU! 💗",
    wishes: [
      {
        icon: "🌸",
        title: "Peace & Softness",
        description: "May your days be calm, gentle, and wrapped in warm tea and cozy sunsets.",
      },
      {
        icon: "⭐",
        title: "Big Dreams Fulfilled",
        description: "May every goal you quietly whisper to the stars unfold beyond your highest expectations.",
      },
      {
        icon: "🍰",
        title: "Laughter Without End",
        description: "May your year be overflowing with spontaneous giggles and heartwarming celebrations.",
      },
      {
        icon: "🎀",
        title: "Unstoppable Grace",
        description: "May you always walk through life knowing how cherished, valued, and loved you truly are.",
      },
    ],
    footerNote: "Crafted with love, cherry blossoms, and endless wishes for your best year yet 🎀",
  },
};

