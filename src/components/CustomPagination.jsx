import React from 'react'

export default function CustomPagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex items-center justify-between m-4 pb-6">
            <div>
                <span>Row</span>
                <select className="border p-1 rounded-md ml-2">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                </select>
            </div>
            <div className="flex items-center space-x-1">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
                        }`}
                >
                    Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => onPageChange(i + 1)}
                        className={`px-3 py-1 border rounded-md ${currentPage === i + 1 ? "bg-indigo-500 text-white" : "hover:bg-gray-200"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : ""
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
