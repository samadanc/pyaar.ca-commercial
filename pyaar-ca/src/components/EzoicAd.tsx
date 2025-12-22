// src/components/EzoicAd.tsx
"use client";

import { useEffect } from "react";

interface EzoicAdProps {
  placementId: number;
  className?: string;
}

export default function EzoicAd({ placementId, className = "" }: EzoicAdProps) {
  useEffect(() => {
    // Ensure ezstandalone is available
    if (typeof window !== "undefined" && window.ezstandalone) {
      window.ezstandalone.cmd = window.ezstandalone.cmd || [];
      window.ezstandalone.cmd.push(() => {
        window.ezstandalone.showAds(placementId);
      });
    }
  }, [placementId]);

  return <div id={`ezoic-pub-ad-placeholder-${placementId}`} className={className} />;
}

// TypeScript declaration for ezstandalone
declare global {
  interface Window {
    ezstandalone: {
      cmd: Array<() => void>;
      showAds: (...ids: number[]) => void;
    };
  }
}