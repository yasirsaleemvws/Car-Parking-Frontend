import React from 'react'
import { useUser } from '../../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ADMIN_ROUTES } from '../../../config/Constants';

const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function AdminLogin() {
    const { adminLoginMutation } = useUser()
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = async (data) => {
        localStorage.setItem('role', "Admin")
        localStorage.setItem('token', "test Token")
        navigate(ADMIN_ROUTES.DASHBOARD);
        return
        try {
            const response = await adminLoginMutation.mutateAsync(data);
            if (response.success) {
                navigate(ADMIN_ROUTES.DASHBOARD);
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-purple-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center flex justify-center items-center">
                    <img src="/images/logo.png" className='w-[50px]' alt="" />
                    <span className='ml-4'>Admin Login</span>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
                            {...register("password")}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition mt-5"
                        disabled={adminLoginMutation.isLoading}
                    >
                        {adminLoginMutation.isLoading ? "Signing in..." : "Sign in"}
                    </button>

                    {adminLoginMutation.isError && (
                        <p className="text-red-500 text-xs mt-1">Login failed: {adminLoginMutation.error.response.data.message}</p>
                    )}
                </form>
            </div>
        </div>
    )
}
