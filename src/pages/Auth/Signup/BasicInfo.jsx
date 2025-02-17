import React from 'react'

export default function BasicInfo({ formData, handleChange, errors, handleNext }) {
  return (
    <form className="mt-6 space-y-4">
      <div>
        <label className="block text-gray-700">Company Name*</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
          value={formData.basicInfo.companyName}
          onChange={(e) => handleChange("basicInfo", "companyName", e.target.value)}
          placeholder="Enter Company Name"
        />
        {errors?.companyName && <p className="text-red-600">{errors.companyName}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Email*</label>
        <input
          type="email"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
          value={formData.basicInfo.email}
          onChange={(e) => handleChange("basicInfo", "email", e.target.value)}
          placeholder="Enter Company Email"
        />
        {errors?.email && <p className="text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Company Registration Number*</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
          value={formData.basicInfo.regNumber}
          onChange={(e) => handleChange("basicInfo", "regNumber", e.target.value)}
          placeholder="Enter Registration Number"
        />
        {errors?.regNumber && <p className="text-red-600">{errors.regNumber}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Business Type/Industry*</label>
        <select
          value={formData.basicInfo.businessType}
          onChange={(e) => handleChange("basicInfo", "businessType", e.target.value)}
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300">
          <option>Select</option>
          <option>Technology</option>
          <option>Healthcare</option>
          <option>Finance</option>
        </select>
        {errors?.businessType && <p className="text-red-600">{errors.businessType}</p>}
      </div>

      <button type="button" className="w-full bg-purple-700 text-white py-2 rounded-md" onClick={() => handleNext("basicInfo")}>
        Next
      </button>
    </form>
  );
}
