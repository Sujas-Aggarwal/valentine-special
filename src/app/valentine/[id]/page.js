"use client";
import React, { useState } from "react";
import requests from "@/data/requests";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
const Proposal = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const id = useParams().id;
  const [no, setNo] = useState(0);
  const handleNoClick = () => {
    setNo(no + 1);
  };
  async function yesHandler() {
    const name = prompt("Enter your name");
    setLoading(true)
    const res = await fetch(`/api/data`, {
      method: "POST",
      body: JSON.stringify({ id: id, num: no, name: name }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    try{
    const data  = await res.json()
    if (data.message === "success") {
      router.push(`/valentine/${id}/success`);
    }}
    catch{
      alert("There was an error")

    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-xl text-pink-600 font-bold mb-6 max-w-[80%] text-center flex ">
          {requests[Math.min(no, requests.length - 1)]}
        </h1>
        <img
          className="w-48 h-48 mx-auto mb-6 "
          src="https://media.tenor.com/uSUkySupnnUAAAAi/tkthao219-bubududu.gif"
          alt="Cute Proposal Gif"
        />
        <div className="flex justify-center">
          <button
            onClick={yesHandler}
            disabled={loading}
            style={{ scale: 1 + no * 0.1 }}
            className="bg-green-500  hover:bg-green-700 text-white font-bold select-none py-2 px-8 rounded mr-4"
          >
           {loading?"Sending...":"Yes"}
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 select-none rounded"
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
