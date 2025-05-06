import React from 'react'

function MyMessage({message}) {
  return (
        <div className="chat chat-start">
            <div className="chat-bubble bg-[#FFE3E0] text-black">
                {message}
            </div>
        </div>
  )
}

export default MyMessage
