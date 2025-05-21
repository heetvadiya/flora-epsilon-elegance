
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeSwitcher } from "./components/theme-switcher";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import WhySPC from "./pages/WhySPC";
import Collection from "./pages/Collection";
import Technical from "./pages/Technical";
import Packing from "./pages/Packing";
import Blog from "./pages/Blog";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Inquire from "./pages/Inquire";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ThemeSwitcher />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-spc" element={<WhySPC />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/packing" element={<Packing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inquire" element={<Inquire />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
