/**
 * Web Audio API Synthesizer for Dreamy Birthday Website
 * 
 * Provides:
 * 1. Gentle music box / kalimba lullaby of "Happy Birthday" (zero external MP3 needed!)
 * 2. Sparkle chime sound effect
 * 3. Pop / Unwrap sound effect
 * 4. Candle blow puff & magic chime sound effect
 */

class BirthdayAudioSynth {
  private ctx: AudioContext | null = null;
  private isMelodyPlaying: boolean = false;
  private melodyTimeout: any = null;
  private noteIndex: number = 0;

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft kalimba / music box bell note
  public playMusicBoxNote(freq: number, duration: number = 1.2, volume: number = 0.15) {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Soft sine + gentle triangle for music box feel
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // AudioContext policy fallback
    }
  }

  // Happy Birthday notes (frequency in Hz and duration in beats)
  private melodyNotes = [
    { f: 261.63, d: 0.75 }, // C4
    { f: 261.63, d: 0.25 }, // C4
    { f: 293.66, d: 1.0 },  // D4
    { f: 261.63, d: 1.0 },  // C4
    { f: 349.23, d: 1.0 },  // F4
    { f: 329.63, d: 2.0 },  // E4

    { f: 261.63, d: 0.75 }, // C4
    { f: 261.63, d: 0.25 }, // C4
    { f: 293.66, d: 1.0 },  // D4
    { f: 261.63, d: 1.0 },  // C4
    { f: 392.00, d: 1.0 },  // G4
    { f: 349.23, d: 2.0 },  // F4

    { f: 261.63, d: 0.75 }, // C4
    { f: 261.63, d: 0.25 }, // C4
    { f: 523.25, d: 1.0 },  // C5
    { f: 440.00, d: 1.0 },  // A4
    { f: 349.23, d: 1.0 },  // F4
    { f: 329.63, d: 1.0 },  // E4
    { f: 293.66, d: 2.0 },  // D4

    { f: 466.16, d: 0.75 }, // Bb4
    { f: 466.16, d: 0.25 }, // Bb4
    { f: 440.00, d: 1.0 },  // A4
    { f: 349.23, d: 1.0 },  // F4
    { f: 392.00, d: 1.0 },  // G4
    { f: 349.23, d: 2.5 },  // F4
  ];

  // Start the dreamy music box loop
  public startMelodyLoop() {
    this.isMelodyPlaying = true;
    this.noteIndex = 0;
    this.scheduleNextNote();
  }

  public stopMelodyLoop() {
    this.isMelodyPlaying = false;
    if (this.melodyTimeout) {
      clearTimeout(this.melodyTimeout);
      this.melodyTimeout = null;
    }
  }

  private scheduleNextNote() {
    if (!this.isMelodyPlaying) return;

    const note = this.melodyNotes[this.noteIndex];
    // Octave up for sweet music box tinkling
    this.playMusicBoxNote(note.f * 1.5, note.d * 0.9, 0.08);

    const stepMs = note.d * 480; // Gentle tempo

    this.noteIndex = (this.noteIndex + 1) % this.melodyNotes.length;

    this.melodyTimeout = setTimeout(() => {
      this.scheduleNextNote();
    }, stepMs);
  }

  // Magical Sparkle Chime Sound
  public playSparkle() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playMusicBoxNote(freq, 0.8, 0.07);
        }, idx * 70);
      });
    } catch {
      // Ignore
    }
  }

  // Gift Box Open Pop Sound
  public playGiftOpen() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      // Soft swoosh + chord
      const chords = [392, 493.88, 587.33, 783.99, 987.77];
      chords.forEach((freq, idx) => {
        setTimeout(() => {
          this.playMusicBoxNote(freq, 1.4, 0.1);
        }, idx * 60);
      });
    } catch {
      // Ignore
    }
  }

  // Candle Blow Puff & Wish Chime
  public playCandleBlow() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      // Gentle white noise puff
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.1));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();

      // Followed by sweet twinkle
      setTimeout(() => {
        this.playSparkle();
      }, 300);
    } catch {
      // Ignore
    }
  }
}

export const soundEffects = new BirthdayAudioSynth();

