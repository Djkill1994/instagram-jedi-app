import { useState } from "react";

interface IProps {
  isOpened: boolean;
  open: () => void;
  close: () => void;
}

export const useModal = (): IProps => {
  const [isOpened, setIsOpened] = useState(false);
  return {
    isOpened,
    open: () => setIsOpened(true),
    close: () => setIsOpened(false),
  };
};
