import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

export const useSignup=()=>{
    const [loading,setLoading]=useState(false);
    const {setAuthUser}:any=useAuthContext();

    const signup=async({name,email,password,confirmPass,gender}:any)=>{
        
        const success=handleInputError({name,email,password,confirmPass,gender});
        
        
        if(!success) return;

        setLoading(true);
        try {
            
            const res=await fetch('/api/auth/signup',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({name,email,password,confirmPass,gender})
            })

            const data=await res.json();
            
            if(data.error){
                throw new Error(data.error);
            }

            // console.log(data);
            localStorage.setItem('chat-user',JSON.stringify(data));
            setAuthUser(data)
            
        } catch (error:any) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    return {loading,signup};
}


const handleInputError=({name,email,password,confirmPass,gender}:any)=>{
    if(!name || !email || !password || !confirmPass || !gender){
        toast.error('please fill all fields');
        return false;
    }

    if(password != confirmPass){
        toast.error('password do not match');
        return false;
    }

    if(password.length<6){
        toast.error('password must be at least 6 character');
        return false;
    }
    return true;
}
