import React, { useState } from 'react';

export default function ParkingInfo({ formData, errors, handleNext }) {
  const [parkingAreas, setParkingAreas] = useState([{ name: '', length: '', width: '', capacity: '', cameras: '' }]);

  const handleChange = (index, field, value) => {
    const updatedAreas = [...parkingAreas];
    updatedAreas[index][field] = value;
    setParkingAreas(updatedAreas);
  };

  const handleAddMore = () => {
    setParkingAreas([...parkingAreas, { name: '', length: '', width: '', capacity: '', cameras: '' }]);
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
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
              value={formData.parking[index].areaName}
              onChange={(e) => handleChange("parking", "areaName", e.target.value)}
              placeholder="Enter Area Name"
            />
            {errors?.areaName && <p className="text-red-600">{errors.areaName}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Parking Area*</label>
            <div className="flex space-x-4">
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
                  value={formData.parking[index].length}
                  onChange={(e) => handleChange("parking", "length", e.target.value)}
                  placeholder="Enter Length"
                />
                {errors?.length && <p className="text-red-600">{errors.length}</p>}
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
                  value={formData.parking[index].width}
                  onChange={(e) => handleChange("parking", "width", e.target.value)}
                  placeholder="Enter Width"
                />
                {errors?.width && <p className="text-red-600">{errors.width}</p>}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Parking Capacity*</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
              value={formData.parking[index].capacity}
              onChange={(e) => handleChange("parking", "capacity", e.target.value)}
              placeholder="Enter Capacity"
            />
            {errors?.capacity && <p className="text-red-600">{errors.capacity}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Installed Cameras*</label>
            <input
              type="number"
              value={formData.parking[index].cameras}
              onChange={(e) => handleChange(index, 'cameras', e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
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

      <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition" onClick={() => handleNext('parking')}>
        Next
      </button>
    </form>
  );
}