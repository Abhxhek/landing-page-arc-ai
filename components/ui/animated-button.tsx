"use client"

import * as React from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons"

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
    children: React.ReactNode
    icon?: LucideIcon | IconType | React.ReactElement
    iconPosition?: "left" | "right"
    align?: "start" | "center" | "end"
    onClick?: () => void
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    ({ children, icon, iconPosition = "left", align = "center", className, onClick, ...props }, ref) => {
        // Render icon based on type
        const renderIcon = () => {
            if (!icon) return null

            // If it's a React element, render it directly
            if (React.isValidElement(icon)) {
                return <span className="shrink-0">{icon}</span>
            }

            // If it's a Lucide or React Icon component
            const IconComponent = icon as LucideIcon | IconType
            return <IconComponent className="shrink-0" />
        }

        const iconElement = renderIcon()
        const hasIcon = !!icon

        return (
            <Button
                ref={ref}
                className={cn("group relative overflow-hidden", className)}
                {...props}
                onClick={onClick}
            >
                {/* Static Icon - Left */}
                {iconPosition === "left" && iconElement && (
                    <span className="shrink-0 relative z-10">
                        {iconElement}
                    </span>
                )}

                {/* Text Container with Animation */}
                <div className="relative flex-1 overflow-hidden">
                    {/* 1. Invisible copy: Keeps the button width correct */}
                    <span className="invisible">
                        {children}
                    </span>

                    {/* 2. Default Text: Absolute positioned, slides up completely */}
                    <span className={cn(
                        "absolute inset-0 flex items-center transition-transform duration-300 group-hover:-translate-y-full",
                        align === "start" && "justify-start",
                        align === "center" && "justify-center",
                        align === "end" && "justify-end"
                    )}>
                        {children}
                    </span>

                    {/* 3. Hover Text: Absolute positioned, slides in from bottom */}
                    <span className={cn(
                        "absolute inset-0 flex items-center translate-y-full transition-transform duration-300 group-hover:translate-y-0",
                        align === "start" && "justify-start",
                        align === "center" && "justify-center",
                        align === "end" && "justify-end"
                    )}>
                        {children}
                    </span>
                </div>

                {/* Static Icon - Right */}
                {iconPosition === "right" && iconElement && (
                    <span className="shrink-0 relative z-10">
                        {iconElement}
                    </span>
                )}
            </Button>
        )
    }
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }

