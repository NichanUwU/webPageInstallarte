"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface Props {
  name: string;
  aspect?: "1/1" | "16/9";
}

export default function ImagePlaceholder({ name, aspect = "16/9" }: Props) {
  const aspectClass = aspect === "1/1" ? "aspect-square" : "aspect-video";
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectClass} bg-gradient-to-br from-[#1B1746] to-[#131033] flex flex-col items-center justify-center gap-2 overflow-hidden`}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-dots opacity-60" />
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-[#00F0FF]/5 blur-2xl" />
      </div>
      {!imageFailed ? (
        <Image
          src={`/images/${name}`}
          alt={name.replace(/\.[^.]+$/, "").replaceAll("-", " ")}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="z-10 object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <>
          <ImageIcon size={32} className="text-white/15 relative z-10" />
          <span className="text-xs text-white/15 relative z-10 max-w-[80%] text-center truncate">
            {name}
          </span>
        </>
      )}
    </div>
  );
}
