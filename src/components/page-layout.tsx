
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { useEffect } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
  useEffect(() => {
    // Update page title
    document.title = title 
      ? `${title} | FLORA by Epsilon`
      : "FLORA by Epsilon | Premium SPC Flooring";
    
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
