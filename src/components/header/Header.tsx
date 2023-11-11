"use client";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import React, { useEffect, useState } from "react";
import { Logo } from "../../../public/assets/logo/Logo";
import SLogo from "../../../public/assets/logo/images/short_logo.png";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  time: string;
}

export default function Header() {
  const router = useRouter();
  const options = [
    { name: "Rooms", link: "" },
    { name: "Margins", link: "" },
    { name: "Hello", link: "" },
    { name: "Hello2", link: "" },
  ];
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  function getTime() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const sec = new Date().getSeconds();

    // Add a leading zero to variables if less than 10
    const formatHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formatMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formatSec = sec < 10 ? `0${sec}` : `${sec}`;

    return `${formatHours}:${formatMin}:${formatSec}`;
  }
  const [time, setTime] = useState<string>(getTime());

  useEffect(() => {
    setTimeout(() => {
      setTime(() => getTime());
    }, 1000);
  }, [time]);
  return (
    <header className="flex w-screen relative justify-between z-50 items-center h-32 p-10 !shadow-md !overflow-hidden">
      <div className="flex justify-start w-1/3 items-center space-x-16">
        <h1 className="font-black text-5xl mt-2 w-44">{time}</h1>
        {parseInt(time.slice(0, time.indexOf(":"))) >= 18 ||
        parseInt(time.slice(0, time.indexOf(":"))) < 6 ? (
          <DarkModeRoundedIcon className="!text-6xl" />
        ) : (
          <WbSunnyRoundedIcon className="!text-6xl" />
        )}
      </div>
      <div className="w-1/3 flex justify-center">
        <div className="w-60">
          <Logo
            className="object-contain hidden lg:flex"
            onClick={() => router.push("/")}
          />
          <Image src={SLogo} className="flex lg:hidden w-16" alt="Short" />
        </div>
      </div>

      <div className="w-1/3 flex justify-end">
        <IconButton
          aria-label="delete"
          onClick={() => alert("Not available yet")}
        >
          <MenuRoundedIcon className="!text-6xl dark:!text-white" />
        </IconButton>
      </div>
      {/*<div
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } right-0 bottom-0 absolute z-50 w-1/3 h-[calc(100vh-8rem)] bg-black transition-all`}
      >
        <ul>
          {options.map((d) => (
            <li key={d.name} className="font-bold text-xl px-4 py-2 ">
              {d.name}
            </li>
          ))}
        </ul>
      </div>*/}
    </header>
  );
}
