"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src" | "onError"> & {
  src: string;
  /** Fallback shown if `src` fails to load. */
  fallbackSrc: string;
};

/** next/image wrapper that swaps to a fallback if the primary src fails. */
export default function SmartImage({ src, fallbackSrc, alt, ...rest }: Props) {
  const [current, setCurrent] = useState(src);
  return (
    <Image
      {...rest}
      src={current}
      alt={alt}
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
