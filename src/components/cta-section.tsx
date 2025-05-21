
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-flora-charcoal/90 dark:bg-flora-charcoal/80 mix-blend-multiply z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2074&auto=format&fit=crop"
              alt="Luxury interior with SPC flooring"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-20 py-16 px-6 md:py-24 md:px-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 opacity-0 animate-fade-in">
                Transform Your Space with Premium SPC Flooring
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-200 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
                Whether you're renovating a single room or designing an entire commercial space, FLORA provides the perfect foundation for your vision.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Button asChild size="lg" className="bg-flora-gold hover:bg-flora-gold/90 text-flora-black">
                  <Link to="/collection">Browse Collection</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
