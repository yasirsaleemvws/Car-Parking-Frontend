import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { POST_PROFILE } from '../../../api/PrivateApi';

export default function Profile() {
    const [selectedFile, setSelectedFile] = useState(null);

    // API Mutation
    const mutation = useMutation(POST_PROFILE, {
        onSuccess: () => {
            toast.success('Profile updated successfully!');
        },
        onError: (error) => {
            toast.error(error?.message);
        },
    });

    // Validation Schema
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
    });

    // Formik Form
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append('firstName', values.firstName);
            formData.append('lastName', values.lastName);
            formData.append('email', values.email);
            if (selectedFile) {
                formData.append('profileImage', selectedFile);
            }

            mutation.mutate(formData);
        },
    });

    // Handle File Selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert('File size exceeds 2MB limit!');
                return;
            }
            setSelectedFile(file);
        }
    };

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-4 mb-4 min-h-[40vh]">

                    {/* Name Fields */}
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Name</label>
                        <div className="flex gap-4 w-full">
                            <input
                                className="border p-2 w-full rounded-md"
                                type="text"
                                placeholder="Enter First Name"
                                name="firstName"
                                {...formik.getFieldProps("firstName")}
                            />
                            <input
                                className="border p-2 w-full rounded-md"
                                type="text"
                                placeholder="Enter Last Name"
                                name="lastName"
                                {...formik.getFieldProps("lastName")}
                            />
                        </div>
                    </div>
                    {formik.touched.firstName && formik.errors.firstName && (
                        <div className="text-red-500">{formik.errors.firstName}</div>
                    )}
                    {formik.touched.lastName && formik.errors.lastName && (
                        <div className="text-red-500">{formik.errors.lastName}</div>
                    )}

                    {/* Email Field */}
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Email Address</label>
                        <input
                            className="border p-2 w-full rounded-md"
                            type="email"
                            placeholder="emailaddress@email.com"
                            name="email"
                            {...formik.getFieldProps("email")}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500">{formik.errors.email}</div>
                    )}

                    {/* File Upload (Photo) */}
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Your Photo</label>
                        <div className="border-dashed border-2 border-gray-300 p-6 rounded-md text-center cursor-pointer w-full relative">
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                accept="image/png, image/jpeg"
                                onChange={handleFileChange}
                            />
                            {selectedFile ? (
                                <img src={URL.createObjectURL(selectedFile)} alt="Profile Preview" className="w-24 h-24 mx-auto rounded-full" />
                            ) : (
                                <>
                                    <span className="text-purple-500">Click to upload</span> or drag and drop
                                    <p className="text-sm text-gray-500">PNG or JPG (max. 2MB | 272 x 130)</p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Role Field (Disabled) */}
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Role</label>
                        <input
                            className="border p-2 w-full rounded-md bg-gray-100 text-gray-500"
                            type="text"
                            value="Parking Manager"
                            disabled
                            readOnly
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-purple-500 text-white p-2 rounded-md min-w-[120px]"
                        type="submit"
                        disabled={mutation.isLoading}
                    >
                        {mutation.isLoading ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </form>
        </>
    );
}
