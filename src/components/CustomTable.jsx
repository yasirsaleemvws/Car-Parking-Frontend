import React from 'react'
import { IoMdMore } from "react-icons/io";

export default function CustomTable({ data }) {
    return (
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
                                <button className="p-2 border rounded-md hover:bg-gray-200 rounded text-2xl">
                                    <IoMdMore />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
