import React, { useState } from "react";
import { useQuery } from "react-query";
import CustomFilters from "../../components/CustomFilters";
import { table_data } from "../../config/Constants";
import { Menu, Dropdown, Tag } from "antd";
import CustomTable from "../../components/CustomTable";
import { GET__PARKING_LIST } from "../../api/PrivateApi";
import { IoMdMore } from "react-icons/io";

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

export default function Parking() {
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
    <div className="bg-gray-100">
      <div className="bg-white shadow-md rounded-lg">
        <CustomFilters title={'Parking'} />
        <CustomTable data={table_data} columns={columns} pagination={pagination} setPagination={setPagination} loading={isLoading} />
      </div>
    </div>
  );
}
