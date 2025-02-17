import React, { useState } from "react";

export default function ParkingInfo({ formData, errors, handleChange, handleNext }) {
  const [parkingAreas, setParkingAreas] = useState([{ areaName: "", length: "", width: "", capacity: "", cameras: "" }]);

  const handleFieldChange = (index, field, value) => {
    const updatedAreas = [...parkingAreas];
    updatedAreas[index][field] = value;
    setParkingAreas(updatedAreas);

    // Validate field immediately on change
    handleChange(index, field, value);
  };

  const handleAddMore = () => {
    setParkingAreas([...parkingAreas, { areaName: "", length: "", width: "", capacity: "", cameras: "" }]);
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
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
              value={area.areaName}
              onChange={(e) => handleFieldChange(index, "areaName", e.target.value)}
              placeholder="Enter Area Name"
            />
            {errors?.[index]?.areaName && <p className="text-red-600">{errors[index].areaName}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Parking Area*</label>
            <div className="flex space-x-4">
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
                  value={area.length}
                  onChange={(e) => handleFieldChange(index, "length", e.target.value)}
                  placeholder="Enter Length"
                />
                {errors?.[index]?.length && <p className="text-red-600">{errors[index].length}</p>}
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
                  value={area.width}
                  onChange={(e) => handleFieldChange(index, "width", e.target.value)}
                  placeholder="Enter Width"
                />
                {errors?.[index]?.width && <p className="text-red-600">{errors[index].width}</p>}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Parking Capacity*</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
              value={area.capacity}
              onChange={(e) => handleFieldChange(index, "capacity", e.target.value)}
              placeholder="Enter Capacity"
            />
            {errors?.[index]?.capacity && <p className="text-red-600">{errors[index].capacity}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Installed Cameras*</label>
            <input
              type="number"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
              value={area.cameras}
              onChange={(e) => handleFieldChange(index, "cameras", e.target.value)}
              placeholder="Enter Number of Cameras"
            />
            {errors?.[index]?.cameras && <p className="text-red-600">{errors[index].cameras}</p>}
          </div>

          {parkingAreas.length > 1 && <hr />}

          {index === parkingAreas.length - 1 && (
            <p onClick={handleAddMore} className="w-full underline text-right text-purple-800 py-2 font-bold transition">
              Add More Parking Area
            </p>
          )}
        </div>
      ))}

      <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition" onClick={() => handleNext("parking")}>
        Next
      </button>
    </form>
  );
}
