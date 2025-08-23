
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Upload, 
  Search, 
  Mic, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const ProfessionalHeroSection = () => {
  return (
    <WavyBackground
      containerClassName="min-h-screen"
      colors={[
        "#1e293b", // slate-800
        "#334155", // slate-700
        "#475569", // slate-600
        "#64748b", // slate-500
        "#94a3b8", // slate-400
      ]}
      waveWidth={30}
      backgroundFill="#0f172a" // slate-900
      speed="slow"
      blur={15}
      waveOpacity={0.3}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex items-center space-x-2 border border-white/20">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">
              AI-Powered Career Platform
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Find Your Perfect Career with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            AI-Powered
          </span>{" "}
          Precision
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
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
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg h-14 min-w-[220px] font-semibold shadow-xl"
            >
              <Upload className="w-5 h-5 mr-2" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/jobs">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg h-14 min-w-[220px] font-semibold backdrop-blur-sm"
            >
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
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="bg-blue-500 rounded-full p-4 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Mic className="w-8 h-8 text-white" />
              </motion.div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              AI-Powered Voice Assistant
            </h3>
            
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Navigate our platform hands-free! Search for jobs, get recommendations, 
              and apply using just your voice with our cutting-edge AI assistant.
            </p>
            
            <Link to="/voice-bot">
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-semibold"
              >
                <Mic className="w-4 h-4 mr-2" />
                Try Voice Assistant
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </WavyBackground>
  );
};

export default ProfessionalHeroSection;
