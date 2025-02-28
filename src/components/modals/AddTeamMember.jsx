import React from 'react';
import { Modal, Input, Button, Select } from "antd";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { POST_TEAM_MEMBER } from '../../api/PrivateApi';
import { toast } from 'react-toastify';

const { Option } = Select;

export default function AddTeamMemberModal({ visible, onClose, onSave, user }) {
    const availableRoles = user?.role === "company" ? ["Manager", "Member"] : ["Member"];

    // Validation Schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("First name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        role: Yup.string().required("Please select a role"),
    });

    // React Query Mutation
    const mutation = useMutation(
        async (formData) => {
            return await POST_TEAM_MEMBER(formData);
        },
        {
            retry: false,
            onSuccess: (data) => {
                toast.success(data.message);
                formik.resetForm();
                onSave();
                onClose();
            },
            onError: (error) => {
                toast.error(error?.message);
            }
        }
    );


    // Formik for Form Handling
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            role: "",
        },
        validationSchema,
        onSubmit: (values) => {
            mutation.mutate(values);
        },
    });

    return (
        <Modal
            open={visible}
            onCancel={onClose}
            footer={null}
            centered
            className="rounded-lg max-w-[400px]"
        >
            <div className="p-2 rounded-lg">
                <div className="flex items-center mb-4">
                    <img src="/images/icons/files.png" alt="Icon" className="w-10 h-10 mr-3" />
                    <h2 className="text-lg font-semibold">Add Team Member</h2>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <label className="text-gray-700">First Name <span className='text-red-600'>*</span></label>
                        <Input
                            name="name"
                            placeholder="Enter Member Name"
                            className="w-full px-3 py-2 rounded-md text-gray-700 border border-gray-600"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-red-500 text-sm">{formik.errors.name}</div>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="text-gray-700">Email <span className='text-red-600'>*</span></label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Enter Member Email"
                            className="w-full px-3 py-2 rounded-md text-gray-700 border border-gray-600"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="text-gray-700">Password <span className='text-red-600'>*</span></label>
                        <Input.Password
                            name="password"
                            placeholder="Enter Password"
                            className="w-full px-3 py-2 rounded-md text-gray-700 border border-gray-600"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="text-red-500 text-sm">{formik.errors.password}</div>
                        )}
                    </div>

                    {/* Role Selection */}
                    <div className="mb-4">
                        <label className="text-gray-700">Select Role <span className='text-red-600'>*</span></label>
                        <Select
                            name="role"
                            className="w-full px-3 py-2 rounded-md text-gray-700 border border-gray-600 h-[40px]"
                            placeholder="Select Role"
                            value={formik.values.role}
                            onChange={(value) => formik.setFieldValue("role", value)}
                            onBlur={() => formik.setFieldTouched("role", true)}
                        >
                            {availableRoles.map(role => (
                                <Option key={role} value={role}>{role}</Option>
                            ))}
                        </Select>
                        {formik.touched.role && formik.errors.role && (
                            <div className="text-red-500 text-sm">{formik.errors.role}</div>
                        )}
                    </div>

                    {/* Save Button */}
                    <div className="mt-4">
                        <Button
                            type="primary"
                            className="w-full py-5 text-white bg-purple-600 hover:bg-purple-700 rounded-md text-lg font-semibold"
                            htmlType="submit"
                            loading={mutation.isLoading}
                            disabled={mutation.isLoading}
                        >
                            {mutation.isLoading ? "Saving..." : "Save"}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
