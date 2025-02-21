import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        `flex min-h-[84px] w-full rounded-xl border border-white/15 
        bg-primary px-5 py-4 text-sm ring-offset-accent 
        placeholder:text-white/50 focus-visible:outline-none 
        focus-visible:ring-1 focus-visible:ring-accent 
        focus-visible:ring-offset-0 disabled:cursor-not-allowed 
        disabled:opacity-50`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
