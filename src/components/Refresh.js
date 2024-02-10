"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

function Refresh() {
    const router = useRouter()
    function refresh (){
        router.refresh()
    }
  return (
    <button onClick={refresh} className='text-black py-1 px-2 sm:py-2 rounded-md text-sm bg-white'>
      Refresh
    </button>
  )
}

export default Refresh
