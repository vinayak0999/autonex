import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all duration-200",
  {
    variants: {
      variant: {
        // Primary: blue gradient pill
        default:
          "bg-primary text-primary-foreground border border-primary-border shadow-md hover:shadow-lg hover:brightness-110",
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive-border",
        // Secondary: transparent outlined pill
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground border border-secondary-border hover:brightness-110",
        tertiary: "bg-tertiary text-tertiary-foreground border border-tertiary hover:brightness-110",
        // Add a transparent border so that when someone toggles a border on later, it doesn't shift layout/size.
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      // Heights are set as "min" heights, because sometimes Ai will place large amount of content
      // inside buttons. With a min-height they will look appropriate with small amounts of content,
      // but will expand to fit large amounts of content.
      size: {
        default: "min-h-10 px-5",
        sm: "min-h-9 px-4 text-xs",
        lg: "min-h-11 px-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
