import React from 'react'

export default function Profile() {
    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
            <form>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 mb-1">First Name</label>
                        <input className="border p-2 w-full rounded-md" type="text" placeholder="Enter First Name" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Last Name</label>
                        <input className="border p-2 w-full rounded-md" type="text" placeholder="Enter Last Name" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Email Address</label>
                    <input className="border p-2 w-full rounded-md" type="email" placeholder="emailaddress@email.com" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Your Photo</label>
                    <div className="border-dashed border-2 border-gray-300 p-6 rounded-md text-center cursor-pointer">
                        <span className="text-purple-500">Click to upload</span> or drag and drop
                        <p className="text-sm text-gray-500">PNG or JPG (max. 2MB | 272 x 130)</p>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Role</label>
                    <input className="border p-2 w-full rounded-md bg-gray-100" type="text" value="Parking Manager" readOnly />
                </div>
                <div className="flex justify-end space-x-2">
                    <button className="bg-gray-300 text-gray-700 p-2 rounded-md" type="button">Cancel</button>
                    <button className="bg-purple-500 text-white p-2 rounded-md" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}
