import React, { useEffect, useRef } from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const {messages, loading} = useGetMessages();
  // this will lister to incoming messages
  useListenMessages()
 const lastMessageRef = useRef();

 useEffect(()=> {
  setTimeout(()=>{
    lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
  },100)
 },[messages])
  return (
    <>
    <div className=' px-4 flex-1 py-3 overflow-auto border-r border-r-black'>
      {!loading && messages.length > 0 && messages.map((message)=>(
        <div key={message._id}
        ref={lastMessageRef}>
          <Message  message={message}/>
        </div>
      ))}
    {loading && [...Array(3)].map((_, idx)=> <MessageSkeleton key={idx}/>)}
    {!loading && messages.length == 0 && (
      <p className=' text-center text-black'>Send a message to start a conversation</p>
    )}

    </div>
       
   <MessageInput/>
    </>
    
  )
}

export default Messages

// MESSAGES CODE SNIPPET
// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className=' px-4 flex-1 overflow-auto'>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
      
//     </div>
//   )
// }

// export default Messages
