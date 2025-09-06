"use client";

import { type RefObject, useEffect, useRef } from "react";

export const useDimensions = (ref: RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ height: 0, width: 0 });

  useEffect(() => {
    if (!ref.current) return;
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref.current]);

  return dimensions.current;
};
