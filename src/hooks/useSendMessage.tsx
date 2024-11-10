import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, message, setMessage }: any =
  useAuthContext();

  const sendMessage = async (inputMessage: any) => {
    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({message:inputMessage}),
      });
      const data = await res.json();

      
      if (data.error) {
        throw new Error(data.error);
      }
      setMessage([...message, data]);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

    return {sendMessage,loading}  
};
