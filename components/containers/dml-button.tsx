"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const secondaryButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#a3f443] text-primary-foreground hover:bg-[#92e032]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "default",
    },
  }
);

interface SecondaryButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof secondaryButtonVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}


const SecondaryButton = ({
  children,
  className,
  icon,
  iconPosition = "right",
  variant,
  size,
  ...props
}: SecondaryButtonProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  
 const iconWrapper = icon && (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out w-9 h-9 flex items-center justify-center rounded-[13px]",
        isHovered ? "translate-x-3 rotate-45" : "",
        iconPosition === "left" ? "mr-2 -translate-x-1" : "-ml-1",
        variant === "secondary" ? "bg-secondary text-secondary-foreground" : "",
        variant === "default" ? "bg-[#a3f443] text-primary-foreground" : "",
        variant === "destructive" ? "bg-destructive text-destructive-foreground" : "",
        variant === "outline" ? "bg-background border border-input" : ""
      )}
    >
      <div
        className={cn("transition-transform duration-300", isHovered ? "-rotate-45" : "rotate-0")}
      >
        {icon}
      </div>
    </div>
  );


  return (
    <>
    <div className="bg-[#a3f443] h-4 x-4 flex items-center rounded-4xl hover:bg-[#92e032]">


    <a
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("inline-flex group relative", className)}
      {...props}
    >

         {iconPosition === "left" && iconWrapper}

      <div
        className={cn(
          secondaryButtonVariants({ variant, size }),
          "pr-2 pl-4 rounded-[13px] overflow-hidden bg"
        )}
      >
        <span className="inline-flex items-center gap-2">
          {children}
        </span>
      </div>
       
       {iconPosition === "right" && iconWrapper}

    </a>
        </div>


        
    </>
  );
};



export { SecondaryButton, secondaryButtonVariants };
