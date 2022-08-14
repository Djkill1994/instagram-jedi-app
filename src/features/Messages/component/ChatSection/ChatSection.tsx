import React, { VFC } from "react";
import { Chat } from "./Chat";
import { InputBar } from "./InputBar";
import { useChat } from "../../hooks/useChat";

export const ChatSection: VFC = () => {
  const { sendMessage, messages } = useChat();

  return (
    <>
      <Chat messages={messages} />
      <InputBar sendMessage={sendMessage} />
    </>
  );
};
