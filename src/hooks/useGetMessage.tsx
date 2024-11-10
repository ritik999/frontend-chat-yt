import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useGetMessage=()=>{
    const [loading,setLoading]=useState(false);
    const {selectedConversation,message,setMessage}:any=useAuthContext()

    useEffect(()=>{
        const getMessage=async()=>{
            setLoading(true);
            try {
                const res=await fetch(`/api/message/${selectedConversation._id}`);
                const data=await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setMessage(data);
            } catch (error:any) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }

        if(selectedConversation?._id) getMessage()
    },[selectedConversation?._id])

    return {loading,message}
}