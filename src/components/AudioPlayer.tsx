import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_CONFIG } from '../birthdayConfig';
import { soundEffects } from '../utils/audioSynth';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [usingSynth, setUsingSynth] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = BIRTHDAY_CONFIG.music.audioUrl;
    audio.loop = true;
    audio.volume = 0.45;

    audio.addEventListener('error', () => {
      // Audio file failed to load, will use fallback synth
      console.log('Audio file unavailable, fallback synthesizer will be used.');
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
      soundEffects.stopMelodyLoop();
    };
  }, []);

  const toggleMusic = async () => {
    soundEffects.playSparkle();

    if (isPlaying) {
      // Stop music
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      soundEffects.stopMelodyLoop();
      setIsPlaying(false);
      setUsingSynth(false);
    } else {
      // Start music
      let playedAudio = false;
      if (audioRef.current && audioRef.current.src) {
        try {
          await audioRef.current.play();
          playedAudio = true;
          setUsingSynth(false);
        } catch {
          // Playback failed (network, format, or restriction)
          playedAudio = false;
        }
      }

      if (!playedAudio && BIRTHDAY_CONFIG.music.fallbackSynthesizer) {
        // Fallback to our dreamy music box
        soundEffects.startMelodyLoop();
        setUsingSynth(true);
      }

      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="relative flex items-center">
        {/* Floating pill button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={toggleMusic}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-lg border transition-all duration-300 ${
            isPlaying
              ? 'bg-white/90 text-pink-600 border-pink-300 shadow-pink-glow backdrop-blur-md'
              : 'bg-white/70 text-gray-600 hover:text-pink-500 border-white/80 backdrop-blur-sm hover:bg-white/90'
          }`}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        >
          {isPlaying ? (
            <>
              {/* Spinning music icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-500"
              >
                <Music className="w-3.5 h-3.5" />
              </motion.div>

              {/* Sound wave bars */}
              <div className="flex items-center gap-0.5 h-3.5">
                {[40, 90, 60, 100, 50].map((height, i) => (
                  <motion.span
                    key={i}
                    animate={{ scaleY: [0.3, 1, 0.4] }}
                    transition={{
                      duration: 0.6 + i * 0.15,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{ height: `${height}%` }}
                    className="w-0.5 bg-pink-500 rounded-full origin-bottom"
                  />
                ))}
              </div>

              <Volume2 className="w-4 h-4 ml-1 text-pink-500" />
            </>
          ) : (
            <>
              <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center text-pink-400">
                <Music className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-medium tracking-wide">Play Music</span>
              <VolumeX className="w-4 h-4 text-gray-400" />
            </>
          )}
        </motion.button>

        {/* Info Tooltip / Song Title Badge */}
        <AnimatePresence>
          {(showTooltip || isPlaying) && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              className="absolute top-12 right-0 pointer-events-none"
            >
              <div className="px-3 py-1.5 rounded-xl bg-white/95 border border-pink-200/80 shadow-md backdrop-blur-md text-[11px] font-medium text-pink-700 whitespace-nowrap flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-pink-400" />
                <span>
                  {usingSynth
                    ? 'Dreamy Kalimba Lullaby'
                    : BIRTHDAY_CONFIG.music.title}
                </span>
                <span className="text-pink-300">♫</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

