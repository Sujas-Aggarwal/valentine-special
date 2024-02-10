import Link from 'next/link'
import React from 'react'

function Success() {
  return (
    <div className='bg-white  text-black font-bold text-2xl flex flex-col justify-center items-center w-full h-screen'>
        <img src="https://media.tenor.com/D1CAg1rBD6wAAAAi/tkthao219-bubududu.gif" />
      <h1>Will Contact You Soon 💖</h1>
      <Link
              href={"/"}
              className="bg-[#f63555] text-xl min-w-[30%] mt-2 text-center hover:min-w-[40%] p-2 sm:px-6 sm:py-3 duration-150 transition-all text-white rounded-lg font-bold"
            >
              Create Your Own Proposal
            </Link>
    </div>
  )
}

export default Success
