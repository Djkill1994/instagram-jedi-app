import { Button } from "@mui/material";
import React, { VFC } from "react";
import { useModal } from "../../../../../common/hooks/useModal";
import { ReactComponent as NewMessage } from "../../../../../assets/svg/newMessage.svg";
import { ModalWindow } from "../../../../../common/components/ModalWindow";

export const SearchUsersModal: VFC = () => {
  const { isOpened, open, close } = useModal();

  return (
    <>
      <ModalWindow isOpened={isOpened} close={close} />
      <Button onClick={() => open()}>
        <NewMessage />
      </Button>
    </>
  );
};
