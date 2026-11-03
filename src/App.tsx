import React, { useState } from 'react';
import { PetalBackground } from './components/PetalBackground';
import { FloralDecorations } from './components/FloralDecorations';
import { AudioPlayer } from './components/AudioPlayer';
import { HeroSection } from './components/HeroSection';
import { SurpriseSection } from './components/SurpriseSection';
import { FriendshipWall } from './components/FriendshipWall';
import { WishesSection } from './components/WishesSection';

interface ClickHeart {
  id: number;
  x: number;
  y: number;
  char: string;
}

export const App: React.FC = () => {
  const [clickHearts, setClickHearts] = useState<ClickHeart[]>([]);

  // Smooth scroll to surprise section from hero button
  const handleOpenSurprise = () => {
    const el = document.getElementById('surprise');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cute interactive particle on screen click
  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only spawn if not clicking an interactive button
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('input')) {
      return;
    }

    const chars = ['🌸', '✨', '💖', '🎀', '💕', '🌷'];
    const newHeart: ClickHeart = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      char: chars[Math.floor(Math.random() * chars.length)],
    };

    setClickHearts((prev) => [...prev.slice(-12), newHeart]);

    setTimeout(() => {
      setClickHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1000);
  };

  return (
    <div
      onClick={handleScreenClick}
      className="relative min-h-screen w-full bg-dream-gradient text-gray-800 overflow-x-hidden"
    >
      {/* 🌸 Ambient Floating Cherry Blossom Petals & Sparkles */}
      <PetalBackground />

      {/* 🌿 Elegant Corner Cherry Blossom Branches */}
      <FloralDecorations />

      {/* 🎵 Optional Background Music Player with Visible Toggle */}
      <AudioPlayer />

      {/* Main Sections Content */}
      <main className="relative z-10 flex flex-col">
        {/* PAGE 1: Birthday Landing Page (Hero) */}
        <HeroSection onOpenSurprise={handleOpenSurprise} />

        {/* PAGE 2: A Little Surprise (Interactive Gift Box) */}
        <SurpriseSection />

        {/* PAGE 3: Friendship Wall (Appreciation Memory Cards) */}
        <FriendshipWall />

        {/* PAGE 4: Birthday Wishes & Interactive Birthday Cake */}
        <WishesSection />
      </main>

      {/* Interactive Floating Click Emojis */}
      {clickHearts.map((heart) => (
        <span
          key={heart.id}
          style={{
            left: heart.x,
            top: heart.y,
            transform: 'translate(-50%, -50%)',
          }}
          className="fixed pointer-events-none select-none text-xl animate-float z-50 transition-all duration-1000"
        >
          {heart.char}
        </span>
      ))}
    </div>
  );
};

export default App;
