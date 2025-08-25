import { useEffect, useState } from "react";
import { getUserRole } from "@/services/userservice/auth"; 
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, User, Building, X, Home, Briefcase, MessageCircle, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GooeyNav from "./GooeyNav";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [role, setRole] = useState<string | null>(getUserRole());
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // keep role in sync (same-tab + cross-tab)
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "role") setRole(getUserRole());
    };
    const handleRoleChanged = () => setRole(getUserRole()); 

    window.addEventListener("storage", handleStorage);
    window.addEventListener("role-changed", handleRoleChanged as EventListener);
    setRole(getUserRole());

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("role-changed", handleRoleChanged as EventListener);
    };
  }, []);

  const location = useLocation();
  
  const navigationItems = [
    { title: "Home", url: "/", icon: Home },
    { title: "Jobs", url: "/jobs", icon: Briefcase },
    { title: "Voice Bot", url: "/voice-bot", icon: MessageCircle },
  ];

  const profileItems = [
    { title: "View Profile", url: "/profile" },
    { title: "My Applications", url: "/profile/applications" },
    { title: "Saved Jobs", url: "/profile/saved-jobs" },
    { title: "Settings", url: "/profile/settings" },
    { title: "Notifications", url: "/profile/notifications" },
  ];

  const employerItems = [
    { title: "Dashboard", url: "/client/dashboard" },
    { title: "Post a Job", url: "/client/jobs" },
    { title: "Manage Candidates", url: "/client/candidates" },
    { title: "Analytics", url: "/client/analytics" },
    { title: "Settings", url: "/client/settings" },
  ];

  // Navigation items for GooeyNav with dropdown for Profile
  const gooeyNavItems = [
    { label: "Home", href: "/" },
    { label: "Jobs", href: "/jobs" },
    { label: "Voice Bot", href: "/voice-bot" },
    { 
      label: "Profile", 
      href: role === "company" ? "/client/dashboard" : "/profile",
      hasDropdown: true,
      dropdownItems: role === "company" ? employerItems : profileItems
    },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.55, 1.4] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left Side */}
            <Link to="/" className="flex items-center space-x-3 z-50 flex-shrink-0">
              <motion.div
                className="h-10 w-auto sm:h-12 md:h-14 flex items-center"
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/lovable-uploads/1180c983-b41e-4fcf-891e-610f753c9d80.png" 
                  alt="BlueBridge Corporation" 
                  className="h-full w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
                  style={{ 
                    imageRendering: 'auto'
                  }}
                  onError={(e) => {
                    console.error('Logo failed to load:', e);
                    // Fallback to text logo
                    const target = e.target as HTMLImageElement;
                    target.outerHTML = '<div class="text-2xl font-bold text-blue-600">BlueBridge</div>';
                  }}
                  onLoad={() => console.log('Logo loaded successfully')}
                />
              </motion.div>
            </Link>

            {/* Desktop GooeyNav - Centered */}
            <div className="hidden lg:flex flex-1 justify-center px-8 max-w-2xl">
              <GooeyNav items={gooeyNavItems} />
            </div>

            {/* Get Started Button - Desktop */}
            <div className="hidden lg:block flex-shrink-0">
              <Link to="/login">
                <Button 
                  className="h-12 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Hamburger Menu Button - Mobile only */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden h-12 w-12 p-0 text-slate-600 hover:text-slate-900 hover:bg-slate-100 relative z-50 rounded-lg flex-shrink-0"
            >
              <motion.div
                animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.55, 1.4] }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </Button>

            {/* Fallback text logo if image fails */}
            <noscript>
              <div className="text-2xl font-bold text-blue-600">BlueBridge</div>
            </noscript>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Only visible on mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 bg-white z-40" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.55, 1.4] }}
          >
            <div className="pt-28 pb-8 px-6 h-full overflow-y-auto">
              <div className="max-w-md mx-auto space-y-8">
                {/* Navigation Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <h2 className="text-xl font-bold text-slate-900 mb-6 px-2">Navigation</h2>
                  <div className="space-y-2">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
                      >
                        <Link 
                          to={item.url} 
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
                            isActive(item.url) 
                              ? 'bg-blue-50 text-blue-700 border-2 border-blue-200 shadow-sm' 
                              : 'hover:bg-slate-50 text-slate-700 border-2 border-transparent'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            isActive(item.url) ? 'bg-blue-100' : 'bg-slate-100'
                          }`}>
                            <item.icon className="w-6 h-6" />
                          </div>
                          <span className="text-lg font-medium">{item.title}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Account Section */}
                <motion.div 
                  className="border-t border-slate-200 pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <h2 className="text-xl font-bold text-slate-900 mb-6 px-2">Account</h2>
                  <div className="space-y-3">

                    {((role ?? "").trim().toLowerCase() === "company") ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35, duration: 0.3 }}
                      >
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="w-full flex items-center justify-between space-x-4 p-4 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors duration-200">
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                  <Building className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-medium">Employers Portal</span>
                              </div>
                              <ChevronDown className="w-5 h-5" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56 bg-white shadow-lg border border-slate-200">
                            {employerItems.map((item) => (
                              <DropdownMenuItem key={item.title} asChild>
                                <Link 
                                  to={item.url} 
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block px-4 py-2 text-sm hover:bg-slate-50 cursor-pointer"
                                >
                                  {item.title}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35, duration: 0.3 }}
                      >
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="w-full flex items-center justify-between space-x-4 p-4 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors duration-200">
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                  <User className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-medium">Profile</span>
                              </div>
                              <ChevronDown className="w-5 h-5" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56 bg-white shadow-lg border border-slate-200">
                            {profileItems.map((item) => (
                              <DropdownMenuItem key={item.title} asChild>
                                <Link 
                                  to={item.url} 
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block px-4 py-2 text-sm hover:bg-slate-50 cursor-pointer"
                                >
                                  {item.title}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </motion.div>
                    )}

                    {/* Get Started Button */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45, duration: 0.3 }}
                      className="pt-4"
                    >
                      <Link 
                        to="/login" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full"
                      >
                        <Button 
                          className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200"
                        >
                          Get Started
                        </Button>
                      </Link>
                    </motion.div>

                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
