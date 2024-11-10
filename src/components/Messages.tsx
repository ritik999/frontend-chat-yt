import { Avatar } from 'flowbite-react'
import React from 'react'
import { useAuthContext } from '../context/AuthContext';

const Messages = ({info}:any) => {
    const { selectedConversation, authUser }: any =
    useAuthContext();

    const forMe=info?.senderId==authUser._id;
    
  return (
    <div className="flex items-start justify-end gap-2.5 mb-4">
              <Avatar rounded />
              <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 ${forMe?'bg-gray-300':'bg-sky-200'} rounded-e-xl rounded-es-xl dark:bg-gray-700`}>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {
                        forMe?authUser.fullname:selectedConversation.fullname
                    }
                  </span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    11:46
                  </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white text-start">
                  {
                    info.message
                  }
                </p>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Delivered
                </span>
              </div>
            </div>
  )
}

export default Messages