import { useState } from "react";

export const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);
  return {
    isOpened,
    open: () => setIsOpened(true),
    close: () => setIsOpened(false),
  };
};
