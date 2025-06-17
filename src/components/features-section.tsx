import { FeatureCard } from "./feature-card";
import { Droplet, Shield, X, CheckSquare, Volume2, Flame, Shield as ShieldIcon, Brush } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

export function FeaturesSection() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef, visibleItems } = useStaggeredAnimation(9, 150);

  const features = [
    {
      icon: <Droplet className="h-6 w-6" />,
      title: "Water Resistant",
      description: "Impervious to spills and water damage, perfect for kitchens and bathrooms."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Highly Durable",
      description: "Engineered to withstand heavy traffic areas with minimal wear."
    },
    {
      icon: <X className="h-6 w-6" />,
      title: "Scratch Resistant",
      description: "Protective wear layer prevents scratches from furniture and pet claws."
    },
    {
      icon: <CheckSquare className="h-6 w-6" />,
      title: "Easy to Install",
      description: "Innovative click system allows for simple floating installation over most subfloors."
    },
    {
      icon: <ShieldIcon className="h-6 w-6" />,
      title: "Anti-Slippery",
      description: "Textured surface provides excellent traction and safety underfoot."
    },
    {
      icon: <Flame className="h-6 w-6" />,
      title: "Fire Resistant",
      description: "Meets rigorous fire safety standards for residential and commercial spaces."
    },
    {
      icon: <Volume2 className="h-6 w-6" />,
      title: "Sound Insulation",
      description: "Integrated underlayment reduces noise transmission between floors."
    },
    {
      icon: <Brush className="h-6 w-6" />,
      title: "Stain Resistant",
      description: "Sealed surface prevents absorption of wine, coffee, and other staining agents."
    },
    {
      icon: <ShieldIcon className="h-6 w-6" />,
      title: "Non-Volatile & Child-Safe",
      description: "Low VOC emissions ensure healthy indoor air quality for your family."
    },
  ];

  return (
    <section ref={elementRef} className="section-padding bg-muted/50 perspective-1000" id="features">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl font-serif mb-4 transform-gpu ${isVisible ? 'scroll-reveal-fade is-visible delay-100' : 'scroll-reveal-fade'}`}>
            Exceptional Features
          </h2>
          <p className={`text-muted-foreground transform-gpu ${isVisible ? 'scroll-reveal-fade is-visible delay-300' : 'scroll-reveal-fade'}`}>
            FLORA SPC flooring combines cutting-edge technology with timeless design to create a product that excels in performance and aesthetics.
          </p>
        </div>

        <div ref={containerRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transform-gpu ${isVisible ? 'product-grid delay-600' : 'opacity-0'}`}>
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className={`transform-gpu ${
                visibleItems.has(index) ? 'product-card-stagger' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150 + 800}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="product-hover luxury-glow"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
