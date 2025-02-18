import React from 'react'
import ParkingCard from '../../components/ParkingCard';

const parkingData = [
  { title: "Ground Floor", available: 20, total: 40, occupied: 32, vacant: 10 },
  { title: "Floor A", available: 22, total: 40, occupied: 32, vacant: 10 },
  { title: "Floor B", available: 24, total: 40, occupied: 32, vacant: 10 },
  { title: "Floor C", available: 26, total: 40, occupied: 32, vacant: 10 },
  { title: "Floor D", available: 28, total: 40, occupied: 32, vacant: 10 },
  { title: "Floor E", available: 30, total: 40, occupied: 32, vacant: 10 },
];

export default function ParkingSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {parkingData.map((floor, index) => (
        <ParkingCard key={index} data={floor} />
      ))}
    </div>
  )
}
