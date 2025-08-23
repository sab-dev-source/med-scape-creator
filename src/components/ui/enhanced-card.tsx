
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface EnhancedCardProps {
  className?: string;
  delay?: number;
  hover?: boolean;
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "glass" | "premium" | "neumorphic" | "gradient";
  category?: "tech" | "design" | "sales" | "marketing" | "finance";
  icon?: LucideIcon;
  title?: string;
  description?: string;
}

export const EnhancedCard = ({ 
  className, 
  delay = 0, 
  hover = true, 
  children,
  onClick,
  variant = "default",
  category,
  icon: Icon,
  title,
  description,
  ...props 
}: EnhancedCardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "glass":
        return "glass-card";
      case "premium":
        return "premium-card";
      case "neumorphic":
        return "neumorphic-card";
      case "gradient":
        return "bg-gradient-primary text-primary-foreground";
      default:
        return "modern-card";
    }
  };

  const getCategoryClasses = () => {
    if (!category) return "";
    switch (category) {
      case "tech":
        return "theme-tech";
      case "design":
        return "theme-design";
      case "sales":
        return "theme-sales";
      case "marketing":
        return "theme-marketing";
      case "finance":
        return "theme-finance";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay,
        ease: [0.25, 0.4, 0.55, 1.4]
      }}
      whileHover={hover ? { 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" } 
      } : undefined}
      onClick={onClick}
      className={cn(
        getVariantClasses(),
        getCategoryClasses(),
        "group cursor-pointer relative overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Category indicator */}
      {category && (
        <div className={cn(
          "absolute top-0 left-0 w-full h-1 rounded-t-2xl",
          category === "tech" && "bg-primary",
          category === "design" && "bg-purple",
          category === "sales" && "bg-success",
          category === "marketing" && "bg-coral",
          category === "finance" && "bg-accent"
        )} />
      )}

      {/* Icon header */}
      {Icon && (
        <div className="flex items-center justify-center mb-6">
          <div className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110",
            category === "tech" && "bg-primary/10 text-primary",
            category === "design" && "bg-purple/10 text-purple",
            category === "sales" && "bg-success/10 text-success",
            category === "marketing" && "bg-coral/10 text-coral",
            category === "finance" && "bg-accent/10 text-accent",
            !category && "bg-primary/10 text-primary"
          )}>
            <Icon className="w-8 h-8" />
          </div>
        </div>
      )}

      {/* Title and description */}
      {title && (
        <div className="text-center mb-6">
          <h3 className="text-card-title text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: LucideIcon;
  color?: "primary" | "success" | "accent" | "coral" | "purple";
  delay?: number;
  className?: string;
}

export const StatsCard = ({
  title,
  value,
  change,
  trend = "neutral",
  icon: Icon,
  color = "primary",
  delay = 0,
  className
}: StatsCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case "success":
        return {
          icon: "text-success bg-success/10",
          trend: trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground"
        };
      case "accent":
        return {
          icon: "text-accent bg-accent/10",
          trend: trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground"
        };
      case "coral":
        return {
          icon: "text-coral bg-coral/10",
          trend: trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground"
        };
      case "purple":
        return {
          icon: "text-purple bg-purple/10",
          trend: trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground"
        };
      default:
        return {
          icon: "text-primary bg-primary/10",
          trend: trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground"
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn("premium-card p-6", className)}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <div className="flex items-baseline space-x-2">
            <p className="text-3xl font-bold text-foreground">
              {value}
            </p>
            {change && (
              <p className={cn("text-sm font-medium", colorClasses.trend)}>
                {change}
              </p>
            )}
          </div>
        </div>
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110",
          colorClasses.icon
        )}>
          <Icon className="w-7 h-7" />
        </div>
      </div>
    </motion.div>
  );
};
