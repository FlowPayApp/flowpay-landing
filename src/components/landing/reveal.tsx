"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Retraso en ms (stagger) */
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true });

  return (
    <div
      ref={ref}
      className={cn("fp-reveal", inView && "fp-reveal--in", className)}
      style={{ "--fp-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
