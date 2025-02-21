import React from 'react'

const slot1 = [
    { id: 1, status: "occupied" },
    { id: 2, status: "occupied" },
    { id: 3, status: "free" },
    { id: 4, status: "occupied" },
    { id: 5, status: "free" },
    { id: 6, status: "reserved" },
    { id: 7, status: "occupied" },
    { id: 8, status: "free" },
    { id: 9, status: "occupied" },
    { id: 10, status: "occupied" },
    { id: 11, status: "reserved" },
    { id: 12, status: "occupied" },
];
const slot2 = [
    { id: 1, status: "free" },
    { id: 2, status: "occupied" },
    { id: 4, status: "occupied" },
    { id: 3, status: "free" },
    { id: 5, status: "free" },
    { id: 6, status: "reserved" },
    { id: 7, status: "occupied" },
    { id: 8, status: "free" },
    { id: 9, status: "occupied" },
    { id: 11, status: "reserved" },
    { id: 10, status: "free" },
    { id: 12, status: "occupied" },
];
const slot3 = [
    { id: 1, status: "occupied" },
    { id: 2, status: "occupied" },
    { id: 3, status: "free" },
    { id: 4, status: "occupied" },
    { id: 5, status: "free" },
    { id: 6, status: "reserved" },
    { id: 7, status: "occupied" },
    { id: 8, status: "occupied" },
    { id: 9, status: "occupied" },
    { id: 10, status: "occupied" },
    { id: 11, status: "occupied" },
    { id: 12, status: "occupied" },
];

const ParkingSlot = ({ status }) => {
    return (
        <div
            className={`min-h-[120px] border flex items-center justify-center rounded-md shadow-md text-[3rem] font-samibold
        ${status === "free" ? "bg-purple-200" : status === "reserved" ? "bg-purple-600 text-white" : "bg-gray-100"}`}
        >
            {status === "free" ? "P" : status === "reserved" ? "R" : <img src="/images/car.png" alt="Car" className="max-h-[100px]" />}
        </div>
    );
};
export default function View2D() {
    return (
        <div className="flex gap-4 justify-center mt-10" >
            <div className="flex flex-col items-center w-1/3">
                <h2 className="mb-2 text-[2rem] font-bold">A</h2>
                <div className="grid grid-cols-2 gap-4 w-[100%]">
                    {slot1.map((slot) => (
                        <ParkingSlot key={slot.id} status={slot.status} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
                <h2 className="mb-2 text-[2rem] font-bold">B</h2>
                <div className="grid grid-cols-2 gap-4 w-[100%]">
                    {slot2.map((slot) => (
                        <ParkingSlot key={slot.id} status={slot.status} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
                <h2 className="mb-2 text-[2rem] font-bold">C</h2>
                <div className="grid grid-cols-2 gap-4 w-[100%]">
                    {slot3.map((slot) => (
                        <ParkingSlot key={slot.id} status={slot.status} />
                    ))}
                </div>
            </div>
        </div >
    )
}
