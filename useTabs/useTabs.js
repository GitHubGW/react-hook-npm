import { useState } from "react";

const useTabs = (initialIndex, sections) => {

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!sections || !Array.isArray(sections)) {
    return;
  }

  return { currentSection: sections[currentIndex], changeSection: setCurrentIndex };
};