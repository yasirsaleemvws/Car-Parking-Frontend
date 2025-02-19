import React from 'react'

export default function SettingMenu() {
    return (
        <div className="sidebar w-1/4 bg-gray-100 p-4">
            <ul>
                <li className="active text-blue-500 font-bold">Profile</li>
                <li className="text-gray-700 hover:text-blue-500">Company Profile</li>
                <li className="text-gray-700 hover:text-blue-500">Password</li>
                <li className="text-gray-700 hover:text-blue-500">Notifications</li>
                <li className="text-gray-700 hover:text-blue-500">Display</li>
            </ul>
        </div>
    )
}
