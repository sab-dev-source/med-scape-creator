
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface GooeyNavItem {
  label: string;
  href: string;
}

interface GooeyNavProps {
  items: GooeyNavItem[];
}

const GooeyNav: React.FC<GooeyNavProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  // Update active index based on current route
  useEffect(() => {
    const currentIndex = items.findIndex(item => item.href === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname, items]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className="relative flex items-center justify-center">
      <div className="relative flex items-center justify-center p-1 rounded-full bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl">
        {/* Enhanced background indicator with gooey effect */}
        <motion.div
          className="absolute rounded-full"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
          animate={{
            x: (hoveredIndex !== null ? hoveredIndex : activeIndex) * 140 + 8,
            width: 124,
            height: 48,
            scale: hoveredIndex !== null ? 1.05 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
            mass: 0.8
          }}
        />
        
        {/* Gooey morphing background effect */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="absolute rounded-full"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 80%)',
                filter: 'blur(12px)',
              }}
              initial={{ 
                x: activeIndex * 140 + 8,
                width: 124,
                height: 48,
                scale: 0.8,
                opacity: 0 
              }}
              animate={{ 
                x: hoveredIndex * 140 + 8,
                width: 160,
                height: 80,
                scale: 1,
                opacity: 1
              }}
              exit={{ 
                scale: 0.8,
                opacity: 0 
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
            />
          )}
        </AnimatePresence>
        
        {items.map((item, index) => {
          const isActive = (hoveredIndex !== null ? hoveredIndex : activeIndex) === index;
          const isInactive = hoveredIndex !== null && hoveredIndex !== index && activeIndex !== index;
          
          return (
            <Link
              key={index}
              to={item.href}
              onClick={() => handleItemClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative z-10 flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full min-w-[132px] text-center"
            >
              <motion.span
                className={`relative z-10 transition-all duration-300 ${
                  isActive
                    ? 'text-white drop-shadow-sm'
                    : isInactive
                    ? 'text-slate-400'
                    : 'text-slate-200 hover:text-white'
                }`}
                animate={{
                  scale: isActive ? 1.05 : hoveredIndex === index ? 1.02 : 1,
                  fontWeight: isActive ? 600 : 500,
                }}
                transition={{ 
                  duration: 0.2,
                  ease: [0.25, 0.4, 0.55, 1.4]
                }}
              >
                {item.label}
              </motion.span>
              
              {/* Enhanced gooey hover effect with particles */}
              <AnimatePresence>
                {hoveredIndex === index && !isActive && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 0.4 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.25, 0.4, 0.55, 1.4]
                      }}
                      style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(29, 78, 216, 0.2) 40%, transparent 70%)',
                        filter: 'blur(6px)'
                      }}
                    />
                    
                    {/* Particle effects */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        initial={{ 
                          scale: 0,
                          x: 0,
                          y: 0,
                          opacity: 0
                        }}
                        animate={{ 
                          scale: [0, 1, 0],
                          x: [0, (i - 1) * 20, (i - 1) * 30],
                          y: [0, -10 - i * 5, -20 - i * 8],
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{
                          duration: 1.2,
                          delay: i * 0.1,
                          ease: "easeOut",
                          repeat: Infinity,
                          repeatDelay: 0.5
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </div>
      
      {/* Enhanced SVG Filter for gooey effect */}
      <svg className="absolute opacity-0 pointer-events-none" width="0" height="0">
        <defs>
          <filter id="gooey-enhanced" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </nav>
  );
};

export default GooeyNav;
