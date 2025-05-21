
import { cn } from "@/lib/utils";

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
  return (
    <div 
      className={cn(
        "group p-6 border rounded-lg bg-background hover:border-primary hover-lift",
        `opacity-0 animate-fade-in`,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-12 w-12 rounded-md bg-primary/20 dark:bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
