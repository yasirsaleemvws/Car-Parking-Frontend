import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, APP_ROUTES } from "../../../config/Constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../../../Context/UserContext";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const { loginMutation } = useUser()
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data) => {
    try {
      const response = await loginMutation.mutateAsync(data);
      if (response.success ) {
        navigate(ADMIN_ROUTES.PARKING);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 ">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Welcome back</h2>
          <p className="text-gray-500 text-sm mb-6 text-center">Welcome back! Please enter your details</p>

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

            <div className="flex items-center justify-between text-sm mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember for 30 days
              </label>
              <a href="#" className="text-purple-600 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
              disabled={loginMutation.isLoading}
            >
              {loginMutation.isLoading ? "Signing in..." : "Sign in"}
            </button>

            {loginMutation.isError && (
              <p className="text-red-500 text-xs mt-1">Login failed: {loginMutation.error.response.data.message}</p>
            )}

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-2 text-gray-500 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              Don’t have an account? <Link to={APP_ROUTES?.SIGN_UP} className="text-purple-600 hover:underline">Sign up</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2">
        <img src="/images/login.png" alt="Parking" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
