'use client'
import { useState } from "react";

export function Tooltip({ message, children }: any) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      {isHovering && (
        <div className="absolute z-10 w-max p-2 text-sm text-white bg-zinc-900 rounded-md pointer-events-none ">
          {message}
        </div>
      )}
    </div>
  );
}
