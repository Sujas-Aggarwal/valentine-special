"use server";
import supabase from "@/config/dbConfig";
import { UserButton, auth } from "@clerk/nextjs";
import React from "react";
import Copy from "./copy";
import Link from "next/link";

async function New() {
  const { data, error } = await supabase
    .from("results")
    .insert([{ id: auth().userId, results: [] }]);
  const url = `https://valentine-special-blond.vercel.app/valentine/${auth().userId.slice(
    5
  )}`;

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
      <div className="flex flex-col justify-center gap-2 items-center w-full h-screen text-left">
        <h1 className="text-center text-3xl font-bold">
          Proposal Created Successfully!
        </h1>
        Propose Your Loved ones with this Link- <br />
        <div className="w-full flex flex-wrap justify-center items-center gap-1 text-sm">
          <input
            type="text"
            className="w-[400px] text-black max-w-[95vw] p-1 sm:p-2 rounded-sm outline-none border-none selection:bg-[#ff516e] selection:text-white"
            readOnly
            value={url}
          />
          <Copy words={url} />
        </div>
      </div>
    </>
  );
}

export default New;
