import { createContext, useContext, useState } from "react";

export const AuthContext=createContext();

export const useAuthContext=()=>{
    return useContext(AuthContext);
}

export const AuthContextProvider=({children}:any)=>{
    const [authUser,setAuthUser]=useState<any>(JSON.parse(localStorage.getItem('chat-user')) || null)
    const [selectedConversation,setSelectedConversation]=useState(null);
    const [message,setMessage]=useState([]);
    return(
        <AuthContext.Provider value={{authUser,setAuthUser,selectedConversation,setSelectedConversation,message,setMessage}}>
            {children}
        </AuthContext.Provider>
    )
}

