"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface AnimatedTextProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The text to animate
   */
  text: string;
  /**
   * Size variant for the text
   * @default "default"
   */
  size?: "sm" | "default" | "lg" | "xl" | "2xl" | "custom";
  /**
   * Gradient classes for the text
   * @default "from-amber-100 via-blue-100 to-blue-800"
   */
  gradient?: string;
  /**
   * Whether to enable hover effects
   * @default true
   */
  enableHover?: boolean;
  /**
   * Custom hover scale value
   * @default "scale-110"
   */
  hoverScale?: string;
  /**
   * HTML tag to render
   * @default "h1"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const sizeClasses = {
  sm: "text-2xl md:text-3xl lg:text-4xl",
  default: "text-4xl md:text-5xl lg:text-6xl",
  lg: "text-5xl md:text-6xl lg:text-7xl",
  xl: "text-6xl md:text-7xl lg:text-8xl",
  "2xl": "text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
  custom: "",
};

export function AnimatedText({
  text,
  size = "default",
  gradient = "from-amber-100 via-blue-100 to-blue-800",
  enableHover = true,
  hoverScale = "scale-110",
  as: Component = "h1",
  className,
  ...props
}: AnimatedTextProps) {
  const sizeClass = sizeClasses[size];
  const gradientClass = `text-transparent bg-clip-text bg-linear-to-b ${gradient}`;

  return (
    <Component
      className={cn(
        sizeClass,
        "font-bold leading-tight",
        gradientClass,
        "text-shadow-2xs",
        className
      )}
      {...props}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={cn(
            "inline-block",
            enableHover && [
              "cursor-pointer transition-transform ease-in-out",
              `hover:${hoverScale}`,
              "hover:font-extrabold duration-400",
              gradientClass,
            ],
            !enableHover && gradientClass
          )}
          style={{ willChange: "transform" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Component>
  );
}

