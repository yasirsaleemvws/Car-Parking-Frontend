import React, { useState } from "react";
import CustomTable from "../../components/CustomTable";
import CustomPagination from "../../components/CustomPagination";
import CustomFilters from "../../components/CustomFilters";
import { table_data } from "../../config/data.service";


export default function Parking() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(table_data.length / rowsPerPage);




  return (
    <div className="bg-gray-100">
      <div className="bg-white shadow-md rounded-lg ">
        {/* Header */}
        <CustomFilters title={'Parking'} />

        {/* Table */}
        <CustomTable data={table_data} />

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
