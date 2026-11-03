import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Flame, FlameKindling, ArrowUp } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../birthdayConfig';
import { CuteCakeIllustration } from './CuteMascots';
import { soundEffects } from '../utils/audioSynth';

export const WishesSection: React.FC = () => {
  const [isCandleLit, setIsCandleLit] = useState<boolean>(true);
  const [blownCount, setBlownCount] = useState<number>(0);

  const handleBlowCandle = () => {
    if (isCandleLit) {
      soundEffects.playCandleBlow();
      setIsCandleLit(false);
      setBlownCount((prev) => prev + 1);

      // Multi-stage celebratory confetti show
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#f472b6', '#fda4af', '#fbcfe8', '#fef08a', '#e9b872', '#ffffff'];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  };

  const handleRelight = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playSparkle();
    setIsCandleLit(true);
  };

  const scrollToTop = () => {
    soundEffects.playSparkle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="wishes" className="relative min-h-screen w-full px-4 sm:px-6 py-24 flex flex-col items-center justify-between overflow-hidden">
      {/* Pastel Floating Balloons in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {[
          { left: '8%', delay: 0, duration: 18, color: '#fbcfe8' },
          { left: '22%', delay: 4, duration: 22, color: '#fed7aa' },
          { left: '45%', delay: 8, duration: 20, color: '#fecdd3' },
          { left: '72%', delay: 2, duration: 24, color: '#f5d0fe' },
          { left: '88%', delay: 6, duration: 19, color: '#fef08a' },
        ].map((b, i) => (
          <motion.div
            key={i}
            initial={{ y: '120vh', opacity: 0 }}
            animate={{ y: '-20vh', opacity: [0, 0.7, 0.7, 0] }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              delay: b.delay,
              ease: 'linear',
            }}
            style={{ left: b.left }}
            className="absolute flex flex-col items-center select-none"
          >
            <div
              style={{ backgroundColor: b.color }}
              className="w-12 h-16 sm:w-16 sm:h-20 rounded-full shadow-md relative"
            >
              {/* Balloon knot */}
              <div
                style={{ backgroundColor: b.color }}
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2 rounded-sm"
              />
              {/* Balloon string */}
              <div className="absolute -bottom-10 left-1/2 w-px h-10 bg-gray-300" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-600 text-xs sm:text-sm font-medium mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Final Birthday Blessings</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 font-semibold mb-3"
        >
          {BIRTHDAY_CONFIG.wishesSection.heading}
        </motion.h2>

        {/* Glowing "HAPPY BIRTHDAY" Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative my-4"
        >
          <h3 className="font-sans font-extrabold tracking-[0.25em] text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 text-shadow-glow select-none uppercase">
            HAPPY BIRTHDAY
          </h3>
          <p className="font-cursive text-3xl sm:text-4xl text-pink-500 -mt-2">
            to the wonderful {BIRTHDAY_CONFIG.friendName}
          </p>
        </motion.div>

        {/* Interactive Birthday Cake */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative my-8 flex flex-col items-center"
        >
          {/* Cake Glow aura */}
          <div className="absolute inset-0 bg-pink-300/30 rounded-full blur-2xl pointer-events-none" />

          {/* Cake Clickable Area */}
          <div
            onClick={handleBlowCandle}
            className="cursor-pointer group relative flex flex-col items-center transition-transform hover:scale-105"
            title={isCandleLit ? 'Click to blow out the candle!' : 'Candle blown!'}
          >
            {/* Candle instruction prompt */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className={`mb-3 px-4 py-1.5 rounded-full border shadow-sm text-xs sm:text-sm font-medium flex items-center gap-2 transition-all ${
                isCandleLit
                  ? 'bg-amber-50 border-amber-200 text-amber-700 shadow-amber-100'
                  : 'bg-pink-100 border-pink-200 text-pink-700'
              }`}
            >
              {isCandleLit ? (
                <>
                  <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                  <span>{BIRTHDAY_CONFIG.wishesSection.blowCandlePrompt}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                  <span>{BIRTHDAY_CONFIG.wishesSection.candleBlownMessage}</span>
                </>
              )}
            </motion.div>

            {/* Cute Birthday Cake Illustration */}
            <CuteCakeIllustration isLit={isCandleLit} className="w-48 h-48 sm:w-56 sm:h-56" />
          </div>

          {/* Relight button if blown */}
          <AnimatePresence>
            {!isCandleLit && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRelight}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-amber-700 border border-amber-200 shadow-sm text-xs font-medium hover:bg-amber-50 transition-colors"
              >
                <FlameKindling className="w-3.5 h-3.5 text-amber-500" />
                <span>Relight Candle & Make Another Wish ({blownCount})</span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Highlighted Main Wish Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative max-w-2xl w-full glass-card rounded-3xl p-8 sm:p-10 text-center mb-12 shadow-glass"
        >
          <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-500 mx-auto mb-4 flex items-center justify-center">
            <Heart className="w-5 h-5 fill-pink-500" />
          </div>

          <p className="font-serif text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed font-normal italic mb-6">
            &ldquo;{BIRTHDAY_CONFIG.wishesSection.mainWish}&rdquo;
          </p>

          <p className="font-cursive text-2xl text-pink-600 font-semibold">
            {BIRTHDAY_CONFIG.senderName}
          </p>
        </motion.div>

        {/* 4 Thoughtful Wish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mb-16">
          {BIRTHDAY_CONFIG.wishesSection.wishes.map((w, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ y: -4 }}
              className="bg-white/70 backdrop-blur-md border border-pink-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-2">{w.icon}</div>
              <h4 className="font-serif font-semibold text-gray-800 text-base mb-1">
                {w.title}
              </h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                {w.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Back to Top Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-pink-200 text-pink-600 shadow-sm hover:bg-pink-50 text-xs sm:text-sm font-medium transition-colors mb-8"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Back to Top ♡</span>
        </motion.button>
      </div>

      {/* Website Footer */}
      <footer className="w-full text-center border-t border-pink-200/60 pt-6 text-xs text-pink-400 font-light">
        <p className="flex items-center justify-center gap-1.5">
          <span>{BIRTHDAY_CONFIG.wishesSection.footerNote}</span>
        </p>
      </footer>
    </section>
  );
};

