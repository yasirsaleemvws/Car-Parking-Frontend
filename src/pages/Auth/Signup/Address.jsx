import React from 'react'

export default function Address({ formData, handleChange, errors, handleNext }) {
  return (
    <form className="mt-6 space-y-4">
      <div>
        <label className="block text-gray-700">Select Country*</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
          value={formData.address.country}
          onChange={(e) => handleChange("address", "country", e.target.value)}
          placeholder="Enter Country Name"
        />
        {errors?.country && <p className="text-red-600">{errors.country}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Select City*</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
          value={formData.address.city}
          onChange={(e) => handleChange("address", "city", e.target.value)}
          placeholder="Enter City Name"
        />
        {errors?.city && <p className="text-red-600">{errors.city}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Select State*</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
          value={formData.address.state}
          onChange={(e) => handleChange("address", "state", e.target.value)}
          placeholder="Enter State Name"
        />
        {errors?.state && <p className="text-red-600">{errors.state}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Zip Code*</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
          value={formData.address.zip}
          onChange={(e) => handleChange("address", "zip", e.target.value)}
          placeholder="Enter Zip Code"
        />
        {errors?.zip && <p className="text-red-600">{errors.zip}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Company Address*</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
          value={formData.address.address}
          onChange={(e) => handleChange("address", "address", e.target.value)}
          placeholder="Enter Address"
        />
        {errors?.address && <p className="text-red-600">{errors.address}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Street*</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
          value={formData.address.street}
          onChange={(e) => handleChange("address", "street", e.target.value)}
          placeholder="Enter Street Name"
        />
        {errors?.street && <p className="text-red-600">{errors.street}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Appartment Number (Optional)</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
          value={formData.address.apartment}
          onChange={(e) => handleChange("address", "apartment", e.target.value)}
          placeholder="Enter Appartment Name"
        />
      </div>

      <button className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-700 transition" onClick={() => handleNext("address")}>Next</button>
    </form>
  )
}
