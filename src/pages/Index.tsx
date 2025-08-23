import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Users, 
  Building, 
  Zap, 
  Globe, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Clock, 
  Star, 
  Mic,
  Briefcase,
  Sparkles
} from "lucide-react";
import { EnhancedCard, StatsCard } from "@/components/ui/enhanced-card";
import ProfessionalHeroSection from "@/components/ProfessionalHeroSection";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Advanced machine learning algorithms that analyze skills, experience, and cultural fit to connect the perfect candidates with opportunities.",
      category: "tech" as const
    },
    {
      icon: Globe,
      title: "Global Talent Network",
      description: "Access to professionals across all industries worldwide, from tech startups to Fortune 500 companies.",
      category: "finance" as const
    },
    {
      icon: Mic,
      title: "Voice-First Experience",
      description: "Navigate, search, and apply using natural speech with our cutting-edge voice assistant technology.",
      category: "tech" as const
    },
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All candidates go through our comprehensive verification process to ensure quality and authenticity.",
      category: "sales" as const
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Get instant notifications on application status, new matches, and industry insights.",
      category: "marketing" as const
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Personalized recommendations for skill development and career advancement opportunities.",
      category: "design" as const
    }
  ];

  const stats = [
    {
      number: "150K+",
      label: "Active Professionals",
      icon: Users,
      color: "primary" as const
    },
    {
      number: "50K+",
      label: "Job Opportunities",
      icon: Building,
      color: "success" as const
    },
    {
      number: "5K+",
      label: "Partner Companies",
      icon: Star,
      color: "coral" as const
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: CheckCircle,
      color: "accent" as const
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at TechnoCorp",
      content: "BlueBridge's AI matching found me the perfect role in just 2 weeks. The voice assistant made the entire process seamless.",
      avatar: "SC",
      category: "tech" as const
    },
    {
      name: "Michael Rodriguez",
      role: "HR Director at InnovateInc",
      content: "We've hired 50+ excellent candidates through BlueBridge. Their talent verification process is outstanding.",
      avatar: "MR",
      category: "sales" as const
    },
    {
      name: "Lisa Wang",
      role: "Product Manager at FutureTech",
      content: "The personalized job recommendations were spot-on. I found opportunities I never would have discovered otherwise.",
      avatar: "LW",
      category: "design" as const
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Professional Hero Section */}
      <ProfessionalHeroSection />

      {/* Enhanced Stats Section */}
      <section className="section-modern bg-white/50 backdrop-blur-sm">
        <div className="container-modern">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.label}
                title={stat.label}
                value={stat.number}
                icon={stat.icon}
                color={stat.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="section-modern bg-gradient-primary-soft">
        <div className="container-modern">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="glass-primary rounded-full px-6 py-3 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Why Choose BlueBridge
                </span>
              </div>
            </div>
            <h2 className="text-section-title text-foreground mb-6">
              Experience the Future of{" "}
              <span className="text-gradient-primary">Recruitment</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology meets personalized service to transform how professionals find careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <EnhancedCard
                key={feature.title}
                delay={index * 0.1}
                variant="premium"
                category={feature.category}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="p-8 text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section-modern bg-white">
        <div className="container-modern">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-section-title text-foreground mb-6">
              Trusted by <span className="text-gradient-coral">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our community says about their BlueBridge experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <EnhancedCard
                key={testimonial.name}
                delay={index * 0.2}
                variant="glass"
                category={testimonial.category}
                className="p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mr-4 font-bold text-white",
                    testimonial.category === "tech" && "bg-gradient-primary",
                    testimonial.category === "sales" && "bg-gradient-success",
                    testimonial.category === "design" && "bg-gradient-purple"
                  )}>
                    <span>{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </EnhancedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-modern bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-coral/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="container-modern relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Job Seekers */}
            <EnhancedCard
              variant="glass"
              className="p-10 text-center border-white/20 bg-white/10 backdrop-blur-md"
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glass">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">For Professionals</h3>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                Discover your next career opportunity with AI-powered matching. 
                Upload your profile and let technology work for you.
              </p>
              <Link to="/upload-resume">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 py-4 text-lg font-semibold shadow-glass hover:shadow-premium transition-all duration-300"
                >
                  Find Opportunities
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
            </EnhancedCard>
            
            {/* Employers */}
            <EnhancedCard
              variant="glass"
              className="p-10 text-center border-white/20 bg-white/10 backdrop-blur-md"
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glass">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">For Employers</h3>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                Access verified talent across all industries. Post jobs and find 
                the perfect candidates with our advanced screening process.
              </p>
              <Link to="/hire">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 py-4 text-lg font-semibold shadow-glass hover:shadow-premium transition-all duration-300"
                >
                  Start Hiring
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
            </EnhancedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
