import React from 'react'

export default function Address({ setActiveTab }) {
  return (
    <form className="mt-6 space-y-4">
      <div>
        <label className="block text-gray-700">Select Country*</label>
        <input type="text" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300" placeholder="Enter Country Name" />
      </div>

      <div>
        <label className="block text-gray-700">Select City*</label>
        <input type="text" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300" placeholder="Select City" />
      </div>

      <div>
        <label className="block text-gray-700">Select State*</label>
        <input type="text" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300" placeholder="Select State" />
      </div>

      <div>
        <label className="block text-gray-700">Zip Code*</label>
        <input type="text" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300" placeholder="Enter Zip Code" />
      </div>

      <div>
        <label className="block text-gray-700">Company Address*</label>
        <input type="text" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300" placeholder="Enter Company Address" />
      </div>

      <div>
        <label className="block text-gray-700">Street*</label>
        <input type="number" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300" placeholder="Enter Street Number" />
      </div>

      <div>
        <label className="block text-gray-700">Appartment Number (Optional)</label>
        <input type="number" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300" placeholder="Enter Appartment Number" />
      </div>

      <button className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-700 transition" onClick={() => setActiveTab("parking")}>Next</button>
    </form>
  )
}
