"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function Refresh() {
  const [loading, setLoading] = useState(false)
    const router = useRouter()
    async function refresh (){
      setLoading(true)
      router.refresh()
      setTimeout(() => {
        setLoading(false)
      }, 400);
    }
  return (
    <>
    <button onClick={refresh} className='text-black py-1 px-2 sm:py-2 rounded-md text-sm bg-white'>
      Refresh
    </button>
    {loading && 
    <div className='w-screen h-screen bg-[#0000006f] absolute top-0 left-0 flex justify-center items-center'>
      <p className='font-bold'>Refreshing...</p>
    </div>
    }
    </>
  )
}

export default Refresh
