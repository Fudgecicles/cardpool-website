import { useState, useEffect } from "react";

function getIsMobile() {
  const { innerWidth: width } = window;
  return width < 1000;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getIsMobile());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getIsMobile());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
