
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 dark:from-background/90 dark:to-background/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 dark:opacity-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 opacity-0 animate-fade-in-right">
            Timeless Luxury in Every Step
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl opacity-0 animate-fade-in-right" style={{ animationDelay: "200ms" }}>
            FLORA by Epsilon delivers premium SPC flooring that combines exceptional durability with sophisticated elegance for spaces that deserve the very best.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-right" style={{ animationDelay: "400ms" }}>
            <Button asChild size="lg" className="text-md">
              <Link to="/collection">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-md">
              <Link to="/why-spc">
                Learn About SPC
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-tl-full -z-10 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}></div>
    </section>
  );
}
