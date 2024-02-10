import supabase from '@/config/dbConfig'
import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

async function Delete() {
    const {data,error}  = await supabase.from('results').delete().eq('id',auth().userId)
    return (
      <>
      <header className="w-full bg-[#f63555]  flex justify-between items-center px-[5%] h-[10vh] absolute top-0 left-0">
        <Link className="font-bold text-xl" href={"/"}>
          Forever Together
        </Link>
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <div className='flex flex-col gap-1 justify-center items-center w-full h-screen '>
      <span className='text-2xl font-bold text-center'> Proposal Deleted Successfully</span>
      <Link href={"/"} className='py-2 px-6 bg-white text-black  rounded-lg'> Go to Home</Link>
    </div>
    </>
  )
}

export default Delete
