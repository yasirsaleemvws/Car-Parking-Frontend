import React from 'react'
const parkingSlots = [
    { id: 1, status: "occupied" },
    { id: 2, status: "reserved" },
    { id: 3, status: "free" },
    { id: 4, status: "occupied" },
    { id: 5, status: "free" },
    { id: 6, status: "reserved" },
];

const ParkingSlot = ({ status }) => {
    return (
        <div
            className={`min-w-[200px] min-h-[200px] border flex items-center justify-center rounded-md shadow-md text-[3rem] font-samibold
        ${status === "free" ? "bg-purple-200" : status === "reserved" ? "bg-purple-600 text-white" : "bg-gray-300"}`}
        >
            {status === "free" ? "P" : status === "reserved" ? "R" : <img src="/images/car.png" alt="Car" className="" />}
        </div>
    );
};
export default function View2D() {
    return (
        <div className="flex gap-4 justify-center mt-10" >
            {
                ["A", "B", "C"].map((section, index) => (
                    <div key={index} className="flex flex-col items-center w-1/3">
                        <h2 className="mb-2 text-[2rem] font-bold">{section}</h2>
                        <div className="grid grid-cols-2 gap-4 w-100">
                            {parkingSlots.map((slot) => (
                                <ParkingSlot key={slot.id} status={slot.status} />
                            ))}
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
