
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9"></div>;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 z-50 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-flora-charcoal transition-all" />
      ) : (
        <Sun className="h-5 w-5 text-flora-gold transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
