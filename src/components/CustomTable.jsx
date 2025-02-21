import React from "react";
import { IoMdMore } from "react-icons/io";

export default function CustomTable({ headers, data, renderColumn }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg">
        {/* Table Head */}
        <thead>
          <tr className="border-b">
            {headers.map((header, index) => (
              <th key={index} className="p-3 text-left font-semibold">
                {header.label}
              </th>
            ))}
            <th className="p-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b hover:bg-gray-50">
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="p-3">
                  {renderColumn && renderColumn[header.key]
                    ? renderColumn[header.key](row[header.key], row)
                    : row[header.key]}
                </td>
              ))}
              <td className="p-3 text-center">
                <button className="p-2 border rounded-md hover:bg-gray-200 text-2xl">
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
