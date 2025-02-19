import React, { useState } from 'react'
import CustomFilters from '../../../components/CustomFilters';
import CustomTable from '../../../components/CustomTable';
import CustomPagination from '../../../components/CustomPagination';
import Breadcrumb from '../../../components/Breadcurms';

export default function AvgVehicle() {
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
    { label: 'Parking analytics', link: '/parking-analytics' },
    { label: 'Average Vehicle Parked' }
  ];


  return (
    <div className="bg-white shadow-md rounded-lg ">
      <div className=" mx-auto p-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* Header */}
      <CustomFilters title={'Average Vehicle Parked'} />

      {/* Table */}
      <CustomTable data={data} />

      {/* Pagination */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
