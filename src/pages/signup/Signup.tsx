import React, { useState } from "react";
import { Button, Checkbox, Label, Radio, TextInput } from "flowbite-react";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {

  const [formData,setFormData]=useState([]);
  const {loading,signup}=useSignup()

  const onChangeHandler=(name:string,data:string)=>{
      setFormData({
        ...formData,
        [name]:data
      })
  }

  const handleSignup=async()=>{        
        await signup(formData)
  }

  return (
    <div className="p-5 min-w-96 bg-gray-500 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
      <h1 className="text-2xl text-white font-semibold">
        Login
        <span className="pl-1 text-sky-300">ChatApp</span>
      </h1>

      <form className="flex flex-col  gap-4 mt-6">
        <div>
          <div className="mb-2 block text-start">
            <Label className="text-white" htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Your name"
            required
            shadow
            onChange={(e)=>onChangeHandler('name',e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block text-start">
            <Label className="text-white" htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Your email"
            required
            shadow
            onChange={(e)=>onChangeHandler('email',e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block text-start">
            <Label
              className="text-white"
              htmlFor="password"
              value="Your password"
            />
          </div>
          <TextInput id="password" type="password" required shadow onChange={(e)=>onChangeHandler('password',e.target.value)} />
        </div>
        <div>
          <div className="mb-2 block text-start">
            <Label
              className="text-white"
              htmlFor="confirmPass"
              value="Confirm password"
            />
          </div>
          <TextInput id="confirmPass" type="password" required shadow onChange={(e)=>onChangeHandler('confirmPass',e.target.value)}/>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Radio id="gender" name="gender" value="male" onChange={(e)=>onChangeHandler('gender',e.target.value)} />
            <Label htmlFor="gender" className="text-white">Male</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="gender" name="gender" value="female" onChange={(e)=>onChangeHandler('gender',e.target.value)} />
            <Label htmlFor="gender" className="text-white">Female</Label>
          </div>
        </div>

        <Button onClick={()=>handleSignup()
        }>Register new account</Button>
      </form>
    </div>
  );
};

export default Signup;
