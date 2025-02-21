import React from 'react';
import CustomBarChart from '../../components/CustomBarChart';
import { bar_chart_data, donut_chart_data, pie_chart_data } from '../../config/data.service';
import CustomPieChart from '../../components/charts/CustomPieChart';

export default function ParkingOverview() {
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
              <CustomPieChart
                data={pie_chart_data}
                width={150}
                height={150}
                colors={["#6D28D9", "#D1C4E9"]}
                fill={"#8884d8"}
                innerRadius={0}
                outerRadius={65} />

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
              <CustomPieChart
                data={donut_chart_data}
                width={150}
                height={150}
                colors={['#4B0082', '#8A2BE2', '#9370DB']}
                fill={"#8884d8"}
                innerRadius={30}
                outerRadius={70} />

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
          <CustomBarChart
            data={bar_chart_data}
            height={500}
            fill={"#6D28D9"}
            barSize={12} />
        </div>
      </div>
    </div>
  );
}