import supabase from "@/config/dbConfig";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
export async function POST(req){
    const body = await req.json()
    const {data,error}=  await supabase.from('results').select("results").eq('id',"user_"+body.id)
    console.log(data,error)
    let response = NextResponse.json({message:"success"})
    if (error || data.length === 0){
        response  = NextResponse.json({message:"error"})
      }
    const res = data[0].results
    res.push({name:body.name,clicks:body.num,time:new Date().toISOString()})
    const {dataE,errorE} = await supabase.from('results').update({results:res}).eq('id',"user_"+body.id)
    return response
}