import React from 'react';

const SLOTS = {
    A: [
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
    ],
    B: [
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
    ],
    C: [
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
    ],
};

const ParkingSlot = ({ status }) => {
    const getSlotStyle = () => {
        switch (status) {
            case "free":
                return "bg-purple-200";
            case "reserved":
                return "bg-purple-600 text-white";
            default:
                return "bg-gray-100";
        }
    };

    const getSlotContent = () => {
        switch (status) {
            case "free":
                return "P";
            case "reserved":
                return "R";
            default:
                return <img src="/images/car.png" alt="Car" className="max-h-[100px]" />;
        }
    };

    return (
        <div
            className={`min-h-[120px] border flex items-center justify-center rounded-md shadow-md text-4xl font-samibold ${getSlotStyle()}`}
        >
            {getSlotContent()}
        </div>
    );
};

export default function View2D() {
    return (
        <div className="flex gap-4 justify-center mt-10">
            {Object.entries(SLOTS).map(([slotName, slots]) => (
                <div key={slotName} className="flex flex-col items-center w-1/3">
                    <h2 className="mb-2 text-lg font-bold bg-purple-200 text-purple-700 px-8 rounded-full">{slotName}</h2>
                    <div className="grid grid-cols-2 gap-4 w-[100%]">
                        {slots.map((slot) => (
                            <ParkingSlot key={slot.id} status={slot.status} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}