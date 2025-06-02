
import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactData = [
    { method: "Phone", value: "+1 (555) 123-4567", type: "Primary" },
    { method: "Email", value: "info@florabyepsilon.com", type: "Business" },
    { method: "Address", value: "123 Flooring Ave, Design City, DC 12345", type: "Showroom" },
    { method: "Hours", value: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM", type: "Business" },
  ];

  return (
    <PageLayout title="Contact Us">
      <div className="pt-24 section-padding">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-serif mb-6 opacity-0 animate-fade-in text-center">
            Contact FLORA by Epsilon
          </h1>
          <p className="text-muted-foreground opacity-0 animate-fade-in text-center mb-12" style={{ animationDelay: "100ms" }}>
            Get in touch with our flooring experts to transform your space
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif mb-6 opacity-0 animate-fade-in-right" style={{ animationDelay: "200ms" }}>
                Send us a Message
              </h2>
              
              <div className={`space-y-4 ${isVisible ? 'input-slide-in animate-in' : 'input-slide-in'}`} style={{ animationDelay: "300ms" }}>
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className={`space-y-4 ${isVisible ? 'input-slide-in animate-in' : 'input-slide-in'}`} style={{ animationDelay: "400ms" }}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className={`space-y-4 ${isVisible ? 'input-slide-in animate-in' : 'input-slide-in'}`} style={{ animationDelay: "500ms" }}>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={`space-y-4 ${isVisible ? 'input-slide-in animate-in' : 'input-slide-in'}`} style={{ animationDelay: "600ms" }}>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your flooring project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                  />
                </div>
              </div>

              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "700ms" }}>
                <Button 
                  size="lg" 
                  className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  Send Message
                </Button>
              </div>
            </div>

            {/* Contact Information Table */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif mb-6 opacity-0 animate-fade-in-left" style={{ animationDelay: "200ms" }}>
                Get in Touch
              </h2>
              
              <div className="opacity-0 animate-scale-up" style={{ animationDelay: "400ms" }}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Contact Method</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactData.map((contact, index) => (
                      <TableRow 
                        key={contact.method}
                        style={{ animationDelay: `${500 + index * 100}ms` }}
                      >
                        <TableCell className="font-medium">{contact.method}</TableCell>
                        <TableCell>{contact.value}</TableCell>
                        <TableCell>
                          <span className="inline-flex px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                            {contact.type}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Additional animated elements */}
              <div className="mt-8 space-y-4">
                <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: "800ms" }}>
                  <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <h3 className="font-semibold mb-2">Visit Our Showroom</h3>
                    <p className="text-sm text-muted-foreground">
                      Experience FLORA SPC flooring in person at our state-of-the-art showroom.
                    </p>
                  </div>
                </div>
                
                <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: "900ms" }}>
                  <div className="p-6 rounded-lg bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <h3 className="font-semibold mb-2">Free Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Schedule a complimentary consultation with our flooring specialists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
