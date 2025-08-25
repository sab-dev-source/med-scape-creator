
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

  // Calculate the position for the animated blob - fixed calculation
  const getIndicatorPosition = () => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    const itemWidth = 150; // Match the min-w-[150px] from the Link component
    const startOffset = 8; // Initial offset
    return targetIndex * itemWidth + startOffset;
  };

  return (
    <nav className="relative flex items-center justify-center">
      <div className="relative flex items-center justify-center p-2 rounded-full bg-slate-900/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        {/* Main animated background indicator */}
        <motion.div
          className="absolute rounded-full z-0"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
          animate={{
            x: getIndicatorPosition(),
            width: 134,
            height: 52,
            scale: hoveredIndex !== null ? 1.05 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 0.8
          }}
        />
        
        {/* Enhanced gooey hover effect */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="absolute rounded-full z-0"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 80%)',
                filter: 'blur(8px)',
              }}
              initial={{ 
                x: getIndicatorPosition(),
                width: 134,
                height: 52,
                scale: 0.8,
                opacity: 0 
              }}
              animate={{ 
                x: getIndicatorPosition(),
                width: 160,
                height: 70,
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
          const isActive = activeIndex === index;
          const isHovered = hoveredIndex === index;
          const isTargeted = hoveredIndex !== null ? isHovered : isActive;
          
          return (
            <Link
              key={index}
              to={item.href}
              onClick={() => handleItemClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative z-10 flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full min-w-[150px] text-center"
            >
              <motion.span
                className={`relative z-10 transition-all duration-300 ${
                  isTargeted
                    ? 'text-white drop-shadow-lg font-bold' 
                    : 'text-slate-700 hover:text-slate-900 font-medium'
                }`}
                animate={{
                  scale: isTargeted ? 1.05 : 1,
                  fontWeight: isTargeted ? 700 : 500,
                }}
                transition={{ 
                  duration: 0.2,
                  ease: [0.25, 0.4, 0.55, 1.4]
                }}
              >
                {item.label}
              </motion.span>
              
              {/* Subtle particle effects on hover */}
              <AnimatePresence>
                {isHovered && !isActive && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-60"
                        initial={{ 
                          scale: 0,
                          x: 0,
                          y: 0,
                          opacity: 0
                        }}
                        animate={{ 
                          scale: [0, 1, 0],
                          x: [0, (i - 1) * 12, (i - 1) * 20],
                          y: [0, -6 - i * 2, -12 - i * 3],
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.1,
                          ease: "easeOut",
                          repeat: Infinity,
                          repeatDelay: 1.2
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
    </nav>
  );
};

export default GooeyNav;
