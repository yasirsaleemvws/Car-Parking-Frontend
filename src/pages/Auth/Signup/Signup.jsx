import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import Address from "./Address";
import ParkingInfo from "./ParkingInfo";
import { useUser } from "../../../Context/UserContext";
import { APP_ROUTES } from "../../../config/Constants";

const Signup = () => {
    const { registerMutation } = useUser()
    const [activeTab, setActiveTab] = useState("basic");

    const [formData, setFormData] = useState({
        basicInfo: { companyName: "", email: "", regNumber: "", businessType: "" },
        address: { country: "", city: "", state: "", zip: "", address: "", street: "", apartment: "" },
        parkingInfo: [],
    });

    const [errors, setErrors] = useState({});


    const validateField = (step, field, value) => {
        let errorMsg = "";

        if (!value) {
            errorMsg = `${field.replace(/([A-Z])/g, " $1")} is required`;
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [step]: { ...prevErrors[step], [field]: errorMsg },
        }));
    };

    const handleChange = (step, field, value, index = null) => {
        setFormData((prev) => {
            if (step === "parkingInfo") {
                const updatedParking = prev.parkingInfo ? [...prev.parkingInfo] : []; // ✅ Ensure array exists

                if (!updatedParking[index]) {
                    updatedParking[index] = {};
                }

                updatedParking[index][field] = value;
                return { ...prev, parkingInfo: updatedParking };
            }
            return { ...prev, [step]: { ...prev[step], [field]: value } };

        });

        validateField(step, field, value);
    };

    const validateStep = (step) => {
        let newErrors = {};
        let isValid = true;

        if (step === "parking") {
            formData.parkingInfo.forEach((area, index) => {
                let areaErrors = {};
                Object.keys(area).forEach((field) => {
                    if (!area[field]) {
                        areaErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
                        isValid = false;
                    }
                });
                newErrors[index] = areaErrors;
            });
        } else {
            Object.keys(formData[step]).forEach((field) => {
                if (!formData[step][field]) {
                    newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
                    isValid = false;
                }
            });
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [step]: newErrors,
        }));

        return isValid;
    };

    const handleNext = async (step, event) => {
        if (validateStep(step)) {
            if (step === "basicInfo") setActiveTab("address");
            if (step === "address") setActiveTab("parking");
            if (step === "parking") {
                try {
                    const response = await registerMutation.mutateAsync(formData);
                    if (response.success) {
                        navigate(APP_ROUTES.LOGIN);
                    }
                } catch (error) {
                    console.error("Login failed:", error);
                }
            }
        }
    };

    return (
        <>
            <img src="/images/banner.png" alt="" className='w-[100vw] h-[300px]' />
            <div className="flex items-center justify-center mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
                        <div className="p-0 lg:p-8 w-full lg:w-[70%]">
                            <h2 className="text-2xl font-bold text-gray-800">Register Company</h2>

                            <div className="flex space-x-4 mt-4 border-b">
                                {["basic", "address", "parking"].map((tab) => (
                                    <button
                                        key={tab}
                                        disabled={tab !== "basic" && tab !== activeTab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-2 text-gray-600 border-b-2 transition py-1 px-4 rounded ${activeTab === tab ? "bg-purple-700 text-white font-medium" : "border-transparent"}`}
                                    >
                                        {tab === "basic" ? "Basic Info" : tab === "address" ? "Address" : "Parking Info"}
                                    </button>
                                ))}
                            </div>

                            {activeTab === "basic" && <BasicInfo formData={formData} handleChange={handleChange} errors={errors.basicInfo} handleNext={handleNext} />}
                            {activeTab === "address" && <Address formData={formData} handleChange={handleChange} errors={errors.address} handleNext={handleNext} />}
                            {activeTab === "parking" && <ParkingInfo formData={formData} handleChange={handleChange} errors={errors.parking} handleNext={handleNext} />}
                        </div>

                        <div className="hidden md:flex items-center justify-center mb-6">
                            <img src="/images/reg-card.png" alt="Register Company" className="w-3/6" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
