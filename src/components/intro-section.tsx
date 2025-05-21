
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function IntroSection() {
  return (
    <section className="section-padding" id="about-spc">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Redefining Premium Flooring
            </h2>
            <p className="text-muted-foreground mb-6">
              Stone Polymer Composite (SPC) represents the pinnacle of modern flooring technology, combining the natural beauty of wood with unmatched durability and performance. Unlike traditional hardwood or laminate options, FLORA SPC flooring is completely waterproof, dimensionally stable, and engineered to withstand the demands of busy spaces.
            </p>
            <p className="text-muted-foreground mb-6">
              Each FLORA plank is meticulously crafted with a rigid limestone core that provides exceptional stability and resistance to dents. Our proprietary wear layer technology ensures that your floors maintain their pristine appearance for years to come, even in high-traffic commercial environments.
            </p>
            <Button asChild variant="outline" className="mt-2">
              <Link to="/why-spc">
                Discover the SPC Difference
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative opacity-0 animate-fade-in-left" style={{ animationDelay: "200ms" }}>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                alt="Modern living room with SPC flooring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-2/3 aspect-video rounded-lg overflow-hidden border-4 border-background shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070&auto=format&fit=crop"
                alt="SPC flooring detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-1/2 aspect-square bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
