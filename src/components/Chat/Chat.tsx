import { FC, useState } from "react";
import { Input } from "antd";

import bot from "../../assets/bot-icon.svg";
import me from "../../assets/my-icon.svg";
import buttonIcon from "../../assets/submit.svg";

import s from "./Chat.module.scss";

interface IChat {}

const Chat: FC<IChat> = () => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      content: "123",
      type: "Income",
    },
  ]);

  return (
    <div>
      <div className={s.content}>
        {messages.map(({ id, content, type }) => (
          <div className={s.item} key={id}>
            <img src={bot} />
            <div key={id} className={s.message}>
              {content}
            </div>
          </div>
        ))}
      </div>
      <div className={s.form}>
        <Input
          className={s.input}
          placeholder="Start typing here..."
          suffix={
            <button className={s.submit}>
              <img src={buttonIcon} alt="" />
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Chat;
