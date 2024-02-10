"use client";
import React, { useState } from 'react'

function Copy({words=""}) {
    const [text, setText] = useState("Copy")
    const copyText = async () => {
        await navigator.clipboard.writeText(words)
        setText("Copied!")
    }
  return (
<button className='bg-white py-1 sm:py-2 px-2  sm:px-3 rounded-sm ml-2 text-black' onClick={copyText}>{text}</button>
  )
}

export default Copy
