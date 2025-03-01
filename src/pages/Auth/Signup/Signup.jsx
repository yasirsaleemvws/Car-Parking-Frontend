import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import Address from "./Address";
import ParkingInfo from "./ParkingInfo";
import { APP_ROUTES } from "../../../config/Constants";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { POST__REGISTER } from "../../../api/PublicApi";
import { toast } from "react-toastify";

const Signup = () => {
    const [activeTab, setActiveTab] = useState("basic");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        basicInfo: { name: "", email: "", regNumber: "", businessType: "" },
        address: { country: "", city: "", state: "", zip: "", address: "", street: "", apartment: "" },
        parkingInfo: [],
    });

    const [errors, setErrors] = useState({});

    const registerMutation = useMutation(
        async (data) => {
            const response = await POST__REGISTER(data);
            return response;
        },
        {
            onSuccess: (data) => {
                toast.success(data.message);
                navigate(APP_ROUTES.LOGIN);
            },
            onError: (error) => {
                toast.error(error?.message);
            },
        }
    );

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

        if (step === "basicInfo") {
            Object.keys(formData.basicInfo).forEach((field) => {
                if (!formData.basicInfo[field]) {
                    newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
                    isValid = false;
                }
            });

            // Password match validation
            if (formData.basicInfo.password !== formData.basicInfo.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match";
                isValid = false;
            }
        } else if (step === "parking") {
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
                registerMutation.mutateAsync(formData);
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
                            {activeTab === "parking" && <ParkingInfo formData={formData} handleChange={handleChange} errors={errors.parking} handleNext={handleNext} loading={registerMutation.isLoading} />}
                            <p className="text-center text-gray-600 text-sm mt-4">
                                Go back to <Link to={APP_ROUTES?.LOGIN} className="text-purple-600 hover:underline">Login</Link>
                            </p>
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
