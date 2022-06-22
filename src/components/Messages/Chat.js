import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../../firebase";
import SendMessages from "./SendMessages";
import "./Chat.css";
import { Scrollbars } from "react-custom-scrollbars-2";

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <div className="page">
        <div>
          <SendMessages scroll={scroll} />
        </div>
        <Scrollbars style={{height:"500px", width:"1160px", marginLeft:"20px" }}>
        <div className="msgs">
          {messages.map(({ id, text, photoURL, uid }) => (
            <div>
              <div
                key={id}
                className={`msg ${
                  uid === auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img className="Chat_img" src={photoURL} alt="" />
                <p className="Chat_p">{text}</p>
              </div>
            </div>
          ))}
        </div>
        </Scrollbars>
      </div>
    </div>
  );
}

export default Chat;
