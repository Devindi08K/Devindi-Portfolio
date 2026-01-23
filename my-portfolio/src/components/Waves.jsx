import { useEffect, useRef } from 'react';

const Waves = ({
  lineColor = '#0ea5e9',
  backgroundColor = 'transparent',
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  friction = 0.925,
  tension = 0.005,
  maxCursorMove = 100,
  className = '',
  style = {}
}) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = canvas.getBoundingClientRect();

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const waves = [];
    const numWaves = Math.ceil(width / xGap);

    // Initialize waves
    for (let i = 0; i < numWaves; i++) {
      const wave = [];
      const numPoints = Math.ceil(height / yGap);
      for (let j = 0; j < numPoints; j++) {
        wave.push({
          x: i * xGap,
          y: j * yGap,
          baseY: j * yGap,
          vx: 0,
          vy: 0,
          phase: Math.random() * Math.PI * 2
        });
      }
      waves.push(wave);
    }

    let animationFrameId;
    let time = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      waves.forEach((wave, waveIndex) => {
        ctx.beginPath();
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;

        wave.forEach((point, pointIndex) => {
          // Wave animation
          const offsetX = Math.sin(time * waveSpeedX + point.phase) * waveAmpX;
          const offsetY = Math.sin(time * waveSpeedY + point.phase * 0.5) * waveAmpY;

          // Mouse interaction
          const dx = mouseRef.current.x - point.x;
          const dy = mouseRef.current.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            point.vx += (dx / distance) * force * tension;
            point.vy += (dy / distance) * force * tension;
          }

          point.vx *= friction;
          point.vy *= friction;

          const cursorOffsetX = Math.max(-maxCursorMove, Math.min(maxCursorMove, point.vx));
          const cursorOffsetY = Math.max(-maxCursorMove, Math.min(maxCursorMove, point.vy));

          const finalX = point.x + offsetX + cursorOffsetX;
          const finalY = point.baseY + offsetY + cursorOffsetY;

          if (pointIndex === 0) {
            ctx.moveTo(finalX, finalY);
          } else {
            ctx.lineTo(finalX, finalY);
          }
        });

        ctx.stroke();
      });

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
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [lineColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, xGap, yGap, friction, tension, maxCursorMove]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ ...style, backgroundColor }}
    />
  );
};

export default Waves;
