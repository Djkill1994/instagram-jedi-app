import { useState } from "react";

interface IUseModalReturn {
  isOpened: boolean;
  open: () => void;
  close: () => void;
}

export const useModal = (): IUseModalReturn => {
  const [isOpened, setIsOpened] = useState(false);
  return {
    isOpened,
    open: () => setIsOpened(true),
    close: () => setIsOpened(false),
  };
};
