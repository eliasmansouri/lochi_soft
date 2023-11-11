"use client";
import Image from "next/image";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
import RoomCard from "@/components/roomCard/RoomCard";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const l = [
    { id: 1, roomName: "noise", roomTemp: 23, roomHum: 80, roomDb: 40 },
    { id: 2, roomName: "seminar1", roomTemp: 21, roomHum: 79, roomDb: 46 },
    { id: 3, roomName: "office1", roomTemp: 25, roomHum: 90, roomDb: 48 },
    { id: 4, roomName: "office2", roomTemp: 26, roomHum: 92, roomDb: 52 },
  ];

  return (
    <main className="relative flex min-h-screen w-screen flex-col !overflow-hidden">
      <div className="flex">
        <div className="p-4 flex flex-col w-1/2 items-center">
          <h1 className="text-2xl font-black">Räume</h1>
          <div className="w-full">
            {l.map((d) => (
              <div className="col-span-2 grid grid-cols-2" key={d.roomName}>
                <div className="col-span-1 p-6 select-none">
                  <RoomCard
                    roomTemp={d.roomTemp}
                    roomName={d.roomName}
                    roomHum={d.roomHum}
                    roomDb={d.roomDb}
                  />
                </div>
                <div className="col-span-1">
                  <Button
                    className="h-2/3 w-2/3 p-4 !text-ellipsis !overflow-hidden"
                    onClick={() => router.push(`/sensors/${d.id}`)}
                  >
                    View Sensors for {d.roomName}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 flex flex-col w-1/2 items-center">
          <h1 className="text-2xl font-black">Optimisation</h1>
        </div>
      </div>
    </main>
  );
}
