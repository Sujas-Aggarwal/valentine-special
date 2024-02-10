"use server";
import supabase from '@/config/dbConfig'
import { auth } from '@clerk/nextjs';
import React from 'react'
import Copy from './copy';
import Link from 'next/link';

async function New() {
    const {data,error}  = await supabase.from('results').insert([
        { id: auth().userId, results: [] }
      ])
    const url = `${process.env.VERCEL_URL || "http://localhost:3000"}/valentine/${auth().userId.slice(5)}`;
  return (
    <div className='flex flex-col justify-center gap-2 items-center w-full h-screen text-left'>
      <h1 className='text-center text-3xl font-bold'>Proposal Created Successfully!</h1>
      Propose Your Loved ones with this Link- <br />
      <div>
      <input type="text" className='text-black max-w-[95%] p-2 rounded-sm outline-none border-none selection:bg-[#ff516e] selection:text-white' readOnly value={url} />
        <Copy words = {url}/>
        <a target='_blank' href={url}><img className='w-6 m-1' src="https://cdn-icons-png.flaticon.com/512/7268/7268615.png" /></a>
        </div>
    </div>
  )
}

export default New
