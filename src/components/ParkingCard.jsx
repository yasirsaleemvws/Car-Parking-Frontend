import React from 'react'

export default function ParkingCard({ data }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      {/* Parking Image */}
      <img
        src="/images/parking-card.png"
        alt={data.title}
        className="w-full h-230 object-cover rounded-lg p-5"
      />

      {/* Title & Availability */}
      <h3 className="text-lg font-semibold text-purple-600 mt-3 text-center mb-3">
        {data?.title}
        <span className="text-xs bg-purple-200 text-purple-700 px-2 py-1 rounded ml-2">
          {data.available}/35
        </span>
      </h3>
      <p className="text-gray-500 text-sm text-center mb-10">Average Occupancy: 55%</p>

      {/* Parking Data */}
      <div className="flex justify-between items-center mt-4 text-white">
        <span className="text-sm bg-purple-800 p-2 flex-1 text-center" style={{ borderRadius: '0 0 0 10px' }}>{data.total} (50%)</span>
        <span className="text-sm bg-purple-600 p-2 flex-1 text-center">{data.occupied} (30%)</span>
        <span className="text-sm bg-purple-400 p-2 flex-1 text-center" style={{ borderRadius: '0 0 10px 0' }}>{data.vacant} (20%)</span>
      </div>
    </div>
  )
}
