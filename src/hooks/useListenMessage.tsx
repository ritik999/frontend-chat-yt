import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import { useGetConversations } from "./useGetConversations";

export const useListenMessages=()=>{
    const {socket}:any=useSocketContext();
    console.log(socket);
    
    const {message,setMessage}:any=useGetConversations();
    useEffect(()=>{
        socket?.on('newMessage',(newMessage:any)=>{
            setMessage([...message,newMessage]);
        })
        return ()=> socket?.off('newMessage');
    },[socket,message]);
}