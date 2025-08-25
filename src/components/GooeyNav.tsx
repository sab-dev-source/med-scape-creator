
import React, { useState, useEffect, useRef } from 'react';
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
      <div className="relative flex items-center space-x-2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
        {/* Background indicator */}
        <motion.div
          className="absolute h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg"
          animate={{
            x: (hoveredIndex !== null ? hoveredIndex : activeIndex) * 120 + 8,
            width: 104
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
        
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            onClick={() => handleItemClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative z-10 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full min-w-[104px] text-center"
          >
            <motion.span
              className={`relative z-10 transition-colors duration-300 ${
                (hoveredIndex !== null ? hoveredIndex : activeIndex) === index
                  ? 'text-white'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
              animate={{
                scale: (hoveredIndex !== null ? hoveredIndex : activeIndex) === index ? 1.05 : 1
              }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.span>
            
            {/* Gooey hover effect */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.1, opacity: 0.3 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                    filter: 'blur(8px)'
                  }}
                />
              )}
            </AnimatePresence>
          </Link>
        ))}
      </div>
      
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
    </nav>
  );
};

export default GooeyNav;
