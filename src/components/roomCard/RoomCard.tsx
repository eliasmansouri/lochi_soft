interface Props {
  roomName: string;
  roomTemp: number;
  roomHum: number;
  roomDb: number;
}

export default function RoomCard(info: Props) {
  return (
    <div className="p-2 flex flex-col shadow-lg items-center cursor-pointer w-full">
      <div className="shadow-sm">
        <h1 className="text-2xl font-bold">{info.roomName}</h1>
      </div>
      <div className="flex space-x-2">
        <h1>{info.roomTemp}°C</h1>
      </div>
    </div>
  );
}
