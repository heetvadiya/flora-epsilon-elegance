
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function IntroSection() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={elementRef} className="section-padding perspective-2000" id="about-spc">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transform-gpu ${isVisible ? 'scroll-reveal-slide-left is-visible' : 'scroll-reveal-slide-left'}`}>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Redefining Premium Flooring
            </h2>
            <p className="text-muted-foreground mb-6">
              Stone Polymer Composite (SPC) represents the pinnacle of modern flooring technology, combining the natural beauty of wood with unmatched durability and performance. Unlike traditional hardwood or laminate options, FLORA SPC flooring is completely waterproof, dimensionally stable, and engineered to withstand the demands of busy spaces.
            </p>
            <p className="text-muted-foreground mb-6">
              Each FLORA plank is meticulously crafted with a rigid limestone core that provides exceptional stability and resistance to dents. Our proprietary wear layer technology ensures that your floors maintain their pristine appearance for years to come, even in high-traffic commercial environments.
            </p>
            <Button asChild variant="outline" className="mt-2 luxury-button luxury-glow">
              <Link to="/why-spc">
                Discover the SPC Difference
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="relative perspective-1000">
            {/* Main center image with sophisticated stacking animation */}
            <div 
              className={`aspect-square rounded-lg overflow-hidden shadow-2xl transform-gpu ${
                isVisible ? 'layer-stack-center delay-300' : 'opacity-0'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                alt="Modern living room with SPC flooring"
                className="w-full h-full object-cover transition-all duration-700 ease-out product-image"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Bottom left detail with sophisticated reveal animation */}
            <div 
              className={`absolute -bottom-4 -left-4 w-2/3 aspect-video rounded-lg overflow-hidden border-4 border-background shadow-2xl transform-gpu ${
                isVisible ? 'layer-stack-left delay-600' : 'opacity-0'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070&auto=format&fit=crop"
                alt="SPC flooring detail"
                className="w-full h-full object-cover product-image"
              />
            </div>
            
            {/* Top right floating element with staggered animation */}
            <div 
              className={`absolute -top-4 -right-4 w-1/3 aspect-square rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl transform-gpu ${
                isVisible ? 'layer-stack-right delay-900 float-gentle' : 'opacity-0'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
                alt="Premium flooring showcase"
                className="w-full h-full object-cover product-image"
              />
            </div>
            
            {/* Animated background layers with luxury glow */}
            <div 
              className={`absolute -top-8 -right-8 w-1/2 aspect-square bg-gradient-to-br from-primary/30 to-primary/10 rounded-full -z-10 luxury-glow transform-gpu ${
                isVisible ? 'float-gentle-reverse delay-1200' : 'opacity-0'
              }`}
            />
            
            <div 
              className={`absolute -bottom-8 -left-8 w-1/3 aspect-square bg-gradient-to-tl from-accent/20 to-accent/5 rounded-full -z-20 transform-gpu ${
                isVisible ? 'float-gentle delay-1500' : 'opacity-0'
              }`}
            />
            
            {/* Dynamic floating particles with staggered reveals */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-3 h-3 bg-primary/40 rounded-full transform-gpu ${
                    isVisible ? (i % 2 === 0 ? 'float-gentle' : 'float-gentle-reverse') : 'opacity-0'
                  }`}
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${8 + i * 10}%`,
                    animationDelay: `${i * 200 + 1800}ms`,
                  }}
                />
              ))}
            </div>

            {/* Luxury glowing orbs */}
            <div 
              className={`absolute top-1/4 left-1/4 w-4 h-4 bg-primary/60 rounded-full luxury-glow transform-gpu ${
                isVisible ? 'delay-2000' : 'opacity-0'
              }`}
            />
            <div 
              className={`absolute bottom-1/3 right-1/3 w-6 h-6 bg-accent/50 rounded-full luxury-glow transform-gpu ${
                isVisible ? 'delay-2200' : 'opacity-0'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
