import React from 'react';
import { useMutation } from 'react-query';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GET__UPDATE_PASSWORD } from '../../../api/PrivateApi';


const validationSchema = Yup.object({
  currentPassword: Yup.string()
    .required('Current Password is required'),
  newPassword: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function Password() {
  const mutation = useMutation(GET__UPDATE_PASSWORD(), {
    onSuccess: () => {
      alert('Password updated successfully!');
    },
    onError: (error) => {
      alert('An error occurred: ' + error.message);
    },
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (!formik.isValid) {
        mutation.mutate(values);
      }
    },
  });

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Password</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-4 mb-4 min-h-[40vh]">
          <div className="flex gap-4 items-center">
            <label className="block text-gray-700 w-1/4">Current Password</label>
            <div className='w-full'>
              <input
                className="border p-2 w-full rounded-md"
                type="password"
                name="currentPassword"
                placeholder="Enter Current Password"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.currentPassword && formik.errors.currentPassword ? (
                <div className="text-red-500">{formik.errors.currentPassword}</div>
              ) : null}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <label className="block text-gray-700 w-1/4">Password</label>
            <div className='w-full'>
              <input
                className="border p-2 w-full rounded-md"
                type="password"
                name="newPassword"
                placeholder="Enter Password"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <div className="text-red-500">{formik.errors.newPassword}</div>
              ) : null}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <label className="block text-gray-700 w-1/4">Confirm Password</label>
            <div className='w-full'>
              <input
                className="border p-2 w-full rounded-md"
                type="password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="text-red-500">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
          </div>
        </div>
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
