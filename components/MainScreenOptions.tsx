import { Button } from "@nextui-org/react";
import Link from "next/link";

const projects = [
  {
    project: "youtubescraper",
    url: "/youtubescraper",
    image: "",
    title: "YouTube Scraper",
  },
  // {
  //   project: "youtubescraper",
  //   url: "/youtubescraper",
  //   image: "",
  //   title: "YouTube Scraper",
  // },
];

export default function MainScreenOptions({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.project}>
            <Link href={project.url}>
              <Button>{project.title}</Button>
            </Link>
          </div>
        );
      })}
    </>
  );
}
