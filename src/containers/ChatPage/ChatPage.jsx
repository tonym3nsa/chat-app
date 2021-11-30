import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Bubble } from "../../components/Bubble/Bubble";
import { Input } from "../../components/Input/Input";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { getMessages, postMessage } from "../../redux/actions/chat";
import { AUTHOR } from "../../constants/constants";
import "./chatPage.css";

export const ChatPage = () => {
  const { chats } = useSelector((state) => state.chatReducer);
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    dispatch(getMessages());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (chats) {
      setMessages(chats);
    }
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const onSubmit = (event) => {
    event.preventDefault();
    const message = event.target.chat.value;
    let cloneMessages = [...messages];
    const author = localStorage.getItem(AUTHOR);
    cloneMessages.push({ timestamp: new Date(), author, message });
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
              timestamp={msg.timestamp}
              author={msg.author}
            />
          ))
        ) : (
          <EmptyState />
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
                className="full-width"
              />
            </div>
            <div className="text-align-right">
              <Button type="submit">Send</Button>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
