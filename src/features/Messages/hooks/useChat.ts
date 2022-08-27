import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { useBeforeUnload } from "./useBeforeUnload";
import { useSelector } from "react-redux";
import { loginSelector } from "../../Login/slices/login.slice";
import { activeChatUserSelector } from "../slices/message.slice";
import { CHAT_URL } from "../../../config";

interface IUseChatReturn {
  messages: IMessage[];
  sendMessage: (message: string) => void;
}

export interface IMessage {
  messageText: string;
  messageId: string;
  currentUser: boolean;
  userId: string;
}

export const useChat = (): IUseChatReturn => {
  const recipient = useSelector(activeChatUserSelector);
  const sender = useSelector(loginSelector);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const socketRef = useRef(null as any);

  useEffect(() => {
    socketRef.current = io(CHAT_URL, {
      query: { roomId: recipient?.roomId },
    });
    socketRef.current.emit("user:add", {
      username: sender.authUser?.userName,
      userId: sender.authUser?.id,
    });
    socketRef.current.emit("user:add", {
      username: recipient?.userName,
      userId: recipient?.id,
    });
    socketRef.current.emit("message:get");
    socketRef.current.on("messages", (messages: IMessage[]) => {
      const newMessages = messages.map((msg) =>
        msg.userId === sender.authUser?.id ? { ...msg, currentUser: true } : msg
      );
      setMessages(newMessages);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [
    recipient?.id,
    recipient?.roomId,
    recipient?.userName,
    sender.authUser?.id,
    sender.authUser?.userName,
  ]);

  const sendMessage = (messageText: string) => {
    socketRef.current.emit("message:add", {
      userId: sender.authUser?.id,
      username: sender.authUser?.userName,
      messageText,
    });
  };

  useBeforeUnload(() => {
    socketRef.current.emit("user:leave", sender.authUser?.id);
    socketRef.current.emit("user:leave", recipient?.id);
  });

  return { messages, sendMessage };
};
