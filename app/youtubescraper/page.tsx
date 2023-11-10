"use client";

import { Button, Input } from "@nextui-org/react";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { useState } from "react";

export default function YouTubeScraper() {
  const [url, setUrl] = useState<string>();

  const scrapeUrl = (props: any) => {
    console.log({ props });
  };

  return (
    <main className="flex mx-auto min-h-screen flex-col items-center gap-10 p-24 max-w-7xl">
      <div className="flex items-center gap-5">
        <AiOutlineYoutube size={40} />
        <h1>{`YouTube Scraper`}</h1>
      </div>
      <form
        className="w-full flex flex-col items-center gap-10"
        onSubmit={scrapeUrl}
      >
        <Input
          type="url"
          label="Enter a Playlist, or single video link:"
          placeholder="https://youtube.com/...."
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <CiGlobe />
            </div>
          }
        />
        <Input type="submit">Scrape Video</Input>
      </form>
      <h1>{`${url ? `Searching URL: ${url}` : ""}`}</h1>
    </main>
  );
}
