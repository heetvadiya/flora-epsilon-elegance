
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden perspective-1000">
      {/* Background with cinematic pan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 dark:from-background/90 dark:to-background/50 z-10"></div>
        <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 dark:opacity-20 transform-gpu ${isLoaded ? 'hero-bg-pan' : ''}`}></div>
      </div>

      {/* Content with cinematic entrance */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="overflow-hidden">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 transform-gpu ${isLoaded ? 'hero-text-reveal delay-300' : 'opacity-0'}`}>
              Timeless Luxury in Every Step
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl transform-gpu ${isLoaded ? 'hero-text-reveal delay-500' : 'opacity-0'}`}>
              FLORA by Epsilon delivers premium SPC flooring that combines exceptional durability with sophisticated elegance for spaces that deserve the very best.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 transform-gpu ${isLoaded ? 'hero-text-reveal delay-700' : 'opacity-0'}`}>
            <Button asChild size="lg" className="text-md luxury-button">
              <Link to="/collection">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-md luxury-button">
              <Link to="/why-spc">
                Learn About SPC
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary/40 rounded-full float-gentle"></div>
        <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-accent/50 rounded-full float-gentle-reverse"></div>
        <div className="absolute top-1/2 right-1/8 w-4 h-4 bg-primary/30 rounded-full float-gentle"></div>
      </div>

      {/* Decorative element with entrance animation */}
      <div className={`absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-tl-full -z-10 transform-gpu ${isLoaded ? 'hero-cinematic delay-900' : 'opacity-0'}`}></div>
    </section>
  );
}
