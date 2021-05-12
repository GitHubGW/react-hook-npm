import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current: title } = element;
      title.style.transition = `opacity ease ${duration}s ${delay}s`;
      title.style.opacity = 1;
    }
  }, []);

  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};
