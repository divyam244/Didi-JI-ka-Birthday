import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, ZoomIn, Camera } from 'lucide-react';
import { BIRTHDAY_CONFIG, type MemoryItem } from '../birthdayConfig';
import { soundEffects } from '../utils/audioSynth';

export const FriendshipWall: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);

  const handleCardClick = (item: MemoryItem) => {
    soundEffects.playSparkle();
    setSelectedMemory(item);
  };

  return (
    <section id="memories" className="relative min-h-screen w-full px-4 sm:px-6 py-24 overflow-hidden">
      {/* Floating background hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {[
          { top: '15%', left: '10%', size: 28, delay: 0 },
          { top: '35%', right: '8%', size: 36, delay: 1.5 },
          { top: '65%', left: '5%', size: 24, delay: 2 },
          { top: '80%', right: '12%', size: 32, delay: 0.8 },
        ].map((h, i) => (
          <motion.div
            key={i}
            style={{ top: h.top, left: h.left, right: h.right }}
            animate={{ y: [0, -20, 0], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: h.delay, ease: 'easeInOut' }}
            className="absolute text-pink-300/40 select-none"
          >
            <Heart style={{ width: h.size, height: h.size }} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-600 text-xs sm:text-sm font-medium mb-3"
        >
          <Camera className="w-3.5 h-3.5 text-pink-500" />
          <span>Little Moments & Big Smiles</span>
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 font-semibold mb-3"
        >
          {BIRTHDAY_CONFIG.memoriesSection.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-gray-500 font-light max-w-lg mx-auto"
        >
          {BIRTHDAY_CONFIG.memoriesSection.subheading}
        </motion.p>
      </div>

      {/* Memory Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {BIRTHDAY_CONFIG.memoriesSection.cards.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => handleCardClick(item)}
            className="group cursor-pointer relative bg-white/75 backdrop-blur-md border border-pink-100 rounded-3xl p-5 shadow-glass hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between"
          >
            {/* Cute Top Washi Tape Decoration */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-pink-200/70 border border-pink-300/40 rounded-sm rotate-1 shadow-sm opacity-90 z-10" />

            {/* Sticker Badge */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-pink-200 flex items-center justify-center text-sm shadow-sm z-10">
              {item.sticker}
            </div>

            {/* Photo Container (Polaroid-like frame) */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 bg-pink-50 border border-pink-100/80">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                <span className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-pink-600 shadow">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-pink-500 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                  {item.tag}
                </span>
                <Heart className="w-3.5 h-3.5 text-pink-300 group-hover:text-pink-500 group-hover:fill-pink-500 transition-colors" />
              </div>

              <h3 className="font-serif text-lg font-semibold text-gray-800 mb-1.5 group-hover:text-pink-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Helpful Customization Reminder Note */}
      <div className="text-center mt-12">
        <p className="text-xs text-pink-400 font-handwriting text-lg inline-flex items-center gap-1.5">
          <span>📸 Tip: You can easily swap these placeholder images with your actual photos in</span>
          <code className="text-xs font-mono bg-pink-100/70 text-pink-700 px-2 py-0.5 rounded">
            src/birthdayConfig.ts
          </code>
        </p>
      </div>

      {/* Lightbox / Modal for enlarged card */}
      <AnimatePresence>
        {selectedMemory && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white/95 backdrop-blur-xl border border-pink-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-pink-50 hover:bg-pink-100 text-gray-500 hover:text-pink-600 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-5 border border-pink-100 shadow-inner">
                <img
                  src={selectedMemory.image}
                  alt={selectedMemory.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tag & Sticker */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                  {selectedMemory.tag}
                </span>
                <span className="text-lg">{selectedMemory.sticker}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">
                {selectedMemory.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-6">
                {selectedMemory.description}
              </p>

              {/* Footer */}
              <div className="border-t border-pink-100 pt-3 flex items-center justify-between text-xs text-pink-400">
                <span>Cherished Forever ♡</span>
                <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
