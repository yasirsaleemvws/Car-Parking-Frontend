import React, { useState } from 'react';
// import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCloudDownloadOutline, IoFilter, IoSwapVertical } from "react-icons/io5";

export default function CustomFilters({ title, setSearch, sort, setSort }) {
    const [input, setInput] = useState('');

    // Handle input change
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    // Handle search button click
    const handleSearch = () => {
        setSearch(input.trim());
    };

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between p-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="flex items-center space-x-2">
                <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500 text-xl">
                        <CiSearch className="text-xl" />
                    </span>

                    <input
                        type="text"
                        placeholder="Search..."
                        value={input}
                        onChange={handleInputChange}
                        className="pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <button
                    className="p-2 border rounded-md hover:bg-gray-200 text-xl"
                    onClick={handleSearch}
                >
                    <IoFilter />
                </button>
                {/* <button className="p-2 border rounded-md hover:bg-gray-200 text-xl" onClick={() => setSort(!sort)}>
                    <RiSwap2Line />
                </button> */}
                <button
                    className="p-2 border rounded-md hover:bg-gray-200 text-xl"
                    onClick={() => setSort(!sort)}
                >
                    <IoSwapVertical />
                </button>
                <button className="p-2 border rounded-md hover:bg-gray-200 flex items-center">
                    <IoCloudDownloadOutline className="text-xl" />
                    <span className="ml-2"> Export </span>
                    {/* <span className="ml-4"> <FaChevronDown /> </span> */}
                </button>
            </div>
        </div>
    );
}
