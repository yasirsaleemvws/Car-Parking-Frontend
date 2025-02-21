import React, { useState } from "react";
import CustomTable from "../../components/CustomTable";
import CustomPagination from "../../components/CustomPagination";
import CustomFilters from "../../components/CustomFilters";
import { table_data, table_headers } from "../../config/Constants";


export default function Parking() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(table_data.length / rowsPerPage);

  const renderColumn = {
    date: (value) => (
      <span>
        {value} <br />
        <span className="block text-gray-500 text-sm">Formatted Date</span>
      </span>
    ),
    membership: (value) => <span className="text-indigo-600 font-medium">{value}</span>,
    duration: (value) => (
      <div className="flex items-center space-x-2">
        <div className="w-16 h-2 bg-purple-500 rounded"></div>
        <span className="text-sm">{value}</span>
      </div>
    ),
  };

  
  return (
    <div className="bg-gray-100">
      <div className="bg-white shadow-md rounded-lg ">
        <CustomFilters title={'Parking'} />

        <CustomTable data={table_data} headers={table_headers} renderColumn={renderColumn} />

        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}
