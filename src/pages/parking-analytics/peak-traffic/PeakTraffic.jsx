import React, { useState } from 'react'
import CustomFilters from '../../../components/CustomFilters';
import CustomTable from '../../../components/CustomTable';
import CustomPagination from '../../../components/CustomPagination';
import Breadcrumb from '../../../components/Breadcurms';
import CustomBarChart from '../../../components/charts/CustomBarChart';
import RangeCalander from '../../../components/RangeCalander';
import { bar_chart_data, table_data } from '../../../config/data.service';

const breadcrumbItems = [
  { label: 'Home', link: '/parking' },
  { label: 'Parking Analytics', link: '/parking-analytics' },
  { label: 'Peak Traffic Time' }
];


export default function PeakTraffic() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDates, setSelectedDates] = useState([]);

  const rowsPerPage = 10;
  const totalPages = Math.ceil(table_data.length / rowsPerPage);


  return (
    <>
      <div className=" lg:flex justify-between p-6">
        <Breadcrumb items={breadcrumbItems} />
        <RangeCalander selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
      </div>

      <div className="bg-white shadow-md rounded-lg mb-6 pt-6 pb-6 pr-6">
        <div className="flex justify-between items-center pl-6 mb-2">
          <h3 className="text-gray-600 font-bold">Peak Traffic Time</h3>
          <p className="text-purple-600 text-sm flex items-center">
            <span className='w-[30px] h-[5px] bg-purple-800 mr-2 rounded'></span>
            <span className='text-gray-500'> Peak Traffic Time</span>
          </p>
        </div>
        <CustomBarChart data={bar_chart_data} height={350} fill={"#6D28D9"} />
      </div>

      <div className="bg-white shadow-md rounded-lg ">
        <CustomFilters title={'Peak Traffic Time'} />

        <CustomTable data={table_data} />

        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  )
}