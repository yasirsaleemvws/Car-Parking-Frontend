import React from 'react'

export default function BasicInfo({setActiveTab}) {
  return (
    <form className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-700">Company Name*</label>
          <input type="text" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-600" placeholder="Enter Company Name" />
        </div>

        <div>
          <label className="block text-gray-700">Company Email Address*</label>
          <input type="email" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-600" placeholder="Enter Company Email" />
        </div>

        <div>
          <label className="block text-gray-700">Company Registration Number*</label>
          <input type="text" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-600" placeholder="Enter Registration Number" />
        </div>

        <div>
          <label className="block text-gray-700">Business Type/Industry*</label>
          <select className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-600">
            <option>Select</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
          </select>
        </div>

        <button className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-700 transition" onClick={() => setActiveTab("address")}>Next</button>
      </form>
  )
}
