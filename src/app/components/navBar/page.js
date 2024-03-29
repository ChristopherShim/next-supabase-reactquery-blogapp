"use client";

import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/app/stores/authContext";

export const Navbar = () => {
  const {user, handleLogout, randomAction} = useContext(AuthContext)

  return (
    <>
      <header className="flex gap-x-[1rem] justify-between pt-[1.5rem] pb-[1.5rem] text-[14px]">
        <Link href="/">Home</Link>
        <div className="flex justify-evenly gap-x-[1rem] text-center">
          <Link href="/write-blog">Write Blog</Link>
          <Link href="/">Resources</Link>
          {/* <Link href="/login">Login</Link> */}
          {!user && <Link href="/login">Login</Link> || <button onClick={handleLogout}>LogOut</button>}
          
          
          {/* <button className="bg-[#000000] rounded-[20px] text-white px-[8px] py-[2px] font-semibold">Sign Up</button> */}
        </div>
      </header>
    </>
  );
};
