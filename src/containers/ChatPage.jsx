import React, { useState } from "react";
import { TextEditor } from "../components/TextEditor/TextEditor";
import { Button } from "../components/Button/Button";
import "./chatPage.css";
import { Bubble } from "../components/Bubble/Bubble";
import { getCurrentTimeStamp, getFormattedTime } from "../utils/timestamp-util";

export const ChatPage = () => {
  const [message, setMessage] = useState(null);
  const [messages, setMessages] = useState([]);

  const enter = () => {
    let cloneMessages = [...messages];
    const userName = localStorage.getItem('chat_user');
    cloneMessages.push({ timeStamp: new Date(), userName, message });
    setMessages(cloneMessages);
  };
  return (
    <div>
      <div className="chat-area">
        {messages.length > 0 ? (
          messages?.map((msg) => (
            <Bubble
              message={msg.message}
              timeStamp={msg.timeStamp}
              userName={msg.userName}
            />
          ))
        ) : (
          <h1>so much darkness</h1>
        )}
      </div>
      <div className="messaging_section grid">
        <div>
          <TextEditor
            className="full-width"
            handleChange={(event) => setMessage(event)}
            message={message}
          />
        </div>
        <div>
          <Button handleClick={enter}>Send</Button>
        </div>
      </div>
    </div>
  );
};
