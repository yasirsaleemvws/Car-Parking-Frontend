import React, { useState } from "react";
import SignupBanner from "../../../components/SignupBanner";
import BasicInfo from "./BasicInfo";
import Address from "./Address";
import ParkingInfo from "./ParkingInfo";

const Signup = () => {
    const [activeTab, setActiveTab] = useState("basic");

    return (
        <>
            <SignupBanner />
            <div className="flex items-center justify-center mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">

                        {/* Left - Form Section */}
                        <div className="p-0 lg:p-8 w-full lg:w-[70%]">
                            <h2 className="text-2xl font-bold text-gray-800">Register Company</h2>

                            {/* Tab Navigation */}
                            <div className="flex space-x-4 mt-4 border-b">
                                {["basic", "address", "parking"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-2 text-gray-600 border-b-2 transition py-1 px-4 rounded ${activeTab === tab ? "bg-purple-700 text-white font-medium" : "border-transparent"
                                            }`}
                                    >
                                        {tab === "basic" ? "Basic Info" : tab === "address" ? "Address" : "Parking Info"}
                                    </button>
                                ))}
                            </div>

                            {activeTab === "basic" && <BasicInfo setActiveTab={setActiveTab} />}
                            {activeTab === "address" && <Address setActiveTab={setActiveTab} />}
                            {activeTab === "parking" && <ParkingInfo />}
                        </div>

                        {/* Right - Image Section */}
                        <div className="hidden md:flex items-center justify-center ">
                            <img src="/signup.png" alt="Register Company" className="w-3/5" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
