
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

interface CardNavLink {
  label: string;
  ariaLabel: string;
  url?: string;
}

interface CardNavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
}

interface CardNavProps {
  logo: string;
  logoAlt: string;
  items: CardNavItem[];
  baseColor: string;
  menuColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  ease: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt,
  items,
  baseColor,
  menuColor,
  buttonBgColor,
  buttonTextColor,
  ease
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Open animation
      gsap.set(overlayRef.current, { display: 'block' });
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: ease
      });

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card, 
          {
            y: 50,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: ease
          }
        );
      });
    } else {
      // Close animation
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: ease,
        onComplete: () => {
          gsap.set(overlayRef.current, { display: 'none' });
        }
      });
    }
  }, [isOpen, ease]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt={logoAlt} 
            className="h-16 w-auto sm:h-18 md:h-20" 
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          style={{ 
            backgroundColor: buttonBgColor, 
            color: buttonTextColor 
          }}
        >
          <span className="text-sm font-medium">Menu</span>
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5" style={{ backgroundColor: buttonTextColor }}></div>
            <div className="w-full h-0.5" style={{ backgroundColor: buttonTextColor }}></div>
            <div className="w-full h-0.5" style={{ backgroundColor: buttonTextColor }}></div>
          </div>
        </button>
      </div>

      {/* Overlay Menu */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 hidden"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
        onClick={closeMenu}
      >
        <div className="flex items-center justify-center min-h-screen p-8">
          <div 
            ref={menuRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {items.map((item, index) => (
              <div
                key={item.label}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ 
                  backgroundColor: item.bgColor,
                  color: item.textColor
                }}
              >
                <h3 className="text-2xl font-bold mb-6">{item.label}</h3>
                <div className="space-y-4">
                  {item.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.url || '#'}
                      aria-label={link.ariaLabel}
                      className="block text-lg opacity-80 hover:opacity-100 transition-opacity duration-200"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={closeMenu}
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full"
          style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
        >
          <span className="text-2xl">×</span>
        </button>
      </div>
    </>
  );
};

export default CardNav;
