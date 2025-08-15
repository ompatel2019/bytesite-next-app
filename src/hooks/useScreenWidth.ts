'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks the browser window width and returns the numeric value.
 * Use this in any component that needs to adapt to screen size.
 */
export default function useScreenWidth() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    
    // Set initial width
    setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}
