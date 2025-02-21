import React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`w-full bg-primary rounded-full border 
        border-white/20 font-light placehorder:text-white/70
        px-5 py-3 text-sm shadow-sm focus:outline-none 
        focus:ring-1 focus:ring-accent ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
