"use server";
import supabase from "@/config/dbConfig";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Copy from "./new/copy";
import Refresh from "@/components/Refresh";

async function Account() {
  const { data, error } = await supabase
    .from("results")
    .select("*")
    .eq("id", auth().userId);
  const url = `https://valentine-special-blond.vercel.app/valentine/${auth().userId.slice(5)}`;
  const result = data[0];
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <header className="w-full bg-[#f63555]  flex justify-between items-center px-[5%] h-[10vh] absolute top-0 left-0">
        <Link className="font-bold text-xl" href={"/"}>
          Forever Together
        </Link>
        <div className="flex gap-5 justify-center items-center">
          <Refresh/>
          <UserButton afterSignOutUrl="/" />
          <a target="_blank" href={"https://github.com/Sujas-Aggarwal"}><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" className="w-[32px] rounded-full mr-2" /></a>
        </div>
      </header>
      <div className="h-[10vh]">

      </div>
      {typeof result != "undefined" ? (
        <>
          <h1 className="text-center text-xs">
            Proposal Created on &nbsp;
            {result.created_at.split("T")[0] +
              " " +
              result.created_at.split("T")[1].slice(0, 8)}&nbsp;
          </h1>
          <div className="flex mb-[3vh] flex-wrap w-full justify-center items-center text-sm gap-1 my-2">
            <input
              type="text"
              className="text-black w-[400px] max-w-[95vw] p-1 sm:p-2 rounded-sm outline-none border-none selection:bg-[#ff516e] selection:text-white"
              readOnly
              value={url}
            />
            <Copy words={url} />
          </div>
          {result.results.length > 0 ? (
            <table className="sm:w-[80%] w-[95%] text-center border border-white text-sm">
              <thead className="bg-white text-[#f63555] h-10 ">
                <tr className="font-bold">
                  <td>Name</td>
                  <td>Date</td>
                  <td>Time {"[GMT]"}</td>
                  <td>Clicked NO</td>
                </tr>
              </thead>
              <tbody className="[&>*:nth-child(even)]:text-[#f63555] [&>*:nth-child(even)]:bg-white">
                {result.results.map((res) => (
                  <tr key={res.time} className="h-[40px]">
                    <td className="font-bold">{res.name || "Anonymous"}</td>
                    <td>{res.time.toString().split("T")[0]}</td>
                    <td>{res.time.toString().split("T")[1].slice(0, 8)}</td>
                    <td>{res.clicks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col gap-1 justify-center items-center">
              <h1 className="font-bold text-2xl ">No Responses Yet</h1>
              <h2 className="text-center">Share Your URL to your loved ones</h2>
            </div>
          )}
          <Link
            href={"/account/delete"}
            className="bg-white my-[3vh] min-w-[30%]  px-3 text-center hover:min-w-[40%] py-2 sm:px-6 sm:py-3 duration-150 transition-all text-[#f63555] rounded-lg font-bold"
          >
            Delete Proposal
          </Link>
        </>
      ) : (
        <>
          <div className="max-w-[95%] rounded-lg w-[400px] flex flex-col justify-center gap-3 items-center bg-[#ff4c6a] mt-auto mb-auto h-[400px] text-center">
            <h1 className="font-bold text-2xl">No Proposals Detected!</h1>
            <Link
              href={"/account/new"}
              className="bg-white min-w-[60%] text-center hover:min-w-[80%] py-2 sm:px-6 sm:py-3 duration-150 transition-all text-[#f63555] rounded-xl font-bold"
            >
              Create a Proposal
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Account;
