import React, { useState } from 'react'
import CustomFilters from '../../../components/CustomFilters';
import CustomTable from '../../../components/CustomTable';
import CustomPagination from '../../../components/CustomPagination';
import Breadcrumb from '../../../components/Breadcurms';
import CustomAreaChart from '../../../components/CustomAreaChart';
import RangeCalander from '../../../components/RangeCalander';

export default function AvgParking() {
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

  const breadcrumbItems = [
    { label: 'Home', link: '/parking' },
    { label: 'Parking Analytics', link: '/parking-analytics' },
    { label: 'Average Parking Duration' }
  ];

  const chartData = [
    { day: "Jan", value: Math.floor(Math.random() * 100) },
    { day: "Feb", value: Math.floor(Math.random() * 100) },
    { day: "Mar", value: Math.floor(Math.random() * 100) },
    { day: "Apr", value: Math.floor(Math.random() * 100) },
    { day: "May", value: Math.floor(Math.random() * 100) },
    { day: "Jun", value: Math.floor(Math.random() * 100) },
    { day: "Jul", value: Math.floor(Math.random() * 100) },
    { day: "Aug", value: Math.floor(Math.random() * 100) },
    { day: "Sep", value: Math.floor(Math.random() * 100) },
    { day: "Oct", value: Math.floor(Math.random() * 100) },
    { day: "Nov", value: Math.floor(Math.random() * 100) },
    { day: "Dec", value: Math.floor(Math.random() * 100) },
  ];



  return (
    <>
      <div className=" lg:flex justify-between p-6">
        <Breadcrumb items={breadcrumbItems} />
        <RangeCalander selectedDates={selectedDates} setSelectedDates={setSelectedDates}/>
      </div>

      <div className="bg-white shadow-md rounded-lg mb-6 pt-6 pb-6 pr-6">
        <div className="flex justify-between items-center pl-6 mb-2">
          <h3 className="text-gray-600 font-bold">Average Parking Duration</h3>
          <p className="text-purple-600 text-sm flex items-center">
            <span className='w-[30px] h-[5px] bg-purple-800 mr-2 rounded'></span>
            <span className='text-gray-500'> Average Parking Duration</span>
          </p>
        </div>
        <CustomAreaChart data={chartData} height={350} stroke={"#420993"} fill={"#9b55ffd6"} />
      </div>

      <div className="bg-white shadow-md rounded-lg ">
        {/* Header */}
        <CustomFilters title={'Average Parking Duration'} />

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