import React, { useState } from 'react'
import { APP_ROUTES, table_headers } from '../../../config/Constants';
import Breadcrumb from '../../../components/Breadcurms';
import AddParkingMemberModal from '../../../components/modals/AddParkingMember';
import CustomFilters from '../../../components/CustomFilters';
import CustomTable from '../../../components/CustomTable';
import CustomPagination from '../../../components/CustomPagination';

const breadcrumbItems = [
  { label: 'Home', link: '/parking' },
  { label: 'Access Rule', link: APP_ROUTES.ACCESS_RULE },
  { label: 'MemberShip Parker' }
];


export default function MemberShip() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;
  const totalPages = Math.ceil(table_data.length / rowsPerPage);

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
        <CustomFilters title={'Membership Parkers'} />

        <CustomTable data={table_data} headers={table_headers} renderColumn={renderColumn} />

        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <AddParkingMemberModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onSave={handleSave}
      />
    </>
  )
}
