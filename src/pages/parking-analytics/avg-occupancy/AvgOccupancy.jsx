import React, { useState } from 'react'
import CustomFilters from '../../../components/CustomFilters';
import CustomTable from '../../../components/CustomTable';
import CustomPagination from '../../../components/CustomPagination';
import Breadcrumb from '../../../components/Breadcurms';
import CustomBarChart from '../../../components/charts/CustomBarChart';
import RangeCalander from '../../../components/RangeCalander';
import { bar_chart_data5, table_data, table_headers } from '../../../config/Constants';

const breadcrumbItems = [
  { label: 'Home', link: '/parking' },
  { label: 'Parking Analytics', link: '/parking-analytics' },
  { label: 'Average Occupancy' }
];


export default function AvgOccupancy() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDates, setSelectedDates] = useState([]);

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
    <>
      <div className=" lg:flex justify-between p-6">
        <Breadcrumb items={breadcrumbItems} />
        <RangeCalander selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
      </div>

      <div className="bg-white shadow-md rounded-lg mb-6 pt-6 pb-6 pr-6">
        <div className="flex justify-between items-center pl-6 mb-2">
          <h3 className="text-gray-600 font-bold">Average Occupancy</h3>
          <div className="text-purple-600 text-sm flex items-center">
            <span className='w-[30px] h-[5px] bg-purple-800 mr-2 rounded'></span>
            <span className='text-gray-500'> Vehicle Occupancy</span>
          </div>
        </div>
        <CustomBarChart data={bar_chart_data5} height={350} fill={"#6D28D9"} barSize={12} barSize2={12} />
      </div>


      <div className="bg-white shadow-md rounded-lg">
        <CustomFilters title={'Average Occupancy'} />

        <CustomTable data={table_data} headers={table_headers} renderColumn={renderColumn} />

        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  )
}