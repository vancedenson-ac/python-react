"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import MainScreenOptions from "../components/MainScreenOptions";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="items-center gap-5 bg-[url('/astro.jpg')] bg-cover flex-col flex justify-center">

<video
width="600px"
            className="absolute top-0 min-w-7xl rounded-xl border-1 border-[rgba(0,0,0,0.4)]"
            autoPlay
            loop
            muted
            >
               <source type="video/mp4" src="/code_video.mp4" />

       </video>
        <div className="py-5 z-20 max-w-7xl sm:px-56 items-center justify-center flex flex-col sm:bg-white bg-opacity-50">

      <Link href="/resume.pdf">
        <Button className="mb-10 bg-white h-14 w-40 drop-shadow-md hover:animate-bounce hover:text-white hover:font-black font-semibold hover:bg-blue-300">
          My Resume
        </Button>
      </Link>
      <p className="max-w-xl text-black bg-blue-200 px-10 py-5 rounded-lg bg-opacity-95 text-center border-1 border-[rgba(0,0,0,0.4)] drop-shadow-md text-sm">
        <div className="flex justify-center items-center">
          <h2 className="mr-4 text-xl">Hello</h2>
          <div className="animate-spinner-linear-spin animate duration-700 text-2xl">
            👋
          </div>
        </div>
        <br />
        {`I'm a fullstack developer - TypeScript and Python.`}
        <br />
        {`I'm currently interested in everything AI and LLMs! Let's connect if you share similar interests!`}
      </p>
      {/* <MainScreenOptions /> */}
      <Projects />
        </div>
    </div>
  );
}
