import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border bg-[#27272c] shadow-md border border-none 
      ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}