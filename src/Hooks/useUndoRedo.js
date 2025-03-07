import { useState } from "react";

const useUndoRedo = (initialState) => {
  const [history, setHistory] = useState([initialState]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const setState = (newState) => {
    const updatedHistory = history.slice(0, currentIndex + 1);
    setHistory([...updatedHistory, newState]);
    setCurrentIndex(updatedHistory.length);
  };

  const undo = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const redo = () => {
    if (currentIndex < history.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return [history[currentIndex], setState, undo, redo];
};

export default useUndoRedo;
