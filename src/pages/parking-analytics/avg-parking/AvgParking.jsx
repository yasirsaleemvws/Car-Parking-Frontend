import React, { useState } from 'react'
import CustomFilters from '../../../components/CustomFilters';
import Breadcrumb from '../../../components/Breadcurms';
import CustomAreaChart from '../../../components/charts/CustomAreaChart';
import RangeCalander from '../../../components/RangeCalander';
import { bar_chart_data3 } from '../../../config/Constants';
import { useQuery } from 'react-query';
import { Dropdown, Menu, Tag } from 'antd';
import CustomTable from '../../../components/CustomTable';
import { IoMdMore } from 'react-icons/io';

const breadcrumbItems = [
  { label: 'Home', link: '/parking' },
  { label: 'Parking Analytics', link: '/parking-analytics' },
  { label: 'Average Parking Duration' }
];

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

export default function AvgParking() {
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
      <div className=" lg:flex justify-between p-6">
        <Breadcrumb items={breadcrumbItems} />
        <RangeCalander selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
      </div>

      <div className="bg-white shadow-md rounded-lg mb-6 pt-6 pb-6 pr-6">
        <div className="flex justify-between items-center pl-6 mb-2">
          <h3 className="text-gray-600 font-bold">Average Parking Duration</h3>
          <p className="text-purple-600 text-sm flex items-center">
            <span className='w-[30px] h-[5px] bg-purple-800 mr-2 rounded'></span>
            <span className='text-gray-500'> Average Parking Duration</span>
          </p>
        </div>
        <CustomAreaChart data={bar_chart_data3} height={350} stroke={"#420993"} fill={"#9b55ffd6"} />
      </div>

      <div className="bg-white shadow-md rounded-lg ">
        <CustomFilters title={'Average Parking Duration'} />
        <CustomTable data={[]} columns={columns} pagination={pagination} setPagination={setPagination} loading={isLoading} />
      </div>
    </>
  )
}