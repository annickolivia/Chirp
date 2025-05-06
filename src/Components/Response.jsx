import React from 'react'

function Response({reponse}) {
  return (
    <div className="chat chat-end ">
    <div className="chat-bubble  text-black  bg-gray-100 ">{reponse}</div>
</div>
  )
}

export default Response
