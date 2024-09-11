'use client';

import React, { useEffect, useRef } from 'react';

const brandNames = [
  'Gucci', 'Prada', 'Chanel', 'Dior', 'Versace', 'Armani', 'Balenciaga', 'Hermès',
  'Louis Vuitton', 'Fendi', 'Burberry', 'Givenchy', 'Yves Saint Laurent', 'Valentino',
  'Dolce & Gabbana', 'Balmain', 'Céline', 'Bottega Veneta', 'Alexander McQueen', 'Loewe',
  'Nike', 'Adidas', 'Zara', 'H&M', 'Uniqlo', 'Supreme', 'Off-White', 'Comme des Garçons',
  'Acne Studios', 'Moncler', 'Stone Island', 'Thom Browne', 'Maison Margiela', 'Rick Owens',
  'Jacquemus', 'Vetements', 'Bape', 'Palace', 'Stüssy', 'Raf Simons', 'Jil Sander', 'Lemaire',
  'Miu Miu', 'Stella McCartney', 'Kenzo', 'Issey Miyake', 'Comme des Garçons', 'Yohji Yamamoto'
];

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function BrandNameBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubbles = useRef<Bubble[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize bubbles
    bubbles.current = brandNames.map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,  // Reduced velocity
      vy: (Math.random() - 0.5) * 0.3,  // Reduced velocity
      radius: Math.random() * 30 + 20,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.current.forEach((bubble, index) => {
        // Move bubble
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;

        // Bounce off walls with damping
        if (bubble.x < bubble.radius || bubble.x > canvas.width - bubble.radius) {
          bubble.vx *= -0.9;  // Damping factor
          bubble.x = Math.max(bubble.radius, Math.min(canvas.width - bubble.radius, bubble.x));
        }
        if (bubble.y < bubble.radius || bubble.y > canvas.height - bubble.radius) {
          bubble.vy *= -0.9;  // Damping factor
          bubble.y = Math.max(bubble.radius, Math.min(canvas.height - bubble.radius, bubble.y));
        }

        // Collision with other bubbles
        for (let j = index + 1; j < bubbles.current.length; j++) {
          const other = bubbles.current[j];
          const dx = other.x - bubble.x;
          const dy = other.y - bubble.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < bubble.radius + other.radius) {
            const angle = Math.atan2(dy, dx);
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            // Rotate bubble velocities
            const vx1 = bubble.vx * cos + bubble.vy * sin;
            const vy1 = bubble.vy * cos - bubble.vx * sin;
            const vx2 = other.vx * cos + other.vy * sin;
            const vy2 = other.vy * cos - other.vx * sin;

            // Swap bubble velocities with damping
            bubble.vx = vx2 * cos - vy1 * sin * 0.9;  // Damping factor
            bubble.vy = vy2 * cos + vx1 * sin * 0.9;  // Damping factor
            other.vx = vx1 * cos - vy2 * sin * 0.9;   // Damping factor
            other.vy = vy1 * cos + vx2 * sin * 0.9;   // Damping factor

            // Move bubbles apart
            const overlap = bubble.radius + other.radius - distance;
            bubble.x -= overlap * cos * 0.5;
            bubble.y -= overlap * sin * 0.5;
            other.x += overlap * cos * 0.5;
            other.y += overlap * sin * 0.5;
          }
        }

        // Draw brand name
        ctx.save();
        ctx.translate(bubble.x, bubble.y);
        ctx.font = `${bubble.radius / 2}px 'Caveat', cursive`;
        ctx.fillStyle = 'rgba(224, 128, 85, 0.2)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(brandNames[index], 0, 0);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
