import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { APP_ROUTES } from "../../../config/Constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../../../Context/UserContext";

const schema = yup.object().shape({
  password: yup.string()
    .required('New Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const ResetPassword = () => {
  const { resetMutation } = useUser()
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });
  const { id } = useParams();



  const onSubmit = async (data) => {
    try {
      const params = {
        token: id,
        password: data.password
      }
      const response = await resetMutation.mutateAsync(params);
      if (response.success) {
        navigate(APP_ROUTES.LOGIN);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 ">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Reset Password</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
                {...register("password")}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
            </div>


            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
              disabled={resetMutation.isLoading}
            >
              {resetMutation.isLoading ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;
