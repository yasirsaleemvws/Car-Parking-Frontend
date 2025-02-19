import React, { useState } from "react";

export default function Parking() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const data = [
    { date: "November", membership: "Monthly", checkIn: "12:19 am", checkOut: "---" },
    { date: "March", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "December", membership: "Monthly", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "April", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "May", membership: "Weekly", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "June", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "January", membership: "Monthly", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "July", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "February", membership: "Monthly", checkIn: "12:19 am", checkOut: "02:19 pm" },
    { date: "August", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
  ];

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Parking</h2>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">O</span>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="p-2 border rounded-md hover:bg-gray-200">
              \\\
            </button>
            <button className="p-2 border rounded-md hover:bg-gray-200">
              ///
            </button>
            <button className="p-2 border rounded-md hover:bg-gray-200">Export</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left font-semibold">Date</th>
                <th className="p-3 text-left font-semibold">Membership</th>
                <th className="p-3 text-left font-semibold">Plate Number</th>
                <th className="p-3 text-left font-semibold">Parking Area</th>
                <th className="p-3 text-left font-semibold">Check IN</th>
                <th className="p-3 text-left font-semibold">Check Out</th>
                <th className="p-3 text-left font-semibold">Duration</th>
                <th className="p-3 text-left font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.date} <span className="block text-gray-500 text-sm">Nov 1, 2024</span></td>
                  <td className="p-3 text-indigo-600 font-medium">{item.membership}</td>
                  <td className="p-3">AEX 8458</td>
                  <td className="p-3">Floor A</td>
                  <td className="p-3">{item.checkIn}</td>
                  <td className="p-3">{item.checkOut}</td>
                  <td className="p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-purple-500 rounded"></div>
                      <span className="text-sm">3 hr</span>
                    </div>
                  </td>
                  <td className="p-3 text-right">
                    <button className="p-2 hover:bg-gray-200 rounded">
                      |||
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <span>Row</span>
          <select className="border p-1 rounded-md">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
                }`}
            >
              Previous
            </button>
            {[1, 2, 3, "...", 8, 9, 10].map((num, i) => (
              <button
                key={i}
                onClick={() => typeof num === "number" && setCurrentPage(num)}
                className={`px-3 py-1 border rounded-md ${currentPage === num ? "bg-indigo-500 text-white" : "hover:bg-gray-200"
                  }`}
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : ""
                }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
