import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import CustomBarChart from '../../components/CustomBarChart';

export default function ParkingOverview() {
  const parkingUsageData = [
    { day: "0-1", value: 10 },
    { day: "1-2", value: 50 },
    { day: "2-3", value: 20 },
    { day: "3-4", value: 30 },
    { day: "4-5", value: 40 },
    { day: "5-6", value: 90 },
    { day: "6-7", value: 60 },
    { day: "8-9", value: 80 },
    { day: "10-11", value: 90 },
    { day: "12-13", value: 100 },
    { day: "14-15", value: 85 },
    { day: "16-17", value: 70 },
    { day: "18-19", value: 60 },
    { day: "20-21", value: 50 },
    { day: "22-23", value: 30 }
  ];

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 200 },
  ];

  const COLORS2 = ['#4B0082', '#8A2BE2', '#9370DB'];

  // Parking Space Data (Pie Chart)
  const parkingSpaceData = [
    { name: "Filled Space", value: 900 },
    { name: "Available Space", value: 210 }
  ];
  const COLORS = ["#6D28D9", "#D1C4E9"];

  return (
    <div className="bg-gray-100">
      {/* Parking Overview Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Parking Overview</h2>

      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='flex-1'>
          {/* Top Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white px-4 py-6 sm:py-10 rounded-lg shadow-md">
              <p className="text-gray-500">Vehicle Registered</p>
              <h3 className="text-2xl font-bold">12k <span className="text-green-500 text-sm rounded-full px-2 border-2 border-green-500">+99%</span></h3>
            </div>
            <div className="bg-white px-4 py-6 sm:py-10 rounded-lg shadow-md">
              <p className="text-gray-500">Vehicle Entered</p>
              <h3 className="text-2xl font-bold">12k <span className="text-green-500 text-sm rounded-full px-2 border-2 border-green-500">+99%</span></h3>
            </div>
            <div className="bg-white px-4 py-6 sm:py-10 rounded-lg shadow-md">
              <p className="text-gray-500">Vehicle Exited</p>
              <h3 className="text-2xl font-bold">2400 <span className="text-green-500 text-sm rounded-full px-2 border-2 border-green-500">+40%</span></h3>
            </div>
          </div>

          {/* Middle Section - Charts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className='flex justify-center'>
                <img src="/images/icons/space.png" alt="" />
              </div>
              <p className="text-gray-500 text-center">Total Space</p>
              <h3 className="text-2xl font-bold text-center">15K</h3>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-center">
              <ResponsiveContainer width="100%" height={150} className="flex-1">
                <PieChart>
                  <Pie data={parkingSpaceData} dataKey="value" nameKey="name" outerRadius={65} fill="#6D28D9">
                    {parkingSpaceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 sm:mt-0 sm:ml-4 text-sm flex-1">
                <div className='flex items-center'>
                  <p className="text-purple-700 mr-1 text-xl">●</p>
                  <p>Filled Space:<br /> 900</p>
                </div>
                <div className='flex items-center'>
                  <p className="text-gray-500 mr-1 text-xl">●</p>
                  <p>Available Space:<br /> 210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Charts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-center">
              <ResponsiveContainer width={150} height={150}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={70}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 sm:mt-0 sm:ml-4 text-sm flex-1">
                <div className='flex items-center'>
                  <p className="text-purple-700 mr-1 text-xl">●</p>
                  <p>Received revenue<br /> $1,200</p>
                </div>
                <div className='flex items-center'>
                  <p className="text-purple-500 mr-1 text-xl">●</p>
                  <p>Overdue revenue<br /> $3,500 </p>
                </div>
                <div className='flex items-center'>
                  <p className="text-purple-300 mr-1 text-xl">●</p>
                  <p>Pending revenue <br /> $5,000 </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className='flex justify-center'>
                <img src="/images/icons/space.png" alt="" />
              </div>
              <p className="text-gray-500 text-center">Total Space</p>
              <h3 className="text-2xl font-bold text-center">15K</h3>
            </div>
          </div>
        </div>

        {/* Parking Usage Bar Chart */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex-1">
          <h3 className="text-gray-700 mb-2 font-bold text-xl">Parking Usage</h3>
          <CustomBarChart data={parkingUsageData} height={500} fill={"#6D28D9"} barSize={12} />
        </div>
      </div>
    </div>
  );
}