
import { Briefcase, Users, Building, TrendingUp } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "150K+",
      label: "Active Professionals",
      description: "Across all industries"
    },
    {
      icon: Briefcase,
      number: "50K+",
      label: "Job Opportunities",
      description: "From startups to Fortune 500"
    },
    {
      icon: Building,
      number: "5K+",
      label: "Partner Companies",
      description: "Successfully placed"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      description: "Job placement satisfaction"
    }
  ];

  const successfulUsers = [
    {
      id: 1,
      name: "Sarah Chen",
      designation: "Senior Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      designation: "Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      name: "Lisa Wang",
      designation: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "James Johnson",
      designation: "Data Scientist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 5,
      name: "Emily Davis",
      designation: "Marketing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      name: "David Kim",
      designation: "Tech Lead",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of professionals and companies who've found success with BlueBridge
          </p>
          
          {/* Animated Tooltip Section - Made more visible */}
          <div className="mb-16 bg-gray-50 rounded-2xl py-12 px-8">
            <p className="text-gray-800 text-lg mb-8 font-semibold">
              Meet some of the professionals who found their dream careers
            </p>
            <div className="flex justify-center">
              <AnimatedTooltip items={successfulUsers} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
