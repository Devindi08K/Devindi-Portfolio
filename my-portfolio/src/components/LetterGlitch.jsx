import { useEffect, useRef } from 'react';

const LetterGlitch = ({
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789',
  className = ''
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = canvas.getBoundingClientRect();
    
    // Set canvas dimensions
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(0);
    const glitchChars = characters.split('');

    let animationFrameId;
    let lastTime = 0;

    const draw = (currentTime) => {
      if (currentTime - lastTime < glitchSpeed) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      lastTime = currentTime;

      // Create fade effect
      ctx.fillStyle = smooth ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Draw characters
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        const color = glitchColors[Math.floor(Math.random() * glitchColors.length)];
        
        ctx.fillStyle = color;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Apply vignettes
      if (centerVignette) {
        const centerGradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          0,
          width / 2,
          height / 2,
          Math.max(width, height) / 2
        );
        centerGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        centerGradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
        ctx.fillStyle = centerGradient;
        ctx.fillRect(0, 0, width, height);
      }

      if (outerVignette) {
        const outerGradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          Math.max(width, height) * 0.3,
          width / 2,
          height / 2,
          Math.max(width, height) * 0.7
        );
        outerGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        outerGradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
        ctx.fillStyle = outerGradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    const handleResize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [glitchColors, glitchSpeed, centerVignette, outerVignette, smooth, characters]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ background: '#000' }}
    />
  );
};

export default LetterGlitch;
