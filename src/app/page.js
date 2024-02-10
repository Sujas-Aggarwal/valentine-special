import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className='w-full text-white bg-[#f63555] min-h-screen flex  flex-col justify-center items-center'> 
    <div className='flex flex-col justify-center items-start gap-3 max-w-[80%]'>
      <h1 className='font-bold  text-2xl sm:text-3xl'>This <span className='text-4xl '>Valentines</span>, <br></br>Express Your Love Beautifully</h1>
      <div className='flex justify-start w-full items-center gap-2 flex-wrap'>
 
      <Link href={"/account"} className='bg-white min-w-[60%] text-center hover:min-w-[80%] py-2 sm:px-6 sm:py-3 duration-150 transition-all text-[#f63555] rounded-lg font-bold'>Get Started</Link>
      </div>
      </div>

    </div>
  )
}

export default Home
