"use client";
import Header from "@/components/header/Header";
import RoomCard from "@/components/roomCard/RoomCard";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Edit() {
  const router = useRouter();
  const l = [
    { id: 1, roomName: "noise", roomTemp: 23, roomHum: 80, roomDb: 40 },
    { id: 2, roomName: "seminar1", roomTemp: 21, roomHum: 79, roomDb: 46 },
    { id: 3, roomName: "office1", roomTemp: 25, roomHum: 90, roomDb: 48 },
    { id: 4, roomName: "office2", roomTemp: 26, roomHum: 92, roomDb: 52 },
  ];

  return (
    <main className="relative flex min-h-screen w-screen flex-col bg-slate-800 !overflow-hidden">
      {" "}
      <table className="w-full border-collapse border border-white">
        <thead>
          <tr>
            <th className="border border-white">Room Name</th>
            <th className="border border-white">Options</th>
          </tr>
        </thead>
        <tbody>
          {l.map((room, index) => (
            <tr key={index}>
              <td className="border border-white">{room.roomName}</td>
              <td className="border border-white">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push(`/admin/edit/${room.id}`)}
                >
                  Edit
                </Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="!w-full" variant="outlined" color="primary">
        Add
      </Button>
    </main>
  );
}
