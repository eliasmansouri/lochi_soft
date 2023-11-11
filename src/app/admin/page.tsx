"use client";
import Header from "@/components/header/Header";
import RoomCard from "@/components/roomCard/RoomCard";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Admin() {
  const router = useRouter();
  const l = [
    { roomName: "noise", roomTemp: 23, roomHum: 80, roomDb: 40 },
    { roomName: "seminar1", roomTemp: 21, roomHum: 79, roomDb: 46 },
    { roomName: "office1", roomTemp: 25, roomHum: 90, roomDb: 48 },
    { roomName: "office2", roomTemp: 26, roomHum: 92, roomDb: 52 },
  ];

  return (
    <main className="relative flex min-h-screen w-screen flex-col bg-slate-800 !overflow-hidden">
      <div className="w-screen flex flex-col items-center p-10">
        <h1 className="font-black text-4xl">Dashboard</h1>
        <div className="px-4 py-8 flex flex-col w-1/2 items-center">
          <h1 className="text-2xl font-black pb-4">Räume</h1>
          <div className="w-full grid grid-cols-2">
            <Button
              className="!col-span-1 p-4 bg-slate-600"
              variant="contained"
              color="success"
            >
              Add Room
            </Button>
            <Button
              className="!col-span-1 p-4 bg-slate-500"
              variant="contained"
              color="warning"
              onClick={() => router.push("/admin/edit")}
            >
              Edit Rooms
            </Button>
            <hr className="col-span-2 my-4 !text-slate-400" />
            {l.map((d) => (
              <div className="col-span-1 p-6" key={d.roomName}>
                <RoomCard
                  roomTemp={d.roomTemp}
                  roomName={d.roomName}
                  roomHum={d.roomHum}
                  roomDb={d.roomDb}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
