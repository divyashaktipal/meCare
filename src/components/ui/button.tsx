import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none"
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-hover shadow-sm",
      secondary: "bg-secondary text-foreground hover:bg-secondary/90 shadow-sm",
      outline: "border border-border bg-transparent hover:bg-muted/10 text-foreground",
      ghost: "bg-transparent hover:bg-muted/10 text-foreground",
    }
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 py-2 text-base",
      lg: "h-14 px-8 py-3 text-lg",
    }
    
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <button ref={ref} className={classes} {...props} />
    )
  }
)
Button.displayName = "Button"
