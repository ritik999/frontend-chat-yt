import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [loginData,setLoginData]=useState([]);

  const {loading,login}:any=useLogin();
  const loginBtnHandle=async()=>{
      await login(loginData);
  }

  const handleOnChange=(name:string,input:string)=>{
    setLoginData({
      ...loginData,
      [name]:input
    })
  }

  return (
    <div className="p-5 min-w-96 bg-gray-600 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
      <h1 className="text-2xl text-white font-semibold">Login
        <span className="pl-1 text-sky-300">ChatApp</span>
      </h1>

      <form className="flex flex-col  gap-4 mt-6">
        <div>
          <div className="mb-2 block text-start">
            <Label className="text-white"  htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
            onChange={(e)=>handleOnChange('email',e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block text-start">
            <Label className="text-white" htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" required shadow onChange={(e)=>handleOnChange('password',e.target.value)} />
        </div>
       
        <div className="flex items-center gap-2">
          <Label className="flex text-white" htmlFor="agree">
            <Link
              to={'/signup'}
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Don't have an account?
            </Link>
            
          </Label>
        </div>
        <Button onClick={()=>loginBtnHandle()}>login</Button>
      </form>
    </div>
  );
};

export default Login;
