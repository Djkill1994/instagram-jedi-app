import { Low, JSONFile } from "lowdb";
import { write } from "fs";

const adapter = new JSONFile("db/messages.json");
const db = new Low(adapter);

await db.read();
await write((db.data = { messages: [] }));

export const registerMessageHandlers = async (io, socket) => {
  await db.write(
    db.data.messages.push({
      messages: [
        {
          messageId: "1",
          userId: "1",
          senderName: "Bob",
          messageText: "What are you doing here?",
          createdAt: "2021-01-14",
        },
        {
          messageId: "2",
          userId: "2",
          senderName: "Alice",
          messageText: "Go back to work!",
          createdAt: "2021-02-15",
        },
      ],
    })
  );
  // обрабатываем запрос на получение сообщений
  const getMessages = () => {
    // получаем сообщения из БД
    const messages = db.get("messages").value();
    // передаем сообщения пользователям, находящимся в комнате
    // синонимы - распространение, вещание, публикация
    io.in(socket.roomId).emit("messages", messages);
  };

  // обрабатываем добавление сообщения
  // функция принимает объект сообщения
  const addMessage = (message) => {
    db.get("messages")
      .push({
        // генерируем идентификатор с помощью nanoid, 8 - длина id
        createdAt: new Date(),
        ...message,
      })
      .write();

    // выполняем запрос на получение сообщений
    getMessages();
  };

  // обрабатываем удаление сообщение
  // функция принимает id сообщения
  const removeMessage = (messageId) => {
    db.get("messages").remove({ messageId }).write();

    getMessages();
  };

  // регистрируем обработчики
  socket.on("message:get", getMessages);
  socket.on("message:add", addMessage);
  socket.on("message:remove", removeMessage);
};
