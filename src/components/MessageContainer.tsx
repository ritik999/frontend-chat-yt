import { Avatar, Button, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useAuthContext } from "../context/AuthContext";
import { useSendMessage } from "../hooks/useSendMessage";
import { useGetMessage } from "../hooks/useGetMessage";
import Messages from "./Messages";
import { useListenMessages } from "../hooks/useListenMessage";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation, message }: any =
    useAuthContext();

  const toLastMsg=useRef();
  const [msg, setMsg] = useState("");
  const { sendMessage, loading }: any = useSendMessage();

  const {loading:msgLoading,message:convMsg}:any=useGetMessage()
  // useListenMessages();
  
  const handleBtn = async () => {
    if (!msg) return;
    await sendMessage(msg);
    setMsg('');    
  };

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     toLastMsg.current?.scrollIntoView({behavior:'smooth'})
  //   },100)
  // },[message])

  return (
    <div className="h-full">
      {selectedConversation ? (
        <>
          <div className="bg-gray-500 p-2 text-left rounded-br-md rounded-tr-md mb-4">
            <h1 className="text-black">
              <span className="text-white">To: </span>Sam Edwards
            </h1>
          </div>
          <div ref={toLastMsg} className="h-[350px] overflow-y-scroll px-5">

            {
              convMsg?.map((e:any,i:any)=>{
                return <Messages info={e} key={i} />
              })
            }
            
          </div>
          <div className="w-[calc(100%-10px)] absolute bottom-3 flex">
            <TextInput
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              className="w-full relative"
              id="msg"
              value={msg}
              type="text"
              placeholder="Type message"
              required
            />
            <Button
              onClick={() => {
                handleBtn();
              }}
              className="border-0 rounded-none outline-0 bg-transparent absolute end-1 top-[50%] translate-y-[-50%] hover:bg-white focus:bg-none"
            >
              <IoIosSend className="text-black text-xl" />
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="h-full w-full flex flex-col items-center justify-center text-white">
            <h1 className="font-extrabold text-2xl">Welcome 👋 Ritik</h1>
            <p>Select a chat to start Messaging</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;
