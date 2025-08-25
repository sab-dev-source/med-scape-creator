
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserRole } from "@/services/userservice/auth";

interface GooeyNavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { title: string; url: string }[];
}

interface GooeyNavProps {
  items: GooeyNavItem[];
}

const GooeyNav: React.FC<GooeyNavProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [role, setRole] = useState<string | null>(getUserRole());
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Update role when it changes
  useEffect(() => {
    const handleRoleChanged = () => setRole(getUserRole());
    window.addEventListener("role-changed", handleRoleChanged as EventListener);
    return () => window.removeEventListener("role-changed", handleRoleChanged as EventListener);
  }, []);

  // Update active index based on current route
  useEffect(() => {
    const currentIndex = items.findIndex(item => {
      if (item.href === location.pathname) return true;
      if (item.hasDropdown && item.dropdownItems) {
        return item.dropdownItems.some(dropdownItem => dropdownItem.url === location.pathname);
      }
      return false;
    });
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname, items]);

  const handleItemClick = (index: number) => {
    if (!items[index].hasDropdown) {
      setActiveIndex(index);
    }
  };

  // Profile dropdown items based on role
  const profileItems = role === "company" ? [
    { title: "Dashboard", url: "/client/dashboard" },
    { title: "Post a Job", url: "/client/jobs" },
    { title: "Manage Candidates", url: "/client/candidates" },
    { title: "Analytics", url: "/client/analytics" },
    { title: "Settings", url: "/client/settings" },
  ] : [
    { title: "View Profile", url: "/profile" },
    { title: "My Applications", url: "/profile/applications" },
    { title: "Saved Jobs", url: "/profile/saved-jobs" },
    { title: "Settings", url: "/profile/settings" },
    { title: "Notifications", url: "/profile/notifications" },
  ];

  // Calculate blob position and width - only move when not dropdown is open
  const calculateBlobStyle = () => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    const itemWidth = 104; // min-w-[104px]
    const itemSpacing = 8; // space-x-2
    const containerPadding = 8; // p-2
    
    return {
      x: containerPadding + (targetIndex * (itemWidth + itemSpacing)),
      width: itemWidth
    };
  };

  const blobStyle = calculateBlobStyle();

  return (
    <div className="flex justify-center w-full">
      <nav className="relative flex items-center justify-center" ref={navRef}>
        <div className="relative flex items-center space-x-2 p-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-lg overflow-hidden">
          {/* Background indicator */}
          <motion.div
            className="absolute h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-md"
            animate={{
              x: blobStyle.x,
              width: blobStyle.width
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          />
          
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            const isHighlighted = isActive || isHovered;
            
            if (item.hasDropdown) {
              return (
                <DropdownMenu key={index} onOpenChange={setDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <button
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative z-10 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full min-w-[104px] text-center flex items-center justify-center gap-1"
                    >
                      <motion.span
                        className={`relative z-10 transition-colors duration-300 font-semibold ${
                          isHighlighted
                            ? 'text-white'
                            : 'text-slate-700 hover:text-slate-900'
                        }`}
                        animate={{
                          scale: isHighlighted ? 1.05 : 1
                        }}
                        transition={{ duration: 0.2 }}
                        style={{
                          textShadow: isHighlighted ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
                        }}
                      >
                        {item.label}
                      </motion.span>
                      <ChevronDown className={`w-3 h-3 transition-colors duration-300 ${
                        isHighlighted ? 'text-white' : 'text-slate-600'
                      }`}
                      style={{
                        filter: isHighlighted ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))' : 'none'
                      }} />
                      
                      {/* Gooey hover effect */}
                      <AnimatePresence>
                        {isHovered && !dropdownOpen && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.1, opacity: 0.2 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                              filter: 'blur(6px)'
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white shadow-xl border border-slate-200 z-50 mt-2 rounded-lg">
                    {profileItems.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.title} asChild>
                        <Link 
                          to={dropdownItem.url}
                          className="block px-4 py-3 text-sm hover:bg-slate-50 cursor-pointer text-slate-700 rounded-md transition-colors duration-200"
                          onClick={() => {
                            handleItemClick(index);
                            setDropdownOpen(false);
                          }}
                        >
                          {dropdownItem.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={index}
                to={item.href}
                onClick={() => handleItemClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative z-10 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full min-w-[104px] text-center"
              >
                <motion.span
                  className={`relative z-10 transition-colors duration-300 font-semibold ${
                    isHighlighted
                      ? 'text-white'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                  animate={{
                    scale: isHighlighted ? 1.05 : 1
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    textShadow: isHighlighted ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
                  }}
                >
                  {item.label}
                </motion.span>
                
                {/* Gooey hover effect */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.1, opacity: 0.2 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                        filter: 'blur(6px)'
                      }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
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
    </div>
  );
};

export default GooeyNav;
