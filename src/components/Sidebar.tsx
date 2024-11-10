import { Button, TextInput, HR, Avatar } from "flowbite-react";
import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { useLogOut } from "../hooks/useLogout";
import { useGetConversations } from "../hooks/useGetConversations";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { logout }: any = useLogOut();
  const {selectedConversation,setSelectedConversation}:any=useAuthContext()
  const { loading: conversationLoader, conversations }: any =
    useGetConversations();
  const handleOnLogout = async () => {
    await logout();
  };

  useEffect(()=>{
    return()=>{
      setSelectedConversation(null);
    }
  },[]);

  return (
    <div className="h-[95%] p-3">
      <div className="flex gap-4">
        <TextInput
          className="w-full"
          id="search"
          type="text"
          placeholder="search..."
        />
        <Button className="rounded-full">
          <CiSearch className="h-6 w-6" />
        </Button>
      </div>
      <HR className="my-4" />

      {conversations?.map((ele: any, idx: any) => {
        return (
          <>
            <div onClick={()=>setSelectedConversation(ele)} key={idx} className={`flex gap-6 items-center p-3 hover:bg-sky-500 rounded-md cursor-pointer ${selectedConversation?._id==ele?._id?'bg-sky-500':''}`}>
              <Avatar rounded />
              <h1 className="font-extrabold text-white">{ele.fullname}</h1>
            </div>

            
            {idx!=conversations.length-1 && <HR className="my-1 bg-gray-700" /> }
          </>
        );
      })}

      <IoMdLogOut
        onClick={() => handleOnLogout()}
        size={33}
        className="absolute bottom-1 left-5 text-white hover:text-sky-500 cursor-pointer"
      />
    </div>
  );
};

export default Sidebar;
