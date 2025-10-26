import React from "react";
import { cn } from "../lib/utils"; // Adjust the path to your utils if needed

const buttonVariantClasses = {
  variant: {
    default: "bg-primary text-white hover:bg-primary/90",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-100",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 underline hover:underline",
    hero: "bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl font-semibold transition-all duration-300",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  },
};

export const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const variantClass = buttonVariantClasses.variant[variant] || "";
  const sizeClass = buttonVariantClasses.size[size] || "";
  const combinedClass = cn(`${variantClass} ${sizeClass} inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50`, className);

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};
