
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ModernButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "success" | "coral" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

export const ModernButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  type = "button",
  loading = false,
  icon: Icon,
  iconPosition = "left"
}: ModernButtonProps) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    success: "btn-success",
    coral: "btn-coral",
    ghost: "btn-ghost",
    gradient: "bg-gradient-mesh text-white hover:opacity-90 shadow-premium hover:shadow-glass"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm h-9",
    md: "px-6 py-3 text-base h-11",
    lg: "px-8 py-4 text-lg h-14",
    xl: "px-10 py-5 text-xl h-16"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "btn-modern relative overflow-hidden",
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        loading && "cursor-wait",
        className
      )}
      whileHover={!disabled && !loading ? { 
        y: -2,
        transition: { duration: 0.2 }
      } : undefined}
      whileTap={!disabled && !loading ? { scale: 0.98 } : undefined}
    >
      {/* Loading spinner overlay */}
      {loading && (
        <motion.div
          className="absolute inset-0 bg-current/20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}

      {/* Button content */}
      <div className={cn(
        "flex items-center justify-center space-x-2 relative z-10",
        loading && "opacity-0"
      )}>
        {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
        <span>{children}</span>
        {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 -skew-x-12"
        whileHover={{ 
          opacity: [0, 1, 0],
          x: ["-100%", "100%"]
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};
