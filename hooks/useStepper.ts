import { useState } from "react";

function useStepper<T>(stepItems: T[], index: number = 0) {
  const [currentIdx, setCurrentIdx] = useState(index);

  const currentItem = stepItems[currentIdx];

  const isFirstStep = currentIdx === 0;
  const isLastStep = currentIdx === stepItems.length - 1;

  function back() {
    if (isFirstStep) return;
    setCurrentIdx((idx) => idx - 1);
  }

  function next() {
    if (isLastStep) return;
    setCurrentIdx((idx) => idx + 1);
  }

  return {
    currentItem,
    currentIdx,
    back,
    next,
    isFirstStep,
    isLastStep,
  };
}

export default useStepper;
