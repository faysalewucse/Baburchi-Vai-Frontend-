import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import vector1 from "../assets/Vector-1.png";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Statistics() {
  const data = [
    {
      name: "Assignment: 1",
      marks: 60,
    },
    {
      name: "Assignment: 2",
      marks: 50,
    },
    {
      name: "Assignment: 3",
      marks: 60,
    },
    {
      name: "Assignment: 4",
      marks: 60,
    },
    {
      name: "Assignment: 5",
      marks: 60,
    },
    {
      name: "Assignment: 6",
      marks: 60,
    },
    {
      name: "Assignment: 7",
      marks: 60,
    },
    {
      name: "Assignment: 8",
      marks: 60,
    },
    {
      name: "Assignment: 9",
      marks: 60,
    },
  ];

  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <div className="bg-indigo-100 shadow-lg shadow-indigo-300 p-5 border-2 border-indigo-500">
          <h4 className="font-bold text-indigo-500">{label}</h4>
          <h4 className="">Marks: {payload[0].value}</h4>
        </div>
      );
    } else return null;
  }

  return (
    <div>
      <BottomNavbar text={"Statistics"} />
      <img className="top-0 right-0 absolute" src={vector1} alt="vector1" />
      <div className="max-w-7xl mx-auto p-10">
        <h1 className="font-bold text-3xl mb-5">Assignment Marks</h1>
        <h1 className="font-bold text-indigo-800   text-2xl mb-5">
          Average: 58.75
        </h1>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data} margin={{ top: 10 }}>
            <Area
              dataKey="marks"
              stroke="purple"
              strokeWidth={2}
              markerWidth={10}
              activeDot={{ stroke: "white", strokeWidth: 2, r: 10 }}
              fill="url(#colormarks)"
              dot={{ stroke: "indigo", strokeWidth: 5 }}
            />
            <XAxis
              dataKey="name"
              tickFormatter={(str) => str[0] + str.split(":")[1]}
            />
            <YAxis dataKey="marks" />
            <CartesianGrid />
            <Tooltip content={<CustomTooltip />} />

            <defs>
              <linearGradient id="colormarks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
