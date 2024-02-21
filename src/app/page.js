import Image from "next/image";
import { LatestPosts } from "./components/latestPosts/page";

export default function Home() {
  return (
    // <main className="flex flex-col justify-between min-h-[100vh] mt-[8rem]">
      <main className="mt-[8rem]">
      <LatestPosts/>
    </main>
  );
}
