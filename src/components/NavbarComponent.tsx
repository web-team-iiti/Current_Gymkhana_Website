"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";


import React, { useState, useEffect } from "react";

function NavbarComponent() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeActive = pathname === "/";
  const isEventsActive = pathname?.startsWith("/eventsgallery");
  const isFaqActive = pathname?.startsWith("/faq");
  const isClubsActive = pathname?.startsWith("/technicals") || pathname?.startsWith("/culturals") || pathname?.startsWith("/sports");

  return (
    <div className={`items-center py-4 fixed z-50 top-0 w-full transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-md shadow-lg py-2' : 'bg-transparent'}`}>
      <span className="flex flex-row lg:w-[50%] ml-auto justify-end pr-6">
        <Link href="/">
          <Button className={`text-2xl max-sm:text-lg font-semibold bg-opacity-0 px-6 max-sm:px-4 ${isHomeActive ? "text-amber-400 underline underline-offset-8 decoration-2" : "text-white"}`}>HOME</Button>
        </Link>

        <Dropdown className="bg-black bg-opacity-35 text-2xl">
          <DropdownTrigger>
            <Button className={`text-2xl max-sm:text-lg font-semibold bg-opacity-0 px-6 max-sm:px-4 ${isClubsActive ? "text-amber-400 underline underline-offset-8 decoration-2" : "text-white"}`}>CLUBS</Button>
          </DropdownTrigger>
          <DropdownMenu className="text-white">
            <DropdownItem key="tech-clubs">
              <Link href="/technicals/clubs">
                <Button className={`text-base bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300 hover:transition-all ${pathname === "/technicals/clubs" ? "text-amber-400 font-bold" : "text-white"}`}>
                  TECHNICAL CLUBS
                </Button>
              </Link>
            </DropdownItem>
            <DropdownItem key="tech-teams">
              <Link href="/technicals/teams">
                <Button className={`text-base bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300 hover:transition-all ${pathname === "/technicals/teams" ? "text-amber-400 font-bold" : "text-white"}`}>
                  TECHNICAL TEAMS
                </Button>
              </Link>
            </DropdownItem>
            <DropdownItem key="cult-clubs">
              <Link href="/culturals/clubs">
                <Button className={`text-base bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300 hover:transition-all ${pathname === "/culturals/clubs" ? "text-amber-400 font-bold" : "text-white"}`}>
                  CULTURAL CLUBS
                </Button>
              </Link>
            </DropdownItem>
            <DropdownItem key="sports-clubs">
              <Link href="/sports/clubs">
                <Button className={`text-base bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300 hover:transition-all ${pathname === "/sports/clubs" ? "text-amber-400 font-bold" : "text-white"}`}>
                  SPORTS CLUBS
                </Button>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Link href="/eventsgallery">
          <Button className={`text-2xl max-sm:text-lg font-semibold bg-opacity-0 px-6 max-sm:px-4 ${isEventsActive ? "text-amber-400 underline underline-offset-8 decoration-2" : "text-white"}`}>EVENTS</Button>
        </Link>
        <Link href="/faq">
          <Button className={`text-2xl max-sm:text-lg font-semibold bg-opacity-0 px-6 max-sm:px-4 ${isFaqActive ? "text-amber-400 underline underline-offset-8 decoration-2" : "text-white"}`}>FAQs</Button>
        </Link>
      </span>
    </div>
  );
}

export default NavbarComponent;
