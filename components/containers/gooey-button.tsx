"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none",
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
        default: "h-10 px-6 py-4",
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

const CustomArrowIcon = () => (
  <svg className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="currentColor" d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
  </svg>
);

interface GooeyButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
}

const GooeyButton = React.forwardRef<HTMLAnchorElement, GooeyButtonProps>(
  ({ children, className, icon = <CustomArrowIcon />, variant = "secondary", size, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const buttonClasses = buttonVariants({ variant, size });

    const iconCircleClasses = cn(
      "w-9 h-9 flex-shrink-0 overflow-hidden flex items-center justify-center -ml-1 rounded-full transform transition-transform duration-300",
      isHovered && "translate-x-2"
    );

    const iconWrapperClasses = cn(
      "w-9 h-9 absolute top-0 right-0 flex items-center justify-center z-20 transition-transform transform duration-300",
      isHovered && "translate-x-2"
    );

    const iconColorMap: Record<string, string> = {
      default: "text-black",
      destructive: "text-white",
      secondary: "text-white",
      outline: "text-white",
      ghost: "text-white",
      link: "text-primary",
    };

    const circleBgMap: Record<string, string> = {
      default: "bg-[#a3f443]",
      destructive: "bg-destructive",
      secondary: "bg-secondary",
      outline: "bg-accent",
      ghost: "bg-accent",
      link: "bg-transparent",
    };

    return (
      <div
        className={cn("relative group inline-flex items-center justify-center", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg width="0" height="0" className="absolute hidden">
          <defs>
            <filter id="buttonFilter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="buttonFilter"
              />
              <feComposite in="SourceGraphic" in2="buttonFilter" operator="atop" />
              <feBlend in="SourceGraphic" in2="buttonFilter" />
            </filter>
          </defs>
        </svg>

        <a
          ref={ref}
          href="#"
          className="inline-flex relative group outline-none focus:outline-none"
          style={{ filter: isHovered ? "none" : "url(#buttonFilter)" }}
          {...props}
        >
          {/* Button body */}
          <div className={cn(buttonClasses)}>
            <div className="relative inline-flex top-px flex-shrink-0 items-center justify-center">
              <div>{children}</div>
            </div>
          </div>

          {/* Gooey circle */}
          <div
            className={cn(
              "w-9 h-9 cursor-pointer",
              circleBgMap[variant ?? "default" ],
              iconCircleClasses
            )}
          />
        </a>

        {/* Icon with gooey */}
        <div
          className={cn(iconWrapperClasses)}
          style={{ filter: isHovered ? "none" : "url(#buttonFilter)" }}
        >
          <div
            className={cn(
              "cursor-pointer transition-transform duration-300",
              isHovered && "rotate-45",
              iconColorMap[variant ?? "default"]
            )}
          >
            {icon}
          </div>
        </div>
      </div>
    );
  }
);

GooeyButton.displayName = "GooeyButton";
export default GooeyButton;
