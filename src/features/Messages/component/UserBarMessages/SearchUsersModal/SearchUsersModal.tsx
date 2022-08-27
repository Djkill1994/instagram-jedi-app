import { Button } from "@mui/material";
import React, { VFC } from "react";
import { useModal } from "../../../../../common/hooks/useModal";
import { ReactComponent as NewMessage } from "../../../../../assets/svg/newMessage.svg";
import { AllUsersModal } from "../../../../../common/components/AllUsersModal";

export const SearchUsersModal: VFC = () => {
  const { isOpened, open, close } = useModal();

  return (
    <>
      <AllUsersModal isOpened={isOpened} onClose={close} />
      <Button onClick={() => open()}>
        <NewMessage />
      </Button>
    </>
  );
};
