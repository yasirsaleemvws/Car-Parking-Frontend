import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../config/Constants";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { POST__LOGIN } from "../../../api/PublicApi";
import { toast } from "react-toastify";
import { Input, Checkbox } from "antd";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  remember: yup.boolean(),
});

const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const mutation = useMutation(
    async (data) => {
      const response = await POST__LOGIN(data);
      return response;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem("userInfo", JSON.stringify(data?.data));
        toast.success(data.message);
        navigate(APP_ROUTES.PARKING);
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Login failed");
      },
    }
  );

  const onSubmit = async (data) => {
    mutation.mutateAsync(data);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Welcome back</h2>
          <p className="text-gray-500 text-sm mb-6 text-center">Welcome back! Please enter your details</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium">Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
                  />
                )}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium">Password</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    placeholder="••••••••"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
                  />
                )}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between text-sm mb-4">
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value}>Remember for 30 days</Checkbox>
                )}
              />
              <Link to={APP_ROUTES?.FORGET_PASSWORD} className="text-purple-600 hover:underline">Forgot password?</Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? "Signing in..." : "Sign in"}
            </button>

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
