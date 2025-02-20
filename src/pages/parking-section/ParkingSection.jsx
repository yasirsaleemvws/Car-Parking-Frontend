import React, { useState } from 'react'
import ParkingCard from '../../components/ParkingCard';
import { Modal, Input, Button, Select, Form } from "antd";
import AddParkingModal from '../../components/modals/AddParkingModal';
const { Option } = Select;

const parkingData = [
  { title: "Ground Floor", available: 20, total: 40, occupied: 32, vacant: 10 },
  { title: "Floor A", available: 22, total: 40, occupied: 32, vacant: 10 },
  { title: "Floor B", available: 24, total: 40, occupied: 32, vacant: 10 },
  { title: "Floor C", available: 26, total: 40, occupied: 32, vacant: 10 },
  { title: "Floor D", available: 28, total: 40, occupied: 32, vacant: 10 },
  { title: "Floor E", available: 30, total: 40, occupied: 32, vacant: 10 },
];

export default function ParkingSection() {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        <h1 className="text-xl font-bold">Parking Section</h1>
        <button className="bg-white text-gray-600  py-2 pl-4 pr-8 border border-gray-400 rounded flex items-center" onClick={showModal}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Add Parking Area
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {parkingData.map((floor, index) => (
          <ParkingCard key={index} data={floor} />
        ))}
      </div>


      <AddParkingModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onSave={handleSave}
      />
    </>
  )
}
