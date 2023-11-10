"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  const isLoggedIn = false;

  const [loggedIn, setLoggedIn] = useState<boolean>(isLoggedIn);

  return (
    <div className="z-50 flex h-16 w-full bg-white justify-center border-t-1 border-[rgba(0,0,0,0.4)] drop-shadow-md">
      <Link href="https://www.linkedin.com/in/vance-denson/">
        <AiOutlineLinkedin color="rgba(0,0,0,0.4)" size={40} />
      </Link>
      <Link href="https://github.com/Vance-Ai-D">
        <BsGithub color="rgba(0,0,0,0.4)" size={40} />
      </Link>
    </div>
  );
}
