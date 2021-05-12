import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  const handleMouseLeave = (event) => {
    if (event.clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (typeof onBefore !== "function") {
    return;
  }
};
