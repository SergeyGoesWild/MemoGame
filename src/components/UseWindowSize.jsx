import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Call the handleResize function once to set initial size
    handleResize();

    // Cleanup: remove the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return windowSize;
}

export default useWindowSize;
