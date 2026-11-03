import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../birthdayConfig';
import { CuteBunny, CuteCakeIllustration } from './CuteMascots';
import { soundEffects } from '../utils/audioSynth';

interface HeroSectionProps {
  onOpenSurprise: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSurprise }) => {
  const handleButtonClick = () => {
    soundEffects.playSparkle();
    onOpenSurprise();
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Central Translucent Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl w-full mx-auto glass-card rounded-3xl p-8 sm:p-12 md:p-16 text-center z-10"
      >
        {/* Floating Mascot Accent */}
        <div className="absolute -top-12 -left-6 sm:-left-10 z-20 pointer-events-none">
          <CuteBunny className="w-20 h-20 sm:w-28 sm:h-28" />
        </div>

        {/* Small floating birthday cake on top-right */}
        <div className="absolute -top-10 -right-4 sm:-right-8 z-20 pointer-events-none">
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CuteCakeIllustration isLit={true} className="w-20 h-20 sm:w-24 sm:h-24" />
          </motion.div>
        </div>

        {/* Delicate Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 border border-pink-200/90 text-pink-600 text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{BIRTHDAY_CONFIG.hero.tagline}</span>
          <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
        </motion.div>

        {/* Friend Name Highlight */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="font-handwriting text-2xl sm:text-3xl text-pink-500 font-semibold mb-2"
        >
          Dearest {BIRTHDAY_CONFIG.friendName}
        </motion.p>

        {/* Main Heading: "Happy Birthday ♡" */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-cursive text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-blush-600 drop-shadow-sm text-shadow-glow tracking-wide select-none leading-none mb-6"
        >
          {BIRTHDAY_CONFIG.hero.heading}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-serif text-lg sm:text-xl md:text-2xl text-gray-700 italic max-w-xl mx-auto leading-relaxed mb-4"
        >
          &ldquo;{BIRTHDAY_CONFIG.hero.subtitle}&rdquo;
        </motion.p>

        {/* Personal Note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto font-light leading-relaxed mb-10"
        >
          {BIRTHDAY_CONFIG.hero.personalNote}
        </motion.p>

        {/* Prominent CTA Button: "Open Your Surprise ♡" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 15px 35px -5px rgba(236, 72, 153, 0.45)' }}
            whileTap={{ scale: 0.96 }}
            onClick={handleButtonClick}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 text-white font-medium text-base sm:text-lg tracking-wide shadow-lg shadow-pink-300/50 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer light effect across button */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            <span className="relative z-10 flex items-center gap-2 font-serif">
              {BIRTHDAY_CONFIG.hero.ctaButton}
            </span>

            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <Heart className="w-5 h-5 fill-white text-white" />
            </motion.span>
          </motion.button>

          <span className="text-xs text-pink-400/80 font-handwriting text-base">
            ✨ Handcrafted especially for you ✨
          </span>
        </motion.div>
      </motion.div>

      {/* Down scroll guide */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={handleButtonClick}
        className="mt-8 flex flex-col items-center cursor-pointer text-pink-400/80 hover:text-pink-500 transition-colors z-10"
      >
        <span className="text-xs tracking-wider uppercase font-medium mb-1">Scroll or Tap</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

