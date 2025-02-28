import React from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../config/Constants";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { POST__FORGET_PASSWORD } from "../../../api/PublicApi";
import { useMutation } from "react-query";
import { Input } from "antd";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
});

const ForgetPassword = () => {
  const { control, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const forgetMutation = useMutation(
    async (data) => {
      const response = await POST__FORGET_PASSWORD(data);
      return response;
    }, {
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      console.log("Error:", error?.message);
      
      toast.error(error?.message);
    },
  }
  );

  const onSubmit = async (data) => {
    forgetMutation.mutateAsync(data);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 ">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Forget Password</h2>
          <p className="text-gray-500 text-sm mb-6 text-center">Enter your Email to reset password</p>

          <form onSubmit={handleSubmit(onSubmit)}>
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

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
              disabled={forgetMutation.isLoading}
            >
              {forgetMutation.isLoading ? "Forget Password..." : "Forget Password"}
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              Go back to <Link to={APP_ROUTES?.LOGIN} className="text-purple-600 hover:underline">Login</Link>
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

export default ForgetPassword;
