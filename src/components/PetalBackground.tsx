import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  swing: number;
  swingSpeed: number;
  opacity: number;
  color: string;
}

interface Sparkle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  maxOpacity: number;
  fadeSpeed: number;
  fadingIn: boolean;
}

export const PetalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color palette for dreamy sakura petals
    const petalColors = [
      'rgba(255, 182, 193, 0.75)', // Light pink
      'rgba(255, 192, 203, 0.8)',  // Pink
      'rgba(255, 218, 224, 0.85)', // Baby pink
      'rgba(244, 114, 182, 0.65)', // Rose blush
      'rgba(253, 164, 175, 0.7)',  // Soft coral pink
    ];

    // Create petals
    const petalCount = window.innerWidth < 768 ? 24 : 45;
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 10 + 9,
      speedX: Math.random() * 0.8 + 0.3,
      speedY: Math.random() * 1.2 + 0.7,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      swing: Math.random() * Math.PI * 2,
      swingSpeed: Math.random() * 0.02 + 0.01,
      opacity: Math.random() * 0.4 + 0.45,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
    }));

    // Twinkling fairy sparkles
    const sparkleCount = window.innerWidth < 768 ? 18 : 35;
    const sparkles: Sparkle[] = Array.from({ length: sparkleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedY: -(Math.random() * 0.4 + 0.1),
      opacity: Math.random() * 0.7,
      maxOpacity: Math.random() * 0.6 + 0.3,
      fadeSpeed: Math.random() * 0.015 + 0.005,
      fadingIn: Math.random() > 0.5,
    }));

    // Draw single petal shape
    const drawPetal = (
      p: Petal
    ) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      // Realistic Sakura Petal Bezier Curve
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, -p.size / 3, p.size, 0);
      ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, p.size / 2, 0, 0);
      ctx.fill();

      // Soft center vein highlight
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.size * 0.65, 0);
      ctx.stroke();

      ctx.restore();
    };

    // Draw sparkle star
    const drawSparkle = (s: Sparkle) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.fillStyle = `rgba(255, 245, 215, ${s.opacity})`;
      ctx.shadowColor = 'rgba(255, 220, 180, 0.9)';
      ctx.shadowBlur = 8;

      ctx.beginPath();
      ctx.arc(0, 0, s.size, 0, Math.PI * 2);
      ctx.fill();

      // Soft 4-point twinkle cross
      if (s.opacity > 0.4) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${s.opacity * 0.8})`;
        ctx.lineWidth = 0.7;
        const arm = s.size * 2.5;
        ctx.beginPath();
        ctx.moveTo(-arm, 0);
        ctx.lineTo(arm, 0);
        ctx.moveTo(0, -arm);
        ctx.lineTo(0, arm);
        ctx.stroke();
      }

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & update sparkles
      sparkles.forEach((s) => {
        drawSparkle(s);
        s.y += s.speedY;
        if (s.fadingIn) {
          s.opacity += s.fadeSpeed;
          if (s.opacity >= s.maxOpacity) s.fadingIn = false;
        } else {
          s.opacity -= s.fadeSpeed;
          if (s.opacity <= 0.05) {
            s.fadingIn = true;
            s.x = Math.random() * width;
            s.y = Math.random() * height;
          }
        }
        if (s.y < -10) s.y = height + 10;
      });

      // Render & update petals
      petals.forEach((p) => {
        drawPetal(p);
        p.swing += p.swingSpeed;
        p.x += Math.sin(p.swing) * 0.9 + p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Reset if drifted past bottom or right edge
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.85 }}
    />
  );
};

