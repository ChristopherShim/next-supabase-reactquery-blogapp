"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <header className="flex gap-x-[1rem] justify-between pt-[1.5rem] pb-[1.5rem]">
        <Link href="/">Home</Link>
        <div className="flex justify-evenly gap-x-[1rem]">
          <Link href="/">Write Blog</Link>
          <Link href="/">Resources</Link>
          <button>Login/Signup</button>
        </div>
      </header>
    </>
  );
};
