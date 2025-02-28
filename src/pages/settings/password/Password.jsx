import React from 'react';
import { useMutation } from 'react-query'; // Fixed import path
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { POST_PASSWORD } from '../../../api/PrivateApi';
import { toast } from 'react-toastify';

// Validation Schema
const validationSchema = Yup.object({
  currentPassword: Yup.string().required('Current Password is required'),
  newPassword: Yup.string()
    .required('New Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function Password() {
  // React Query Mutation
  const mutation = useMutation(POST_PASSWORD, {
    onSuccess: () => {
      toast.success('Password updated successfully!');
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  // Formik Form
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Update Password</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-4 mb-4 min-h-[40vh]">

          {/* Current Password */}
          <div className="flex gap-4 items-center">
            <label className="block text-gray-700 w-1/4">Current Password</label>
            <div className="w-full">
              <input
                className="border p-2 w-full rounded-md"
                type="password"
                name="currentPassword"
                placeholder="Enter Current Password"
                {...formik.getFieldProps("currentPassword")}
              />
              {formik.touched.currentPassword && formik.errors.currentPassword && (
                <div className="text-red-500">{formik.errors.currentPassword}</div>
              )}
            </div>
          </div>

          {/* New Password */}
          <div className="flex gap-4 items-center">
            <label className="block text-gray-700 w-1/4">New Password</label>
            <div className="w-full">
              <input
                className="border p-2 w-full rounded-md"
                type="password"
                name="newPassword"
                placeholder="Enter New Password"
                {...formik.getFieldProps("newPassword")}
              />
              {formik.touched.newPassword && formik.errors.newPassword && (
                <div className="text-red-500">{formik.errors.newPassword}</div>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex gap-4 items-center">
            <label className="block text-gray-700 w-1/4">Confirm Password</label>
            <div className="w-full">
              <input
                className="border p-2 w-full rounded-md"
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-500">{formik.errors.confirmPassword}</div>
              )}
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-2">
          <button
            className="bg-purple-500 text-white p-2 rounded-md min-w-[120px]"
            type="submit"
            disabled={mutation.isLoading || !formik.isValid || !formik.dirty}
          >
            {mutation.isLoading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </>
  );
}
