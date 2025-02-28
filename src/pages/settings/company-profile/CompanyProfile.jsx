import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { POST_COMPANY_PROFILE } from "../../../api/PrivateApi";

export default function CompanyProfile() {
    const [fileName, setFileName] = useState("");

    // API call function
    const saveCompanyProfile = async (values) => {
        const formData = new FormData();
        formData.append("companyName", values.companyName);
        formData.append("email", values.email);
        if (values.companyLogo) {
            formData.append("companyLogo", values.companyLogo);
        }

        const response = await POST_COMPANY_PROFILE(formData);
        return response.data;
    };

    // React Query Mutation
    const mutation = useMutation(saveCompanyProfile, {
        onSuccess: (data) => {
            alert("Company profile saved successfully!");
            console.log("Response Data:", data);
        },
        onError: (error) => {
            console.error("Error saving profile:", error);
        },
    });

    // Formik Form
    const formik = useFormik({
        initialValues: {
            companyName: "",
            email: "",
            companyLogo: null,
        },
        validationSchema: Yup.object({
            companyName: Yup.string().required("Company Name is required"),
            email: Yup.string().email("Invalid email format").required("Email is required"),
            companyLogo: Yup.mixed()
                .test("fileSize", "File size must be less than 2MB", (file) => !file || file.size <= 2 * 1024 * 1024)
                .test("fileType", "Only PNG or JPG files are allowed", (file) =>
                    !file || ["image/png", "image/jpeg"].includes(file.type)
                ),
        }),
        onSubmit: (values) => {
            mutation.mutate(values);
        },
    });

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Company Information</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-4 mb-4 min-h-[40vh]">
                    {/* Company Name */}
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Company Name</label>
                        <input
                            className="border p-2 w-full rounded-md"
                            type="text"
                            placeholder="abc..."
                            {...formik.getFieldProps("companyName")}
                        />
                    </div>
                    {formik.touched.companyName && formik.errors.companyName && (
                        <p className="text-red-600">{formik.errors.companyName}</p>
                    )}

                    {/* Email Address */}
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Email Address</label>
                        <input
                            className="border p-2 w-full rounded-md"
                            type="email"
                            placeholder="emailaddress@email.com"
                            {...formik.getFieldProps("email")}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email && <p className="text-red-600">{formik.errors.email}</p>}

                    {/* File Upload */}
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Company Logo</label>
                        <div className="border-dashed border-2 border-gray-300 p-6 rounded-md text-center cursor-pointer w-full relative">
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    formik.setFieldValue("companyLogo", file);
                                    setFileName(file ? file.name : "");
                                }}
                            />
                            <span className="text-purple-500">Click to upload</span> or drag and drop
                            <p className="text-sm text-gray-500">PNG or JPG (max. 2MB | 272 x 130)</p>
                            {fileName && <p className="text-gray-600 mt-2">{fileName}</p>}
                        </div>
                    </div>
                    {formik.touched.companyLogo && formik.errors.companyLogo && (
                        <p className="text-red-600">{formik.errors.companyLogo}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-2">
                    <button
                        type="submit"
                        className="bg-purple-500 text-white p-2 rounded-md min-w-[120px]"
                        disabled={mutation.isLoading}
                    >
                        {mutation.isLoading ? "Saving..." : "Save"}
                    </button>
                </div>
            </form>
        </>
    );
}
