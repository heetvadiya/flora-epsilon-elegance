
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
        "hover:border-primary hover:shadow-2xl hover:scale-105 hover:-translate-y-2",
        "hover:bg-gradient-to-br hover:from-background hover:to-primary/5",
        isHovered && "animate-pulse-glow",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        transform: isHovered ? 'perspective(1000px) rotateX(-5deg) rotateY(5deg)' : ''
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "h-12 w-12 rounded-md bg-primary/20 dark:bg-primary/10 flex items-center justify-center mb-4 text-primary",
        "transition-all duration-500 ease-out",
        "group-hover:scale-125 group-hover:rotate-12 group-hover:bg-primary/30",
        "group-hover:shadow-lg group-hover:shadow-primary/20"
      )}>
        {icon}
      </div>
      <h3 className={cn(
        "text-lg font-medium mb-2 transition-all duration-300",
        "group-hover:text-primary group-hover:translate-x-1"
      )}>
        {title}
      </h3>
      <p className={cn(
        "text-muted-foreground transition-all duration-300",
        "group-hover:text-foreground/80 group-hover:translate-x-1"
      )}>
        {description}
      </p>
      
      {/* Animated background overlay */}
      <div className={cn(
        "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500",
        "bg-gradient-to-r from-primary/10 via-primary/5 to-transparent",
        "group-hover:opacity-100 pointer-events-none"
      )} />
      
      {/* Glowing border effect */}
      <div className={cn(
        "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300",
        "border-2 border-primary/30 group-hover:opacity-100 pointer-events-none",
        "shadow-[0_0_20px_rgba(212,185,140,0.3)]"
      )} />
    </div>
  );
}
