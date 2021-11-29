import React, { useState, useEffect, useRef } from "react";
import { TextEditor } from "../components/TextEditor/TextEditor";
import { Button } from "../components/Button/Button";
import "./chatPage.css";
import { Bubble } from "../components/Bubble/Bubble";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, postMessage } from "../redux/actions/chat";
import { Input } from "../components/Input/Input";

export const ChatPage = () => {
  const [message, setMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state.chatReducer);
  const messagesEndRef = useRef(null);
  const [pagination, setPagination] = useState(10);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);

    dispatch(getMessages(pagination));
  }, []);

  useEffect(() => {
    console.log('new chat', new Date());
    if (chats) {
      setMessages(chats);
    }
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onSubmit = (event) => {
    event.preventDefault();
    const message = event.target.chat.value;
    let cloneMessages = [...messages];
    const author = localStorage.getItem("chat_user");
    cloneMessages.push({ timeStamp: new Date(), author, message });
    setMessages(cloneMessages);
    dispatch(postMessage({ timeStamp: new Date(), author, message }));
    event.target.reset();
  };

  return (
    <React.Fragment>
      <div className="chat-area">
        {messages.length > 0 ? (
          messages?.map((msg) => (
            <Bubble
              key={msg.timestamp}
              message={msg.message}
              timeStamp={msg.timestamp}
              author={msg.author}
            />
          ))
        ) : (
          <h1>so much darkness</h1>
        )}
      </div>
      <div ref={messagesEndRef} />
      <form onSubmit={onSubmit}>
        <div className="messaging-section ">
          <div className="grid">
            <div>
              <Input
                name="chat"
                placeholder="Enter text to send"
                message={message}
                className="full-width"
              />
            </div>
            <div>
              <Button type="submit">Send</Button>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
