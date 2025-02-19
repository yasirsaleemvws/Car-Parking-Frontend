import React, { useState } from 'react'
import CustomFilters from '../../../components/CustomFilters';
import CustomTable from '../../../components/CustomTable';
import CustomPagination from '../../../components/CustomPagination';
import Breadcrumb from '../../../components/Breadcurms';
import CustomBarChart from '../../../components/CustomBarChart';

export default function AvgOccupancy() {
  const [currentPage, setCurrentPage] = useState(1);
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

  const breadcrumbItems = [
    { label: 'Home', link: '/parking' },
    { label: 'Parking Analytics', link: '/parking-analytics' },
    { label: 'Average Occupancy' }
  ];

  const chartData = [
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

  return (
    <>
      <div className=" mx-auto p-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="bg-white shadow-md rounded-lg mb-6 pt-6 pb-6 pr-6">
        <div className="flex justify-between items-center pl-6 mb-2">
          <h3 className="text-gray-600 font-bold">Average Occupancy</h3>
          <div className="text-purple-600 text-sm flex items-center">
            <span className='w-[30px] h-[5px] bg-purple-800 mr-2 rounded'></span>
            <span className='text-gray-500'> Vehicle Occupancy</span>
          </div>
        </div>
        <CustomBarChart data={chartData} height={350} fill={"#6D28D9"} />
      </div>


      <div className="bg-white shadow-md rounded-lg">
        {/* Header */}
        <CustomFilters title={'Average Occupancy'} />

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