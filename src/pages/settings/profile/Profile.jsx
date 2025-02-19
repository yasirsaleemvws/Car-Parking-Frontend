import React from 'react'

export default function Profile() {
    return (
        <div className="content w-3/4 p-4">
            <h2 className="text-xl font-samibold mb-4">Personal Info</h2>
            <form>
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input className="border p-2 w-full mb-2" type="text" placeholder="Enter First Name" />
                    <input className="border p-2 w-full" type="text" placeholder="Enter Last Name" />
                </div>
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input className="border p-2 w-full" type="email" placeholder="emailaddress@email.com" />
                </div>
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Your Photo</label>
                    <div className="photo-upload border-dashed border-2 border-gray-300 p-4 text-center">
                        <span>Click to upload or drag and drop</span>
                        <span className="block text-sm text-gray-500">PNG or JPG (max. 2mb | 272 x 130)</span>
                    </div>
                </div>
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Role</label>
                    <input className="border p-2 w-full" type="text" value="Parking Manager" readOnly />
                </div>
                <div className="form-actions">
                    <button className="bg-gray-500 text-white p-2 mr-2" type="button">Cancel</button>
                    <button className="bg-blue-500 text-white p-2" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}
