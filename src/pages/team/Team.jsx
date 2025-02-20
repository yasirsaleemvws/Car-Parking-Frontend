import React, { useState } from 'react'
import CustomFilters from '../../components/CustomFilters';
import CustomTable from '../../components/CustomTable';
import CustomPagination from '../../components/CustomPagination';
import AddTeamMemberModal from '../../components/modals/AddTeamMember';

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


export default function Team() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);

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
        <h1 className="text-xl font-bold">Team Management</h1>
        <button className="bg-white text-gray-600  py-2 pl-4 pr-8 border border-gray-400 rounded flex items-center" onClick={showModal}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Add Team Member
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg">
        {/* Header */}
        <CustomFilters title={'All Team Members'} />

        {/* Table */}
        <CustomTable data={data} />

        {/* Pagination */}
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <AddTeamMemberModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onSave={handleSave}
      />
    </>
  )
}
