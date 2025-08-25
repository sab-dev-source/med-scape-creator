
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface GooeyNavItem {
  label: string;
  href: string;
}

interface GooeyNavProps {
  items: GooeyNavItem[];
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  initialActiveIndex?: number;
  animationTime?: number;
  timeVariance?: number;
  colors?: number[];
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  initialActiveIndex = 0,
  animationTime = 600,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4]
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [particles, setParticles] = useState<any[]>([]);
  const location = useLocation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Update active index based on current route
  useEffect(() => {
    const currentIndex = items.findIndex(item => item.href === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname, items]);

  // Initialize particles
  useEffect(() => {
    const initParticles = () => {
      const newParticles = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * 800,
          y: Math.random() * 200,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          r: Math.random() * 3 + 1,
          color: colors[i % colors.length]
        });
      }
      setParticles(newParticles);
    };

    initParticles();
  }, [particleCount, colors]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle with gooey effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        
        // Color based on particle.color
        const colors = [
          'hsl(var(--primary))',
          'hsl(var(--blue-500))',
          'hsl(var(--blue-400))',
          'hsl(var(--accent))'
        ];
        ctx.fillStyle = colors[particle.color - 1] || colors[0];
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-20 overflow-hidden">
      <canvas
        ref={canvasRef}
        width={800}
        height={80}
        className="absolute inset-0 w-full h-full opacity-20"
      />
      
      <nav className="relative z-10 flex items-center justify-center h-full">
        <div className="flex items-center space-x-8">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => handleItemClick(index)}
              className={`
                relative px-6 py-3 text-lg font-medium transition-all duration-500 ease-out
                ${activeIndex === index 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25' 
                  : 'text-slate-700 hover:text-blue-600'
                }
                rounded-full hover:scale-105 transform
              `}
              style={{
                filter: activeIndex === index ? 'url(#gooey)' : 'none'
              }}
            >
              {item.label}
              
              {/* Active indicator with gooey effect */}
              {activeIndex === index && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 animate-pulse opacity-80" />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* SVG Filter for gooey effect */}
      <svg className="absolute opacity-0 pointer-events-none">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default GooeyNav;
