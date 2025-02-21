import React from "react";
import { FaArrowRightLong, FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "../../config/Constants";
import CustomAreaChart from "../../components/charts/CustomAreaChart";
import CustomBarChart from "../../components/charts/CustomBarChart";

const analyticsData = [
  { day: "S", value: 10 },
  { day: "M", value: 20 },
  { day: "T", value: 70 },
  { day: "W", value: 50 },
  { day: "T", value: 45 },
  { day: "F", value: 35 },
  { day: "S", value: 30 },
];

const withdrawData = [
  { day: "S", value: 50 },
  { day: "M", value: 70 },
  { day: "T", value: 55 },
  { day: "W", value: 65 },
  { day: "T", value: 40 },
  { day: "F", value: 60 },
  { day: "S", value: 50 },
];

const ParkingAnalytics = () => {
  const navigate = useNavigate()
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Parking Analytics</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer" onClick={() => navigate(ADMIN_ROUTES.AVG_PARKING)}>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Avg. Parking Duration</span>
            <FaArrowRightLong className="text-gray-400" size={16} />
          </div>
          <h3 className="text-xl font-semibold mt-2">3hrs</h3>
          <span className="text-green-500 text-sm flex items-center mt-1">
            <FaArrowUpLong size={14} className="mr-1" /> 20% vs last week
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer" onClick={() => navigate(ADMIN_ROUTES.PEAK_TRAFFIC)}>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Peak Traffic Time</span>
            <FaArrowRightLong className="text-gray-400" size={16} />
          </div>
          <h3 className="text-xl font-semibold mt-2">11:00 am - 01:00 pm</h3>
          <span className="text-gray-500 text-sm block mt-1">
            12:00 am - 03:00 pm
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer" onClick={() => navigate(ADMIN_ROUTES.AVG_VEHICLE)}>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Avg. Vehicle Parked</span>
            <FaArrowRightLong className="text-gray-400" size={16} />
          </div>
          <h3 className="text-xl font-semibold mt-2">80</h3>
          <span className="text-green-500 text-sm flex items-center mt-1">
            <FaArrowUpLong size={14} className="mr-1" /> 20% vs last month
          </span>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer" onClick={() => navigate(ADMIN_ROUTES.AVG_OCCUPANCY)}>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Avg. Occupancy Rate</span>
            <FaArrowRightLong className="text-gray-400" size={16} />
          </div>
          <h3 className="text-xl font-semibold mt-2">80%</h3>
          <span className="text-red-500 text-sm flex items-center mt-1">
            <FaArrowDownLong size={14} className="mr-1" /> 20% vs last week
          </span>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-600">Total Revenue</h3>
              <h2 className="text-xl font-semibold">$824,458.65</h2>
            </div>
            <div className="flex space-x-2">
              <span className="text-purple-600 text-sm flex items-center">
                <input type="radio" name="revenue" checked className="mr-1" /> Weekly
              </span>
              <span className="text-gray-500 text-sm flex items-center">
                <input type="radio" name="revenue" className="mr-1" /> Monthly
              </span>
              <FaArrowRightLong className="text-gray-400" size={18} />
            </div>
          </div>
          <CustomAreaChart data={analyticsData} height={400} stroke={"#089540"} fill={"#84FFB5"} />
        </div>

        {/* Withdraw Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-600">Withdraw</h3>
              <h2 className="text-xl font-semibold">$456,68</h2>
            </div>
            <div className="flex space-x-2">
              <span className="text-purple-600 text-sm flex items-center">
                <input type="radio" name="withdraw" checked className="mr-1" /> Weekly
              </span>
              <span className="text-gray-500 text-sm flex items-center">
                <input type="radio" name="withdraw" className="mr-1" /> Monthly
              </span>
              <IoMdMore className="text-gray-800" size={18} />
            </div>
          </div>
          <CustomBarChart data={withdrawData} height={400} fill={'#7B1FA2'} />
        </div>
      </div>
    </div>
  );
};

export default ParkingAnalytics;
