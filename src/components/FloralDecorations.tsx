import React from 'react';
import { motion } from 'framer-motion';

export const FloralDecorations: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
      {/* Top Left Cherry Blossom Branch */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-44 md:w-72 select-none"
      >
        <svg
          viewBox="0 0 260 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-md"
        >
          {/* Main graceful branch */}
          <path
            d="M-20 -20 C 30 40, 80 50, 140 35 C 190 22, 230 45, 250 80"
            stroke="#8d6e63"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M50 42 C 70 80, 110 110, 170 120"
            stroke="#8d6e63"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M120 38 C 135 65, 175 80, 210 75"
            stroke="#a1887f"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Delicate leaves */}
          <path d="M70 35 C 75 25, 90 28, 88 38 C 85 45, 72 45, 70 35 Z" fill="#bbf7d0" opacity="0.85" />
          <path d="M130 95 C 145 90, 155 102, 148 112 C 140 120, 128 110, 130 95 Z" fill="#bbf7d0" opacity="0.85" />
          <path d="M190 50 C 205 45, 212 55, 206 63 C 198 70, 188 62, 190 50 Z" fill="#86efac" opacity="0.85" />

          {/* Blossom 1 */}
          <g transform="translate(140, 35) scale(0.9)">
            <circle cx="0" cy="0" r="14" fill="#fbcfe8" opacity="0.8" />
            <circle cx="-9" cy="-5" r="9" fill="#f472b6" opacity="0.9" />
            <circle cx="9" cy="-5" r="9" fill="#f472b6" opacity="0.9" />
            <circle cx="-7" cy="8" r="9" fill="#f472b6" opacity="0.9" />
            <circle cx="7" cy="8" r="9" fill="#f472b6" opacity="0.9" />
            <circle cx="0" cy="-11" r="9" fill="#f472b6" opacity="0.9" />
            <circle cx="0" cy="0" r="4.5" fill="#fef08a" />
          </g>

          {/* Blossom 2 */}
          <g transform="translate(170, 120) scale(0.85)">
            <circle cx="-8" cy="-5" r="8" fill="#fda4af" opacity="0.95" />
            <circle cx="8" cy="-5" r="8" fill="#fda4af" opacity="0.95" />
            <circle cx="-6" cy="7" r="8" fill="#fda4af" opacity="0.95" />
            <circle cx="6" cy="7" r="8" fill="#fda4af" opacity="0.95" />
            <circle cx="0" cy="-10" r="8" fill="#fda4af" opacity="0.95" />
            <circle cx="0" cy="0" r="4" fill="#fbbf24" />
          </g>

          {/* Blossom 3 - Bud */}
          <g transform="translate(245, 80) scale(0.7)">
            <ellipse cx="0" cy="0" rx="8" ry="12" fill="#fb7185" transform="rotate(30)" />
            <ellipse cx="3" cy="2" rx="6" ry="10" fill="#f43f5e" transform="rotate(30)" />
          </g>

          {/* Blossom 4 */}
          <g transform="translate(75, 48) scale(0.75)">
            <circle cx="-7" cy="-4" r="7" fill="#fbcfe8" opacity="0.95" />
            <circle cx="7" cy="-4" r="7" fill="#fbcfe8" opacity="0.95" />
            <circle cx="-5" cy="6" r="7" fill="#fbcfe8" opacity="0.95" />
            <circle cx="5" cy="6" r="7" fill="#fbcfe8" opacity="0.95" />
            <circle cx="0" cy="-8" r="7" fill="#fbcfe8" opacity="0.95" />
            <circle cx="0" cy="0" r="3" fill="#fef08a" />
          </g>
        </svg>
      </motion.div>

      {/* Top Right Cherry Blossom Branch */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: -40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        className="absolute top-0 right-0 w-44 md:w-72 select-none -scale-x-100"
      >
        <svg
          viewBox="0 0 260 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-md"
        >
          <path
            d="M-20 -20 C 35 35, 75 45, 135 30 C 185 18, 225 40, 245 75"
            stroke="#8d6e63"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M50 38 C 75 75, 115 105, 175 115"
            stroke="#8d6e63"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <g transform="translate(135, 30) scale(0.9)">
            <circle cx="-9" cy="-5" r="9" fill="#fda4af" opacity="0.95" />
            <circle cx="9" cy="-5" r="9" fill="#fda4af" opacity="0.95" />
            <circle cx="-7" cy="8" r="9" fill="#fda4af" opacity="0.95" />
            <circle cx="7" cy="8" r="9" fill="#fda4af" opacity="0.95" />
            <circle cx="0" cy="-11" r="9" fill="#fda4af" opacity="0.95" />
            <circle cx="0" cy="0" r="4.5" fill="#fef08a" />
          </g>
          <g transform="translate(175, 115) scale(0.8)">
            <circle cx="-8" cy="-5" r="8" fill="#f472b6" opacity="0.95" />
            <circle cx="8" cy="-5" r="8" fill="#f472b6" opacity="0.95" />
            <circle cx="-6" cy="7" r="8" fill="#f472b6" opacity="0.95" />
            <circle cx="6" cy="7" r="8" fill="#f472b6" opacity="0.95" />
            <circle cx="0" cy="-10" r="8" fill="#f472b6" opacity="0.95" />
            <circle cx="0" cy="0" r="4" fill="#fbbf24" />
          </g>
        </svg>
      </motion.div>

      {/* Floating Fairy Bokeh Orbs */}
      <div className="absolute top-1/4 left-8 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-2/3 right-10 w-80 h-80 bg-rose-200/25 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
    </div>
  );
};

