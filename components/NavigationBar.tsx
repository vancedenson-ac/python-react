"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { useState } from "react";

export default function NavigationBar() {
  const isLoggedIn = false;

  const [loggedIn, setLoggedIn] = useState<boolean>(isLoggedIn);

  return (
    <div className="z-50 sticky flex top-0 h-16 w-full bg-white justify-center border-b-1 border-[rgba(0,0,0,0.2)] drop-shadow-md">
      <Link href="/" referrerPolicy="same-origin">
        <div className="flex items-center gap-4 rounded-lg hover:animate-pulse cursor-pointer py-2 px-4 hover:bg-opacity-40">
          <Image
            alt="vance"
            src="/vance.jpg"
            height={50}
            width={50}
            className="rounded-full drop-shadow-md border-1 border-[rgba(0,0,0,0.4)]"
          />
          <p className="font-light tracking-wide text-lg text-black hidden sm:flex drop-shadow-lg">
            <h1>Vance</h1>
          </p>
        </div>
      </Link>
    </div>
  );
}
