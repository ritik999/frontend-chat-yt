import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useLogOut=()=>{
    const [loading,setLoading]=useState(false);
    const{setAuthUser}:any=useAuthContext();

    const logout=async()=>{
        setLoading(true);
        try {
            const res=await fetch('/api/auth/logout',{
                method:"POST",
                headers:{'Content-Type':'application/json'}
            })

            const data=await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.removeItem('chat-user');
            setAuthUser(null);
        } catch (error:any) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    return {loading,logout};
}