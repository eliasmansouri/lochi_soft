"use client";
import { GetServerSideProps, NextPage, NextPageContext } from "next";
import { useRouter } from "next/navigation";
import getSensor from "@/app/api/getSensors";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
import { getRelativePosition } from "chart.js/helpers";
import { Bar, Line } from "react-chartjs-2";
import { HMobiledataOutlined } from "@mui/icons-material";

interface Sensor {
  id: number;
  room_id: number;
  type_id: number;
}

async function loadData() {
  const { data } = await axios.get("http://localhost:3000/api/products");
  console.log(data);
  return data;
}
function generateRandomData(
  min: number,
  max: number,
  length: number
): number[] {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
}
const labels = ["8AM", "9AM", "10AM", "11AM", "12AM", "1PM"];

// Setting up the data for the chart, including the labels and datasets
const tData = {
  labels: labels,
  datasets: [
    {
      label: "Temperature (°C)", // Setting up the label for the dataset
      backgroundColor: "rgb(255, 99, 132)", // Setting up the background color for the dataset
      borderColor: "rgb(255, 99, 132)", // Setting up the border color for the dataset
      data: generateRandomData(20, 30, labels.length), // Setting up the data for the dataset
    },
  ],
};
const hData = {
  labels: labels,
  datasets: [
    {
      label: "Air Humidity (%)", // Setting up the label for the dataset
      backgroundColor: "rgb(219, 255, 99)", // Setting up the background color for the dataset
      borderColor: "rgb(219, 255, 99)", // Setting up the border color for the dataset
      data: generateRandomData(20, 30, labels.length), // Setting up the data for the dataset
    },
  ],
};
const SensorsView: NextPage = ({ data }: any) => {
  const l = [
    { id: 1, roomName: "noise", roomTemp: 23, roomHum: 80, roomDb: 40 },
    { id: 2, roomName: "seminar1", roomTemp: 21, roomHum: 79, roomDb: 46 },
    { id: 3, roomName: "office1", roomTemp: 25, roomHum: 90, roomDb: 48 },
    { id: 4, roomName: "office2", roomTemp: 26, roomHum: 92, roomDb: 52 },
  ];
  const router = useRouter();
  console.log(data);
  return (
    <main className="relative flex min-h-screen w-screen flex-col !overflow-hidden">
      <div className="w-screen flex items-center justify-center flex-wrap p-10">
        <div className="!w-1/3 !h-80 flex flex-col items-center p-4">
          <Line data={tData} className="" />
          <h1 className="p-2 text-2xl font-black">Sensor Temperature</h1>
        </div>
        <div className="!w-1/3 !h-80 flex flex-col items-center p-4">
          <Bar data={hData} className="" />
          <h1 className="p-2 text-2xl font-black">Sensor Humidity</h1>
        </div>
      </div>
    </main>
  );
};
SensorsView.getInitialProps = async () => {
  const res = await loadData();
  const json = await res.json(); // `json` is your array of arrays of data
  return { data: json };
};

export default SensorsView;
