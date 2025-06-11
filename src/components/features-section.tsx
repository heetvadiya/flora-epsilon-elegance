
import { FeatureCard } from "./feature-card";
import { Droplet, Shield, X, CheckSquare, Volume2, Flame, Shield as ShieldIcon, Brush } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted/50 perspective-1000" id="features">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl font-serif mb-4 ${isVisible ? 'layer-center' : 'opacity-0'}`}>
            Exceptional Features
          </h2>
          <p className={`text-muted-foreground ${isVisible ? 'layer-center' : 'opacity-0'}`} style={{ animationDelay: "300ms" }}>
            FLORA SPC flooring combines cutting-edge technology with timeless design to create a product that excels in performance and aesthetics.
          </p>
        </div>

        <div className={`motion-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'animate-in' : ''}`}>
          {features.map((feature, index) => (
            <div key={feature.title} className="motion-grid-item" style={{ animationDelay: `${index * 150 + 600}ms` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="pulse-glow dynamic-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
