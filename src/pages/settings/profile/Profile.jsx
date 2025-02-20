import React from 'react'

export default function Profile() {
    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
            <form>
                <div className="flex flex-col gap-4 mb-4">
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Name</label>
                        <div className='flex gap-4 w-full'>
                            <input
                                className="border p-2 w-full rounded-md"
                                type="text"
                                placeholder="Enter First Name"
                            />
                            <input
                                className="border p-2 w-full rounded-md"
                                type="text"
                                placeholder="Enter Last Name"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Email Address</label>
                        <input
                            className="border p-2 w-full rounded-md"
                            type="email"
                            placeholder="emailaddress@email.com"
                        />
                    </div>
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Your Photo</label>
                        <div className="border-dashed border-2 border-gray-300 p-6 rounded-md text-center cursor-pointer w-full relative">
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <span className="text-purple-500">Click to upload</span> or drag and drop
                            <p className="text-sm text-gray-500">PNG or JPG (max. 2MB | 272 x 130)</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Role</label>
                        <input
                            className="border p-2 w-full rounded-md bg-gray-100 text-gray-500"
                            type="text"
                            value="Parking Manager"
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button className="bg-white text-purple-700 p-2 rounded-md min-w-[120px] border-purple-500 border" type="button">
                            Cancel
                        </button>
                        <button className="bg-purple-500 text-white p-2 rounded-md min-w-[120px]" type="submit">
                            Save
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}
