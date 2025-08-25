
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Upload, Search, Mic, ArrowRight, Sparkles } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const ProfessionalHeroSection = () => {
  return (
    <WavyBackground 
      containerClassName="min-h-screen flex items-center justify-center" 
      colors={[
        "#38bdf8", // sky-400
        "#818cf8", // indigo-400
        "#c084fc", // purple-400
        "#e879f9", // fuchsia-400
        "#22d3ee"  // cyan-400
      ]} 
      waveWidth={50} 
      backgroundFill="#0f172a" // slate-900
      speed="slow" 
      blur={10} 
      waveOpacity={0.5}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20">
        <div className="text-center space-y-6">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="flex justify-center"
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
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
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Connect with opportunities across all industries. Upload your profile, 
            let our advanced AI find perfect matches, and apply with voice assistance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Link to="/upload-resume">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl rounded-xl min-w-[240px] h-14 transition-all duration-300 hover:scale-105">
                <Upload className="w-5 h-5 mr-2" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/jobs">
              <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-xl min-w-[240px] h-14 transition-all duration-300 hover:scale-105">
                <Search className="w-5 h-5 mr-2" />
                Explore Opportunities
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default ProfessionalHeroSection;
