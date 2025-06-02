
import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    
    return (
      <div className="relative group">
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground",
            "transition-all duration-300 ease-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "focus:scale-102 focus:shadow-xl focus:shadow-primary/10 focus:border-primary/50",
            "hover:shadow-md hover:border-primary/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "textarea-expand",
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
          <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none animate-shimmer" 
               style={{
                 background: 'linear-gradient(90deg, transparent, rgba(212, 185, 140, 0.2), transparent)',
                 backgroundSize: '200% 100%',
               }} />
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
