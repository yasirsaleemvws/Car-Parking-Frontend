import React, { useState } from 'react';

export default function ParkingInfo() {
  const [parkingAreas, setParkingAreas] = useState([{ name: '', length: '', width: '', capacity: '', cameras: '' }]);

  const handleAddMore = () => {
    setParkingAreas([...parkingAreas, { name: '', length: '', width: '', capacity: '', cameras: '' }]);
  };

  const handleChange = (index, field, value) => {
    const updatedAreas = [...parkingAreas];
    updatedAreas[index][field] = value;
    setParkingAreas(updatedAreas);
  };

  return (
    <form className="mt-6 space-y-4">
      {parkingAreas.map((area, index) => (
        <div key={index} className="space-y-4">
          <label className="block text-gray-700">{index + 1} Parking Area.</label>
          <div>
            <label className="block text-gray-700">Parking Area Name*</label>
            <input
              type="text"
              value={area.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-600"
              placeholder="Enter Area Name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Parking Area*</label>
            <div className="flex space-x-4">
              <input
                type="number"
                value={area.length}
                onChange={(e) => handleChange(index, 'length', e.target.value)}
                className="w-1/2 p-2 border rounded-md focus:ring-2 focus:ring-purple-600"
                placeholder="Length"
              />
              <input
                type="number"
                value={area.width}
                onChange={(e) => handleChange(index, 'width', e.target.value)}
                className="w-1/2 p-2 border rounded-md focus:ring-2 focus:ring-purple-600"
                placeholder="Width"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Parking Capacity*</label>
            <input
              type="number"
              value={area.capacity}
              onChange={(e) => handleChange(index, 'capacity', e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-600"
              placeholder="Enter Parking Capacity"
            />
          </div>

          <div>
            <label className="block text-gray-700">Installed Cameras*</label>
            <input
              type="number"
              value={area.cameras}
              onChange={(e) => handleChange(index, 'cameras', e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-600"
              placeholder="Enter Number of Cameras"
            />
          </div>

          {parkingAreas.length > 1 && <hr />}

          {index === parkingAreas.length - 1 && (
            <p
              onClick={handleAddMore}
              className="w-full underline text-right text-purple-800 py-2 font-bold transition"
            >
              Add More Parking Area
            </p>
          )}
        </div>
      ))}

      <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition">
        Next
      </button>
    </form>
  );
}