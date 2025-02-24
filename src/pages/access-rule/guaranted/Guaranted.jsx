import React, { useState } from 'react'
import { APP_ROUTES } from '../../../config/Constants';
import Breadcrumb from '../../../components/Breadcurms';
import AddParkingMemberModal from '../../../components/modals/AddParkingMember';
import CustomFilters from '../../../components/CustomFilters';
import CustomTable from '../../../components/CustomTable';
import { Dropdown, Menu, Tag } from 'antd';
import { IoMdMore } from 'react-icons/io';
import { useQuery } from 'react-query';
import { GET__PARKING_LIST } from '../../../api/PrivateApi';

const breadcrumbItems = [
  { label: 'Home', link: '/parking' },
  { label: 'Access Rule', link: APP_ROUTES.ACCESS_RULE },
  { label: 'Guaranted Parker' }
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

export default function Guaranted() {
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleSave = (data) => {
    console.log("Saved data:", data);
    setIsModalVisible(false);
    // Handle the saved data (e.g., make an API call)
  };

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <Breadcrumb items={breadcrumbItems} />

        <button className="bg-white text-gray-600  py-2 pl-4 pr-8 border border-gray-400 rounded flex items-center" onClick={showModal}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Add Parker Member
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg ">
        <CustomFilters title={'Guaranted Parkers'} />
        <CustomTable data={[]} columns={columns} pagination={pagination} setPagination={setPagination} loading={isLoading} />
      </div>

      <AddParkingMemberModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onSave={handleSave}
      />
    </>
  )
}
