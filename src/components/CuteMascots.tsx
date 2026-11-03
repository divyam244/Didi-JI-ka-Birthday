import React from 'react';
import { motion } from 'framer-motion';

// Adorable pastel bunny with ribbon bow
export const CuteBunny: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => {
  return (
    <motion.div
      animate={{ y: [0, -6, 0], rotate: [-1, 2, -1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        {/* Left Ear */}
        <ellipse cx="42" cy="32" rx="10" ry="26" transform="rotate(-12 42 32)" fill="#FFF0F5" stroke="#FBCFE8" strokeWidth="2" />
        <ellipse cx="43" cy="34" rx="5" ry="18" transform="rotate(-12 43 34)" fill="#FDA4AF" opacity="0.6" />

        {/* Right Ear */}
        <ellipse cx="78" cy="32" rx="10" ry="26" transform="rotate(12 78 32)" fill="#FFF0F5" stroke="#FBCFE8" strokeWidth="2" />
        <ellipse cx="77" cy="34" rx="5" ry="18" transform="rotate(12 77 34)" fill="#FDA4AF" opacity="0.6" />

        {/* Head */}
        <circle cx="60" cy="72" r="34" fill="#FFFDFD" stroke="#FCE7F3" strokeWidth="2" />

        {/* Blush Cheeks */}
        <ellipse cx="40" cy="80" rx="6" ry="3.5" fill="#FDA4AF" opacity="0.65" />
        <ellipse cx="80" cy="80" rx="6" ry="3.5" fill="#FDA4AF" opacity="0.65" />

        {/* Eyes */}
        <ellipse cx="48" cy="70" rx="3.5" ry="4.5" fill="#4B5563" />
        <circle cx="46.5" cy="68.5" r="1.5" fill="white" />
        
        <ellipse cx="72" cy="70" rx="3.5" ry="4.5" fill="#4B5563" />
        <circle cx="70.5" cy="68.5" r="1.5" fill="white" />

        {/* Cute Nose and Mouth */}
        <polygon points="58,76 62,76 60,78" fill="#F472B6" />
        <path d="M56 80 Q 60 83 60 81 Q 60 83 64 80" stroke="#9CA3AF" strokeWidth="1.2" fill="none" strokeLinecap="round" />

        {/* Pink Bow on Ear */}
        <g transform="translate(32, 44) scale(0.65)">
          <path d="M12 8 C 4 0, 0 16, 12 14 Z" fill="#F472B6" />
          <path d="M12 8 C 20 0, 24 16, 12 14 Z" fill="#F472B6" />
          <circle cx="12" cy="11" r="3.5" fill="#EC4899" />
        </g>
      </svg>
    </motion.div>
  );
};

// Cute pastel teddy bear with heart
export const CuteTeddy: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => {
  return (
    <motion.div
      animate={{ y: [0, -7, 0], rotate: [1, -2, 1] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        {/* Left Ear */}
        <circle cx="34" cy="38" r="13" fill="#FFE4E6" stroke="#FECDD3" strokeWidth="2" />
        <circle cx="34" cy="38" r="7" fill="#FDA4AF" opacity="0.6" />

        {/* Right Ear */}
        <circle cx="86" cy="38" r="13" fill="#FFE4E6" stroke="#FECDD3" strokeWidth="2" />
        <circle cx="86" cy="38" r="7" fill="#FDA4AF" opacity="0.6" />

        {/* Head */}
        <circle cx="60" cy="68" r="33" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="2" />

        {/* Snout */}
        <ellipse cx="60" cy="74" rx="14" ry="10" fill="#FFFFFF" />

        {/* Eyes */}
        <ellipse cx="48" cy="62" rx="3.5" ry="4.5" fill="#475569" />
        <circle cx="47" cy="60.5" r="1.3" fill="white" />

        <ellipse cx="72" cy="62" rx="3.5" ry="4.5" fill="#475569" />
        <circle cx="71" cy="60.5" r="1.3" fill="white" />

        {/* Nose & Smile */}
        <ellipse cx="60" cy="71" rx="4.5" ry="3" fill="#FB7185" />
        <path d="M57 76 Q 60 79 60 77 Q 60 79 63 76" stroke="#94A3B8" strokeWidth="1.2" fill="none" strokeLinecap="round" />

        {/* Blush Cheeks */}
        <ellipse cx="40" cy="71" rx="5" ry="3" fill="#FDA4AF" opacity="0.7" />
        <ellipse cx="80" cy="71" rx="5" ry="3" fill="#FDA4AF" opacity="0.7" />

        {/* Heart held in paws */}
        <g transform="translate(46, 92) scale(0.7)">
          <path
            d="M20 7 C 20 0, 7 0, 7 9 C 7 17, 20 24, 20 24 C 20 24, 33 17, 33 9 C 33 0, 20 0, 20 7 Z"
            fill="#FB7185"
          />
        </g>
      </svg>
    </motion.div>
  );
};

// Cute 3D Pink Birthday Cake Illustration
export const CuteCakeIllustration: React.FC<{ isLit?: boolean; className?: string }> = ({
  isLit = true,
  className = "w-36 h-36"
}) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 160 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
        {/* Cake Stand */}
        <ellipse cx="80" cy="155" rx="55" ry="10" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
        <path d="M72 155 L 75 165 L 85 165 L 88 155 Z" fill="#E2E8F0" />
        <ellipse cx="80" cy="165" rx="30" ry="4" fill="#CBD5E1" />

        {/* Bottom Cake Layer */}
        <path
          d="M30 115 C 30 115, 30 145, 80 145 C 130 145, 130 115, 130 115 L 130 100 C 130 100, 130 115, 80 115 C 30 115, 30 100, 30 100 Z"
          fill="#FDA4AF"
        />
        <ellipse cx="80" cy="100" rx="50" ry="16" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1.5" />

        {/* Bottom Cream Drips */}
        <path
          d="M30 102 C 38 116, 45 106, 52 116 C 60 106, 68 117, 78 118 C 88 118, 98 108, 108 118 C 116 108, 124 116, 130 102 Z"
          fill="#FFFFFF"
          opacity="0.95"
        />

        {/* Strawberries / Blossom toppers on bottom layer */}
        <circle cx="45" cy="103" r="4" fill="#FB7185" />
        <circle cx="80" cy="108" r="4" fill="#FB7185" />
        <circle cx="115" cy="103" r="4" fill="#FB7185" />

        {/* Top Cake Layer */}
        <path
          d="M45 75 C 45 75, 45 100, 80 100 C 115 100, 115 75, 115 75 L 115 62 C 115 62, 115 75, 80 75 C 45 75, 45 62, 45 62 Z"
          fill="#F472B6"
        />
        <ellipse cx="80" cy="62" rx="35" ry="13" fill="#FFF0F5" stroke="#FBCFE8" strokeWidth="1.5" />

        {/* Top Layer Cream Drips */}
        <path
          d="M45 64 C 52 74, 58 66, 66 75 C 74 66, 82 76, 90 75 C 98 67, 106 74, 115 64 Z"
          fill="#FFFFFF"
        />

        {/* Decorative Icing Rosettes */}
        <circle cx="55" cy="63" r="4" fill="#FBCFE8" />
        <circle cx="70" cy="66" r="4" fill="#FBCFE8" />
        <circle cx="90" cy="66" r="4" fill="#FBCFE8" />
        <circle cx="105" cy="63" r="4" fill="#FBCFE8" />

        {/* Single Golden Birthday Candle */}
        <rect x="77" y="32" width="6" height="26" rx="2" fill="url(#candle-gradient)" stroke="#FDE68A" strokeWidth="0.8" />
        {/* Candle spiral stripes */}
        <path d="M77 38 L 83 41" stroke="#F43F5E" strokeWidth="1.5" />
        <path d="M77 46 L 83 49" stroke="#F43F5E" strokeWidth="1.5" />

        {/* Candle Wick */}
        <line x1="80" y1="32" x2="80" y2="26" stroke="#475569" strokeWidth="1.5" />

        {/* Animated Candle Flame */}
        {isLit ? (
          <g className="candle-flame" transform="translate(80, 24)">
            {/* Outer Glow Halo */}
            <circle cx="0" cy="0" r="16" fill="rgba(251, 191, 36, 0.25)" filter="blur(4px)" />
            {/* Outer Flame */}
            <path
              d="M0 -14 C 6 -6, 7 0, 0 3 C -7 0, -6 -6, 0 -14 Z"
              fill="#F59E0B"
            />
            {/* Core Flame */}
            <path
              d="M0 -10 C 3.5 -4, 4 0, 0 2 C -4 0, -3.5 -4, 0 -10 Z"
              fill="#FEF08A"
            />
          </g>
        ) : (
          /* Smoke curls when blown */
          <g transform="translate(80, 22)">
            <path
              d="M0 0 Q -4 -8 2 -14 T -2 -22"
              stroke="rgba(156, 163, 175, 0.6)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        )}

        <defs>
          <linearGradient id="candle-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

