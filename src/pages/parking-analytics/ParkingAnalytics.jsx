import React from "react";
import { FaArrowRightLong, FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../config/Constants";
import CustomAreaChart from "../../components/charts/CustomAreaChart";
import CustomBarChart from "../../components/charts/CustomBarChart";
import { area_chart_data, bar_chart_data2 } from "../../config/Constants";

const analytics_card = [
  {
    id: 1,
    title: "Avg. Parking Duration",
    value: "3hrs",
    trend: "20% vs last week",
    trendIcon: <FaArrowUpLong size={14} className="mr-1" />,
    trendColor: "text-green-500",
    navigateTo: APP_ROUTES.AVG_PARKING,
  },
  {
    id: 2,
    title: "Peak Traffic Time",
    value: "11:00 am - 01:00 pm",
    extraInfo: "12:00 am - 03:00 pm",
    navigateTo: APP_ROUTES.PEAK_TRAFFIC,
  },
  {
    id: 3,
    title: "Avg. Vehicle Parked",
    value: "80",
    trend: "20% vs last month",
    trendIcon: <FaArrowUpLong size={14} className="mr-1" />,
    trendColor: "text-green-500",
    navigateTo: APP_ROUTES.AVG_VEHICLE,
  },
  {
    id: 4,
    title: "Avg. Occupancy Rate",
    value: "80%",
    trend: "20% vs last week",
    trendIcon: <FaArrowDownLong size={14} className="mr-1" />,
    trendColor: "text-red-500",
    navigateTo: APP_ROUTES.AVG_OCCUPANCY,
  },
];


const ParkingAnalytics = () => {
  const navigate = useNavigate()
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Parking Analytics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {analytics_card.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
            onClick={() => navigate(card.navigateTo)}
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{card.title}</span>
              <FaArrowRightLong className="text-gray-400" size={16} />
            </div>
            <h3 className="text-xl font-semibold mt-2">{card.value}</h3>
            {card.trend && (
              <span className={`${card.trendColor} text-sm flex items-center mt-1`}>
                {card.trendIcon} {card.trend}
              </span>
            )}
            {card.extraInfo && <span className="text-gray-500 text-sm block mt-1">{card.extraInfo}</span>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          <CustomAreaChart data={area_chart_data} height={400} stroke={"#089540"} fill={"#84FFB5"} />
        </div>

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
          <CustomBarChart data={bar_chart_data2} height={400} fill={'#7B1FA2'} />
        </div>
      </div>
    </>
  );
};

export default ParkingAnalytics;
