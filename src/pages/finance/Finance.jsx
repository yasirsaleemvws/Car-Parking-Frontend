import React, { useState } from 'react'
import CustomFilters from '../../components/CustomFilters';
import CustomBarChart from '../../components/charts/CustomBarChart';
import RangeCalander from '../../components/RangeCalander';
import { FaArrowUpLong } from 'react-icons/fa6';
import { bar_chart_data4, donut_chart_data, table_data } from '../../config/Constants';
import CustomPieChart from '../../components/charts/CustomPieChart';
import { IoMdMore } from 'react-icons/io';
import { Dropdown, Menu, Tag } from 'antd';
import { useQuery } from 'react-query';
import CustomTable from "../../components/CustomTable";
import { GET__PARKING_LIST } from "../../api/PrivateApi";


const renderActionsDropdown = (item) => {
  const actionMenu = (
    <Menu className="min-w-[120px]">
      <Menu.Item key="test1" className="border-b border-gray-300"> Test </Menu.Item>
      <Menu.Item key="test2" className="border-b border-gray-300"> Test </Menu.Item>
      <Menu.Item key="test3"> Test </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={actionMenu} placement="bottomRight">
      <button className="p-2 border rounded-md hover:bg-gray-200 text-2xl">
        <IoMdMore />
      </button>
    </Dropdown>
  );
};


export default function Finance() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 10,
  });

  const { data, isLoading } = useQuery([
    "parkingData", pagination.current,
  ], () => GET__PARKING_LIST(pagination.current, pagination.pageSize), {
    keepPreviousData: true,
  });

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(date)),
    },
    {
      title: "Membership",
      dataIndex: "membership",
      render: (value) => {
        return (
          <Tag color="green">
            {value}
          </Tag>
        );
      },
    },
    {
      title: "Vehicle Number",
      dataIndex: "plateNumber",
    },
    {
      title: "Parking Area",
      dataIndex: "parkingArea",
    },
    {
      title: "Check In",
      dataIndex: "checkIn",
    },
    {
      title: "Check Out",
      dataIndex: "checkOut",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Action",
      render: (_, record) => (
        <div>{renderActionsDropdown(record)}</div>
      ),
    },
  ];


  return (
    <>

      <div className="lg:flex justify-between mb-6">
        <h2 className='text-2xl font-bold'>Financial Overview</h2>
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
        <CustomBarChart data={bar_chart_data4} height={350} fill={"#6D28D9"} fill2={'#a96ae3'} barSize={10} />
      </div>

      <div className="bg-white shadow-md rounded-lg ">
        <CustomFilters title={'Parking revenue'} />
        <CustomTable data={table_data} columns={columns} pagination={pagination} setPagination={setPagination} loading={isLoading} />
      </div>
    </>
  )
}
