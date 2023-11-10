import { Button } from "@nextui-org/react";
import Link from "next/link";

const projects = [
  {
    project: "aireviews",
    url: "http://aireviews.app",
    image: "aireviews.png",
    title: "AI Reviews",
  },
  {
    project: "llm",
    url: "https://github.com/Vance-Ai-D/xsourced-client",
    image: "aireviews.png",
    title: "LLM Chatbot(s)",
  },
  {
    project: "cidrapi",
    url: "https://github.com/Vance-Ai-D/CIDR-API",
    image: "aireviews.png",
    title: "CIDR API",
  },
  {
    project: "nextjsshopify",
    url: "https://github.com/Vance-Ai-D/webcraft-shopify/tree/main",
    image: "aireviews.png",
    title: "Shopify NextJS App",
  },
];

export default function Projects({ children }: { children?: React.ReactNode }) {
  return (
    <div className="drop-shadow-md border-t-1 border-b-1 border-[rgba(0,0,0,0.4)] mt-5 text-center flex flex-col gap-4 bg-white bg-opacity-90">
      <h1 className="font-bold tracking-widest text-black drop-shadow-sm mt-10 font-md sm:font-xl">
        Recent Projects
      </h1>
      <hr className="drop-shadow-sm bg-black" />
      <div className={`pt-5 gap-4 flex flex-wrap text-center justify-center`}>
        {projects.map((project) => {
          return (
            <div key={project.project} className="">
              <Link href={project.url}>
                <Button className="bg-white w-60 h-40 hover:text-white hover:text-lg hover:bg-blue-300 animate hover:scale-110 border-1 drop-shadow-lg border-[rgba(0,0,0,0.4)]">
                  {project.title}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
