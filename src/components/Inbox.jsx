import React from "react";
import style from "./Inbox.module.css";
import Image1 from "./p1.jpg";
import Image2 from "./p2.jpg";
import Image3 from "./p3.jpg";
import Image4 from "./p4.jpg";

const messagesData = [
  {
    id: 1,
    name: "Alice Johnson",
    profileImage: Image1,
    lastMessage: "Hey, how are you?",
    time: "2:00 PM",
  },
  {
    id: 2,
    name: "Bob Smith",
    profileImage: Image2,
    lastMessage: "Let's catch up soon!",
    time: "1:45 PM",
  },
  {
    id: 3,
    name: "Charlie Brown",
    profileImage: Image3,
    lastMessage: "Got the project files?",
    time: "12:30 PM",
  },
  {
    id: 4,
    name: "Daisy Ridley",
    profileImage: Image4,
    lastMessage: "Happy Birthday!",
    time: "11:15 AM",
  },
];

const Inbox = () => {
  return (
    <div className={style.inboxContainer}>
      <h2 className={style.heading}>Messages</h2>
      <ul className={style.messageList}>
        {messagesData.map((message) => (
          <li key={message.id} className={style.messageItem}>
            <img
              src={message.profileImage}
              alt={`${message.name}'s profile`}
              className={style.profileImage}
            />
            <div className={style.messageContent}>
              <div className={style.messageHeader}>
                <span className={style.messageName}>{message.name}</span>
                <span className={style.messageTime}>{message.time}</span>
              </div>
              <p className={style.lastMessage}>{message.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
