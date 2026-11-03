import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, RefreshCw } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../birthdayConfig';
import { soundEffects } from '../utils/audioSynth';
import { CuteTeddy } from './CuteMascots';

export const SurpriseSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenGift = () => {
    if (!isOpen) {
      soundEffects.playGiftOpen();
      // Burst celebratory pastel confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#fda4af', '#fbcfe8', '#fef08a', '#ffffff'],
        disableForReducedMotion: true,
      });
      setIsOpen(true);
    }
  };

  const handleResetGift = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playSparkle();
    setIsOpen(false);
  };

  return (
    <section id="surprise" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/70 border border-pink-200/80 text-pink-600 text-xs font-medium mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Surprise Delivery</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 font-semibold mb-3"
        >
          {BIRTHDAY_CONFIG.surprise.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-500 max-w-md mx-auto"
        >
          {BIRTHDAY_CONFIG.surprise.subheading}
        </motion.p>
      </div>

      {/* Interactive Gift Box Container */}
      <div className="relative flex flex-col items-center justify-center min-h-[420px] w-full max-w-2xl mx-auto z-10">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* CLOSED GIFT BOX */
            <motion.div
              key="closed-box"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.04 }}
              onClick={handleOpenGift}
              className="group cursor-pointer flex flex-col items-center select-none"
            >
              {/* Cute Teddy Peeking next to gift */}
              <div className="absolute -top-12 -right-8 pointer-events-none hidden sm:block">
                <CuteTeddy className="w-20 h-20" />
              </div>

              {/* Pulsing Hint Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-4 px-4 py-1.5 rounded-full bg-white/90 text-pink-600 border border-pink-200 shadow-md text-xs sm:text-sm font-medium flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>{BIRTHDAY_CONFIG.surprise.giftPrompt}</span>
              </motion.div>

              {/* 3D-styled Pink Gift Box */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
                {/* Glow ring */}
                <div className="absolute inset-4 rounded-3xl bg-pink-300/40 blur-xl group-hover:bg-pink-400/50 transition-all duration-300" />

                {/* Gift Box SVG with Satin Ribbon */}
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-2xl"
                >
                  {/* Box Body */}
                  <rect x="35" y="80" width="130" height="95" rx="12" fill="url(#box-gradient)" />
                  <rect x="35" y="80" width="130" height="95" rx="12" stroke="#FDA4AF" strokeWidth="2" />

                  {/* Vertical Ribbon */}
                  <rect x="90" y="80" width="20" height="95" fill="url(#ribbon-gradient)" />
                  <line x1="100" y1="80" x2="100" y2="175" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

                  {/* Horizontal Ribbon on Body */}
                  <rect x="35" y="118" width="130" height="18" fill="url(#ribbon-gradient)" />
                  <line x1="35" y1="127" x2="165" y2="127" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

                  {/* Box Lid */}
                  <rect x="25" y="58" width="150" height="30" rx="6" fill="#F472B6" />
                  <rect x="25" y="58" width="150" height="30" rx="6" stroke="#FB7185" strokeWidth="1.5" />

                  {/* Vertical Ribbon on Lid */}
                  <rect x="90" y="58" width="20" height="30" fill="url(#ribbon-gradient)" />

                  {/* Big Silk Bow on top */}
                  {/* Left Loop */}
                  <path
                    d="M100 58 C 75 35, 45 42, 60 58 C 70 68, 85 64, 100 58 Z"
                    fill="url(#ribbon-gradient)"
                  />
                  {/* Right Loop */}
                  <path
                    d="M100 58 C 125 35, 155 42, 140 58 C 130 68, 115 64, 100 58 Z"
                    fill="url(#ribbon-gradient)"
                  />
                  {/* Bow Center Knot */}
                  <circle cx="100" cy="58" r="9" fill="#E11D48" />
                  <circle cx="98" cy="56" r="3" fill="#FFFFFF" opacity="0.5" />

                  {/* Ribbon Tails */}
                  <path d="M96 64 C 88 78, 70 88, 55 92" stroke="#E11D48" strokeWidth="6" strokeLinecap="round" />
                  <path d="M104 64 C 112 78, 130 88, 145 92" stroke="#E11D48" strokeWidth="6" strokeLinecap="round" />

                  <defs>
                    <linearGradient id="box-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FFF1F2" />
                      <stop offset="50%" stopColor="#FFE4E6" />
                      <stop offset="100%" stopColor="#FECDD3" />
                    </linearGradient>
                    <linearGradient id="ribbon-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FB7185" />
                      <stop offset="100%" stopColor="#E11D48" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Gentle pulse text */}
              <span className="text-xs sm:text-sm text-pink-400 font-handwriting text-lg mt-2 group-hover:text-pink-600 transition-colors">
                ✨ Click to reveal your birthday wish ✨
              </span>
            </motion.div>
          ) : (
            /* OPENED LETTER CARD */
            <motion.div
              key="opened-card"
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ duration: 0.8, type: 'spring', damping: 18 }}
              className="relative w-full max-w-2xl glass-card rounded-3xl p-6 sm:p-10 shadow-2xl border-pink-200/90 text-left"
            >
              {/* Bursting floating hearts & blossoms decoration */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute -top-6 -right-4 flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full border border-pink-200 shadow-sm text-pink-500 text-xs font-medium"
              >
                <span>🌸 With Warmth</span>
              </motion.div>

              {/* Letter Header */}
              <div className="flex items-center justify-between border-b border-pink-100 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                    <Heart className="w-4 h-4 fill-pink-500" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-gray-800 font-semibold">
                    {BIRTHDAY_CONFIG.surprise.revealedTitle}
                  </h3>
                </div>

                {/* Reset button to close box again */}
                <button
                  onClick={handleResetGift}
                  className="p-1.5 rounded-full hover:bg-pink-100/70 text-gray-400 hover:text-pink-500 transition-colors"
                  title="Wrap gift again"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Salutation */}
              <p className="font-handwriting text-2xl sm:text-3xl text-pink-600 font-bold mb-4">
                Dearest {BIRTHDAY_CONFIG.friendName},
              </p>

              {/* Personalized Birthday Message */}
              <div className="font-sans text-[18px] sm:text-[20px] md:text-[22px] text-gray-700 leading-relaxed font-light mb-8 whitespace-pre-line">
                {BIRTHDAY_CONFIG.surprise.message}
              </div>

              {/* Sweet Sign-off */}
              <div className="pt-4 border-t border-pink-100/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs sm:text-sm text-gray-400 font-medium">
                  {BIRTHDAY_CONFIG.surprise.signature}
                </span>
                <span className="font-cursive text-[22px] text-pink-600 font-semibold tracking-wide">
                  {BIRTHDAY_CONFIG.senderName}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

