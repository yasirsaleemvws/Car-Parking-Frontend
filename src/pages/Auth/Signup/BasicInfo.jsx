import React from "react";

export default function BasicInfo({ formData, handleChange, errors, handleNext }) {
  return (
    <form className="mt-6 space-y-4">
      {/* Company Name */}
      <div>
        <label className="block text-gray-700">Company Name*</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
          value={formData.basicInfo.name}
          onChange={(e) => handleChange("basicInfo", "name", e.target.value)}
          placeholder="Enter Company Name"
        />
        {errors?.name && <p className="text-red-600">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700">Email*</label>
        <input
          type="email"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
          value={formData.basicInfo.email}
          onChange={(e) => handleChange("basicInfo", "email", e.target.value)}
          placeholder="Enter Company Email"
        />
        {errors?.email && <p className="text-red-600">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-700">Password*</label>
        <input
          type="password"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
          value={formData.basicInfo.password}
          onChange={(e) => handleChange("basicInfo", "password", e.target.value)}
          placeholder="Enter Password"
        />
        {errors?.password && <p className="text-red-600">{errors.password}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-gray-700">Confirm Password*</label>
        <input
          type="password"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
          value={formData.basicInfo.confirmPassword}
          onChange={(e) => handleChange("basicInfo", "confirmPassword", e.target.value)}
          placeholder="Confirm Password"
        />
        {errors?.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}
      </div>

      {/* Company Registration Number */}
      <div>
        <label className="block text-gray-700">Company Registration Number*</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
          value={formData.basicInfo.regNumber}
          onChange={(e) => handleChange("basicInfo", "regNumber", e.target.value)}
          placeholder="Enter Registration Number"
        />
        {errors?.regNumber && <p className="text-red-600">{errors.regNumber}</p>}
      </div>

      {/* Business Type */}
      <div>
        <label className="block text-gray-700">Business Type/Industry*</label>
        <select
          value={formData.basicInfo.businessType}
          onChange={(e) => handleChange("basicInfo", "businessType", e.target.value)}
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300"
        >
          <option value="">Select</option>
          <option value="Technology">Technology</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Finance">Finance</option>
        </select>
        {errors?.businessType && <p className="text-red-600">{errors.businessType}</p>}
      </div>

      {/* Next Button */}
      <button
        type="button"
        className="w-full bg-purple-700 text-white py-2 rounded-md"
        onClick={() => handleNext("basicInfo")}
      >
        Next
      </button>
    </form>
  );
}
