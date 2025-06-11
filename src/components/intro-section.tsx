
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding perspective-2000" id="about-spc">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'layer-left' : ''}`} style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Redefining Premium Flooring
            </h2>
            <p className="text-muted-foreground mb-6">
              Stone Polymer Composite (SPC) represents the pinnacle of modern flooring technology, combining the natural beauty of wood with unmatched durability and performance. Unlike traditional hardwood or laminate options, FLORA SPC flooring is completely waterproof, dimensionally stable, and engineered to withstand the demands of busy spaces.
            </p>
            <p className="text-muted-foreground mb-6">
              Each FLORA plank is meticulously crafted with a rigid limestone core that provides exceptional stability and resistance to dents. Our proprietary wear layer technology ensures that your floors maintain their pristine appearance for years to come, even in high-traffic commercial environments.
            </p>
            <Button asChild variant="outline" className="mt-2 pulse-glow">
              <Link to="/why-spc">
                Discover the SPC Difference
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="layer-stack-container relative">
            {/* Main center image with stacking animation */}
            <div 
              className={`aspect-square rounded-lg overflow-hidden shadow-2xl dynamic-image ${
                isVisible ? 'layer-center' : ''
              }`}
              style={{ animationDelay: "600ms" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                alt="Modern living room with SPC flooring"
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Bottom left detail with product reveal animation */}
            <div 
              className={`absolute -bottom-4 -left-4 w-2/3 aspect-video rounded-lg overflow-hidden border-4 border-background shadow-2xl dynamic-image ${
                isVisible ? 'product-reveal-left' : ''
              }`}
              style={{ animationDelay: "900ms" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070&auto=format&fit=crop"
                alt="SPC flooring detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 shimmer-effect opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Top right floating element */}
            <div 
              className={`absolute -top-4 -right-4 w-1/3 aspect-square rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl ${
                isVisible ? 'product-reveal-right float-dynamic' : ''
              }`}
              style={{ animationDelay: "1200ms" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
                alt="Premium flooring showcase"
                className="w-full h-full object-cover dynamic-image"
              />
            </div>
            
            {/* Animated background layers */}
            <div 
              className={`absolute -top-8 -right-8 w-1/2 aspect-square bg-gradient-to-br from-primary/30 to-primary/10 rounded-full -z-10 pulse-glow ${
                isVisible ? 'float-reverse' : ''
              }`}
              style={{ animationDelay: "1500ms" }}
            />
            
            <div 
              className={`absolute -bottom-8 -left-8 w-1/3 aspect-square bg-gradient-to-tl from-accent/20 to-accent/5 rounded-full -z-20 ${
                isVisible ? 'float-dynamic' : ''
              }`}
              style={{ animationDelay: "1800ms" }}
            />
            
            {/* Dynamic floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-3 h-3 bg-primary/40 rounded-full ${
                    isVisible ? (i % 2 === 0 ? 'float-dynamic' : 'float-reverse') : 'opacity-0'
                  }`}
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${8 + i * 10}%`,
                    animationDelay: `${i * 300 + 2000}ms`,
                    animationDuration: `${3 + i * 0.3}s`
                  }}
                />
              ))}
            </div>

            {/* Glowing orbs */}
            <div 
              className={`absolute top-1/4 left-1/4 w-4 h-4 bg-primary/60 rounded-full ${
                isVisible ? 'pulse-glow-intense' : 'opacity-0'
              }`}
              style={{ animationDelay: "2200ms" }}
            />
            <div 
              className={`absolute bottom-1/3 right-1/3 w-6 h-6 bg-accent/50 rounded-full ${
                isVisible ? 'pulse-glow' : 'opacity-0'
              }`}
              style={{ animationDelay: "2500ms" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
