"use client";

import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantStyles = {
    default: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
    ghost: "hover:bg-gray-100 text-gray-900"
  };
  
  const sizeStyles = {
    default: "px-4 py-2 text-base",
    sm: "px-3 py-1.5 text-sm",
    lg: "px-6 py-3 text-lg"
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (asChild) {
    return <>{React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          className: classes
        });
      }
      return child;
    })}</>;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
