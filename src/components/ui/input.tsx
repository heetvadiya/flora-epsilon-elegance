
import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    
    return (
      <div className="relative group">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground",
            "transition-all duration-300 ease-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "focus:scale-105 focus:shadow-lg focus:shadow-primary/20 focus:border-primary/50",
            "hover:shadow-md hover:border-primary/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "md:text-sm",
            "input-focus-glow",
            isFocused && "animate-input-glow",
            className
          )}
          ref={ref}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
        {isFocused && (
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-primary/10 opacity-50 pointer-events-none animate-pulse" />
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
