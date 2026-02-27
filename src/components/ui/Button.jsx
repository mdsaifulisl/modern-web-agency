"use client";
import Link from "next/link";

export default function Button({
  children,
  onClick,
  href,
  type = "button",
  variant = "primary", 
  animated = false,    
  className = "",
}) {
  const getVariantClass = () => {
    switch (variant) {
      case "cta": return "btn-cta";
      case "link": return "custom-link";
      case "outline": return "btn-outline-animated";
      default: return "btn-primary-custom"; 
    }
  };

  const animationClass = animated ? "btn-animated" : "";
  const baseClass = variant === "link" ? "" : "btn";
  
  const combinedClasses = `${baseClass} ${getVariantClass()} ${animationClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}