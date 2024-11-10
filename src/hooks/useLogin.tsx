import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser}:any = useAuthContext();

  const login = async ({ email, password }:any) => {
    const success = handleInputError({ email, password });

    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading,login}
};

const handleInputError = ({ email, password }:any) => {
  if (!email || !password) {
    toast.error('please enter all the fields')
    return false;
  }

  if (password.length < 6) {
    toast.error('password must be of at least 6 character');
    return false;
  }

  return true;
};
