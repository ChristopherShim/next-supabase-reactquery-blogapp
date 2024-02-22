"use client"

import React from "react";
import { useState } from "react";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [label, setLabel] = useState("");
  const [content, setContent] = useState("");

  return (
    <form className="w-full flex flex-col gap-y-[1rem]">
      <input
        type="text"
        className="w-[20rem] border border-solid border-black rounded-[.15rem]"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        className="w-[20rem] border border-solid border-black rounded-[.15rem]"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <input
        type="text"
        className="w-[20rem] border border-solid border-black rounded-[.15rem]"
        placeholder="label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      ></input>
      <input
        type="date"
        className="w-[20rem] border border-solid border-black rounded-[.15rem]"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <textarea
        className="resize-none h-[50vh] border border-solid border-black rounded-[.15rem]"
        type="text"
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="w-[10rem] bg-[gray] h-[2rem] rounded-[.15rem]">Save</button>
    </form>
  );
}
