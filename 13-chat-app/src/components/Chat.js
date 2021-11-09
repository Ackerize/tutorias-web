import React, { useState, useEffect } from "react";
import InputMessage from "./InputMessage";
import MessageReceive from "./Messages/MessageReceive";
import MessageSent from "./Messages/MessageSent";
import { app as firebase } from '../firebase/firebase'

const Chat = ({ user }) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const chat = firebase.database().ref('general')
        chat.on("value", (snapshot)=>  {
            const data = snapshot.val();
            if(data){
                const dataArray = Object.entries(data).map((element) => ({
                    ...element[1],
                    idMessage: element[0]
                }));
                console.log(dataArray);
                setMessages(dataArray);
            }
        })
    }, []);

    const sendMessage = (message) => {
        const newMessage = {
            uid: user.uid,
            text: message,
            time: Date.now(),
            displayName: user.displayName,
            photoURL: user.photoURL || false
        }

        firebase.database().ref('general').push(newMessage)
    }

  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-12 gap-y-2">
                {
                    messages.map((message) => (
                        message.uid === user.uid ? (
                            <MessageSent key={message.idMessage} message={message} />
                        ) : (
                            <MessageReceive key={message.idMessage} message={message} />
                        )
                    ))
                }
            </div>
          </div>
        </div>
        <InputMessage onSend={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
