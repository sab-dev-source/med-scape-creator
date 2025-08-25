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
import CardNav from "@/components/CardNav";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [role, setRole] = useState<string | null>(getUserRole());

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

  // CardNav configuration
  const cardNavItems = [
    {
      label: "Navigate",
      bgColor: "#1e40af",
      textColor: "#fff",
      links: [
        { label: "Home", ariaLabel: "Go to Home", url: "/" },
        { label: "Jobs", ariaLabel: "Browse Jobs", url: "/jobs" },
        { label: "Voice Bot", ariaLabel: "AI Voice Assistant", url: "/voice-bot" }
      ]
    },
    {
      label: "Services", 
      bgColor: "#1d4ed8",
      textColor: "#fff",
      links: [
        { label: "Job Matching", ariaLabel: "AI Job Matching", url: "/job-matches" },
        { label: "Resume Upload", ariaLabel: "Upload Resume", url: "/upload-resume" },
        { label: "Quick Apply", ariaLabel: "Quick Job Application", url: "/apply" }
      ]
    },
    {
      label: "Account",
      bgColor: "#2563eb", 
      textColor: "#fff",
      links: role === "company" ? [
        { label: "Dashboard", ariaLabel: "Employer Dashboard", url: "/client/dashboard" },
        { label: "Post Jobs", ariaLabel: "Post New Job", url: "/client/jobs" },
        { label: "Analytics", ariaLabel: "View Analytics", url: "/client/analytics" }
      ] : [
        { label: "Profile", ariaLabel: "View Profile", url: "/profile" },
        { label: "Applications", ariaLabel: "My Applications", url: "/profile/applications" },
        { label: "Get Started", ariaLabel: "Login or Register", url: "/login" }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.55, 1.4] }}
      >
        <div className="h-20 flex items-center">
          {/* Desktop Navigation with CardNav */}
          <div className="hidden lg:block w-full">
            <CardNav
              logo="/lovable-uploads/1180c983-b41e-4fcf-891e-610f753c9d80.png"
              logoAlt="BlueBridge Corporation"
              items={cardNavItems}
              baseColor="#fff"
              menuColor="#000"
              buttonBgColor="#1e40af"
              buttonTextColor="#fff"
              ease="power3.out"
            />
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo - Left Side */}
              <Link to="/" className="flex items-center space-x-3 z-50">
                <motion.img 
                  src="/lovable-uploads/1180c983-b41e-4fcf-891e-610f753c9d80.png" 
                  alt="BlueBridge Corporation" 
                  className="h-16 w-auto sm:h-18 md:h-20" 
                  whileHover={{ scale: 1.05 }} 
                  transition={{ duration: 0.2 }} 
                />
              </Link>

              {/* Hamburger Menu Button */}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="h-12 w-12 p-0 text-slate-600 hover:text-slate-900 hover:bg-slate-100 relative z-50 rounded-lg"
              >
                <motion.div
                  animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.55, 1.4] }}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-40 lg:hidden" 
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
