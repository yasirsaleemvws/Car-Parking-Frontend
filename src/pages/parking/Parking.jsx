import React, { useState } from "react";
import CustomTable from "../../components/CustomTable";
import CustomPagination from "../../components/CustomPagination";
import CustomFilters from "../../components/CustomFilters";


export default function Parking() {
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

  return (
    <div className="bg-gray-100">
      <div className="bg-white shadow-md rounded-lg ">
        {/* Header */}
        <CustomFilters title={'Parking'} />

        {/* Table */}
        <CustomTable data={data} />

        {/* Pagination */}
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}
