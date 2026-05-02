"use client";

import { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";

interface SplineSceneProps {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function SplineScene({
  scene,
  className,
  fallback,
}: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        fallback || (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 animate-pulse" />
          </div>
        )
      }
    >
      <div className={cn("w-full h-full", className)}>
        <Spline scene={scene} />
      </div>
    </Suspense>
  );
}
