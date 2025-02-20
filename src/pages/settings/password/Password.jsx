import React from 'react'

export default function Password() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Password</h2>
      <form>
        <div className="flex flex-col gap-4 mb-4 min-h-[40vh]">
          <div className="flex gap-4 items-center">
            <label className="block text-gray-700 w-1/4">Current Password</label>
            <input
              className="border p-2 w-full rounded-md"
              type="password"
              placeholder="Enter Current Password"
            />
          </div>
          <div className="flex gap-4 items-center">
            <label className="block text-gray-700 w-1/4">Password</label>
            <input
              className="border p-2 w-full rounded-md"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex gap-4 items-center">
            <label className="block text-gray-700 w-1/4">Confirm Password</label>
            <input
              className="border p-2 w-full rounded-md"
              type="password"
              placeholder="Enter Confirm Password"
            />
          </div>

        </div>
          <div className="flex justify-end space-x-2">
            <button className="bg-white text-purple-700 p-2 rounded-md min-w-[120px] border-purple-500 border" type="button">
              Cancel
            </button>
            <button className="bg-purple-500 text-white p-2 rounded-md min-w-[120px]" type="submit">
              Save
            </button>
          </div>
      </form>

    </div>
  )
}
