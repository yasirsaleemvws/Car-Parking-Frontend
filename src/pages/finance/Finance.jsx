import React, { useState } from 'react'
import CustomFilters from '../../components/CustomFilters';
import CustomTable from '../../components/CustomTable';
import CustomPagination from '../../components/CustomPagination';
import CustomBarChart from '../../components/CustomBarChart';
import RangeCalander from '../../components/RangeCalander';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { FaArrowUpLong } from 'react-icons/fa6';
import { donut_chart_data } from '../../config/data.service';
import CustomPieChart from '../../components/charts/CustomPieChart';


export default function Finance() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDates, setSelectedDates] = useState([]);
  const rowsPerPage = 10;

  const data = [
    { date: "November", membership: "Monthly", checkIn: "12:19 am", checkOut: "---" },
    { date: "March", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "December", membership: "Monthly", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "April", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "May", membership: "Weekly", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "June", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "January", membership: "Monthly", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "July", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "February", membership: "Monthly", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "August", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
  ];

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const chartData = [
    { day: "0-1", value: 10, value2: 10 },
    { day: "1-2", value: 50, value2: 50 },
    { day: "2-3", value: 20, value2: 20 },
    { day: "3-4", value: 30, value2: 30 },
    { day: "4-5", value: 40, value2: 40 },
    { day: "5-6", value: 90, value2: 90 },
    { day: "6-7", value: 60, value2: 60 },
    { day: "8-9", value: 80, value2: 80 },
    { day: "10-11", value: 90, value2: 90 },
    { day: "12-13", value: 100, value2: 100 },
    { day: "14-15", value: 85, value2: 85 },
    { day: "16-17", value: 70, value2: 70 },
    { day: "18-19", value: 60, value2: 60 },
    { day: "20-21", value: 50, value2: 50 },
    { day: "22-23", value: 30, value2: 30 }
  ];


  return (
    <>

      <div className=" lg:flex justify-between p-6">
        <h2 className='text-2xl font-bold mb-4 border-b pb-5'>Financial Overview</h2>
        <RangeCalander selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 mb-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex gap-4 flex-col">
          <p className="text-gray-500">Expected Revenue</p>
          <h3 className="text-2xl font-bold">$1,200</h3>
          <span className="text-green-500 text-sm flex items-center mt-1">
            <FaArrowUpLong size={14} className="mr-1" /> 20% vs last month
          </span>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center">
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
      </div>

      <div className="bg-white shadow-md rounded-lg mb-6 pt-6 pb-6 pr-6">
        <div className="flex justify-between items-center pl-6 mb-2">
          <h3 className="text-gray-600 font-bold">Revenue Trend</h3>
          <div className="text-purple-600 text-sm flex items-center">
            <span className='w-[30px] h-[5px] bg-purple-500 mr-2 rounded'></span>
            <span className='text-gray-500'> Received revenue</span>
            <span className='w-[30px] h-[5px] bg-purple-800 mr-2 ml-4 rounded'></span>
            <span className='text-gray-500'> Pending revenue</span>
          </div>
        </div>
        <CustomBarChart data={chartData} height={350} fill={"#6D28D9"} fill2={'#a96ae3'} barSize={10} />
      </div>

      <div className="bg-white shadow-md rounded-lg ">
        {/* Header */}
        <CustomFilters title={'Parking revenue'} />

        {/* Table */}
        <CustomTable data={data} />

        {/* Pagination */}
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  )
}
