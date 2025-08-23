
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Search, 
  Upload, 
  Sparkles, 
  TrendingUp, 
  Users,
  ArrowRight,
  Mic,
  Zap
} from "lucide-react";

const ModernHeroSection = () => {
  const floatingElements = [
    { icon: Briefcase, color: "text-primary", delay: 0 },
    { icon: TrendingUp, color: "text-success", delay: 0.5 },
    { icon: Users, color: "text-coral", delay: 1 },
    { icon: Zap, color: "text-purple", delay: 1.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.color} opacity-10`}
            style={{
              left: `${20 + index * 20}%`,
              top: `${15 + index * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: element.delay,
            }}
          >
            <element.icon className="w-16 h-16 md:w-24 md:h-24" />
          </motion.div>
        ))}
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative container-modern text-center">
        <div className="max-w-5xl mx-auto space-content">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="glass-primary rounded-full px-6 py-3 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                AI-Powered Career Platform
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-hero text-foreground mb-8"
          >
            Find Your Perfect Career with{" "}
            <span className="text-gradient-primary">AI-Powered</span>{" "}
            Precision
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Connect with opportunities across all industries. Upload your profile, 
            let our advanced AI find perfect matches, and apply with voice assistance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link to="/upload-resume">
              <Button size="lg" className="btn-primary px-8 py-4 text-lg h-14 min-w-[200px]">
                <Upload className="w-5 h-5 mr-2" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/jobs">
              <Button size="lg" className="btn-secondary px-8 py-4 text-lg h-14 min-w-[200px]">
                <Search className="w-5 h-5 mr-2" />
                Explore Opportunities
              </Button>
            </Link>
          </motion.div>

          {/* Voice Assistant Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="premium-card p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  className="bg-gradient-primary rounded-full p-4 shadow-primary-glow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mic className="w-8 h-8 text-primary-foreground" />
                </motion.div>
              </div>
              
              <h3 className="text-card-title text-foreground mb-4">
                AI-Powered Voice Assistant
              </h3>
              
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Navigate our platform hands-free! Search for jobs, get recommendations, 
                and apply using just your voice with our cutting-edge AI assistant.
              </p>
              
              <Link to="/voice-bot">
                <Button className="btn-accent">
                  <Mic className="w-4 h-4 mr-2" />
                  Try Voice Assistant
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
