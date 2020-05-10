import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
      const updateWidthAndHeight = () => {
          setWidth(window.innerWidth);}

          useEffect(() => {
              window.addEventListener("resize", updateWidthAndHeight);
              return () => window.removeEventListener("resize", updateWidthAndHeight);
          });
          return width
      }
      
export { useWindowSize as default }