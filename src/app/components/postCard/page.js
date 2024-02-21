import React from "react";

export const PostCard = (props) => {
  return (
    <div className="min-h-[700px] p-[1.5rem] bg-[#FFBB38] flex flex-col justify-between rounded-[.375rem]">
      <div className="flex justify-between align-center">
        <div className="w-[8px] h-[8px] rounded-[20px] bg-[#bec6cc] color-[#bec6cc] flex-[0_0_auto]"></div>
        <div className="w-[8px] h-[8px] rounded-[20px] bg-[#bec6cc] color-[#bec6cc] flex-[0_0_auto]"></div>
      </div>
      <div className="flex flex-col">
        <div className="text-[54px]">
          <h2>{props.title}</h2>
        </div>
        <div className="text-[.875rem] border-t-[1px] border-[#00000040] border-solid">
          <p className="pt-[.5rem] pb-[.5rem]">{props.author}</p>
          <p className="pt-[.5rem] pb-[.5rem] border-t-[1px] border-[#00000040] border-solid">{props.date}</p>
          <p className="pt-[.5rem] pb-[.5rem] border-t-[1px] border-[#00000040] border-solid">{props.tags}</p>
        </div>
      </div>
    </div>
  );
};
