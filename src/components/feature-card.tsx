
import { cn } from "@/lib/utils";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  className,
  delay = 0
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group p-6 border rounded-lg bg-background transition-all duration-700 ease-out transform-gpu perspective-1000",
        "hover:border-primary hover:shadow-2xl",
        "hover:bg-gradient-to-br hover:from-background hover:to-primary/5",
        "theme-transition",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "h-12 w-12 rounded-md bg-primary/20 dark:bg-primary/10 flex items-center justify-center mb-4 text-primary",
        "transition-all duration-500 ease-out transform-gpu",
        "group-hover:scale-125 group-hover:rotate-12 group-hover:bg-primary/30",
        "group-hover:shadow-lg group-hover:shadow-primary/20"
      )}>
        {icon}
      </div>
      
      <h3 className={cn(
        "text-lg font-medium mb-2 transition-all duration-300 transform-gpu",
        "group-hover:text-primary group-hover:translate-x-1"
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "text-muted-foreground transition-all duration-300 transform-gpu",
        "group-hover:text-foreground/80 group-hover:translate-x-1"
      )}>
        {description}
      </p>
      
      {/* Animated background overlay with luxury shimmer */}
      <div className={cn(
        "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 pointer-events-none",
        "bg-gradient-to-r from-primary/10 via-primary/5 to-transparent",
        "group-hover:opacity-100",
        isHovered && "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:group-hover:translate-x-[100%] before:transition-transform before:duration-1000"
      )} />
      
      {/* Luxury glowing border effect */}
      <div className={cn(
        "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 pointer-events-none",
        "border-2 border-primary/30 group-hover:opacity-100",
        "shadow-[0_0_20px_rgba(212,185,140,0.3)]"
      )} />
    </div>
  );
}
