export default function Edit({ params }: { params: { id: string } }) {
  const l = [
    { id: 1, roomName: "noise", roomTemp: 23, roomHum: 80, roomDb: 40 },
    { id: 2, roomName: "seminar1", roomTemp: 21, roomHum: 79, roomDb: 46 },
    { id: 3, roomName: "office1", roomTemp: 25, roomHum: 90, roomDb: 48 },
    { id: 4, roomName: "office2", roomTemp: 26, roomHum: 92, roomDb: 52 },
  ];

  const selectedRoom = l.find((room) => room.id === parseInt(params.id, 10));

  return (
    <main className="relative flex min-h-screen w-screen flex-col bg-slate-800 !overflow-hidden">
      {selectedRoom && (
        <div className="flex flex-col items-center p-4 space-y-4">
          <h1 className="font-black text-4xl">Edit {selectedRoom.roomName}</h1>
          <div className="flex w-full flex-col space-x-4">
            <div className="flex justify-center space-x-4">
              <aside className="flex w-24 p-2 text-end">
                <h1 className="w-32">Room ID</h1>
              </aside>
              <div className="flex w-full flex-col space-y-2">
                <input className="rounded-lg" type="text" />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col space-x-4">
            <div className="flex justify-center space-x-4">
              <aside className="flex w-24 p-2 text-end">
                <h1 className="w-32"></h1>
              </aside>
              <div className="flex w-full flex-col space-y-2">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center space-x-4">
            <aside className="flex w-24 p-2 text-end">
              <h1 className="w-32"></h1>
            </aside>
            <input type="text" />
          </div>
          <div className="flex w-full items-center space-x-4 text-start">
            <aside className="flex w-24 p-2 text-end">
              <h1 className="w-32"></h1>
            </aside>
            <textarea />
          </div>
          <div className="flex w-full items-center space-x-4 text-start">
            <aside className="flex w-24 p-2 text-end">
              <h1 className="w-32"></h1>
            </aside>
            <input />
          </div>
          <button className="!h-12 w-full rounded-full bg-black font-bold  text-white dark:bg-white dark:text-black">
            Save
          </button>
        </div>
      )}
    </main>
  );
}
