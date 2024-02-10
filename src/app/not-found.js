import Link from 'next/link'
import React from 'react'

function notfound() {
  return (
    <div className='bg-black w-full min-h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-2 max-w-[80%]'>
      <h1>
        <span className='font-bold text-[#f63555]'>404</span> | Page Not Found
      </h1>
      <Link href={"/"} className='bg-[#f63555] hover:min-w-full px-4 text-center transition-all duration-200 py-2 min-w-[50%] rounded-md font-bold'>Go to Home</Link>
      </div>
    </div>
  )
}

export default notfound
