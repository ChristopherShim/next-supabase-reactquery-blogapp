"use client";

import data from "../../data/blogs.json"
import { PostCard } from "../postCard/page";

export const LatestPosts = () => {
  return (
    <>
      <h1 className="text-[120px]">Blog</h1>
      <div className="mt-[0rem] gap-[10px] w-full grid grid-cols-4">
        {data.map(d => {
          return (
            <PostCard
            key={d.id}
            title={d.title}
            author={d.author}
            date={d.date}
            tags={d.tags}
            ></PostCard>
          )
        })}
      </div>
    </>
  );
};


// repeat(auto-fit,minmax(min(320px,100%),1fr))