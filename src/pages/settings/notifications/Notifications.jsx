import React, { useState } from "react";
import { Switch } from 'antd';

export default function Notifications() {
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [priority, setPriority] = useState(false);

    const onChange = (number) => {

        if (number == 1) {
            setEmailNotifications(!emailNotifications)
        } else if (number == 2) {
            setSmsNotifications(!smsNotifications)
        } else if (number == 3) {
            setPushNotifications(!pushNotifications)
        }
    };

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Notifications Preferences</h2>
            <form>
                <div className="flex flex-col mb-4 min-h-[40vh]">
                    {/* Email Notification */}
                    <div className="flex justify-between items-center mb-3 border-b border-gray-300 pb-4">
                        <span className="text-gray-700">Turn on Notification</span>
                        <Switch onChange={() => onChange(1)} />
                    </div>

                    {/* Show fields when Email Notification is enabled */}
                    {emailNotifications && (
                        <div className="my-6">
                            <div className=" flex justify-between items-center">
                                <label className="block text-gray-700 w-1/4">In App</label>
                                <div className="flex gap-4">
                                    <label className="block text-gray-700" htmlFor="enable">Enable</label>
                                    <input type="radio" name="enable" />
                                    <label className="block text-gray-700" htmlFor="disable">Disable</label>
                                    <input type="radio" name="disable" />
                                </div>
                            </div>
                            <div className=" flex justify-between items-center my-6">
                                <label className="block text-gray-700 w-1/4">Email</label>
                                <div className="flex gap-4">
                                    <label className="block text-gray-700" htmlFor="enable">Enable</label>
                                    <input type="radio" name="enable" />
                                    <label className="block text-gray-700" htmlFor="disable">Disable</label>
                                    <input type="radio" name="disable" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SMS Notification */}
                    <div className="flex justify-between items-center mb-3  border-b border-gray-300 pb-4">
                        <span className="text-gray-700">Parking Report</span>
                        <Switch onChange={() => onChange(2)} />
                    </div>

                    {/* Show fields when SMS Notification is enabled */}
                    {smsNotifications && (
                        <div className="my-6">
                            <div className=" flex justify-between items-center">
                                <label className="block text-gray-700 w-1/4">Parking Entry</label>
                                <Switch />
                            </div>
                            <div className=" flex justify-between items-center my-6">
                                <label className="block text-gray-700 w-1/4">Wrong Parkers</label>
                                <div className="flex gap-4">
                                    <label className="block text-gray-700" htmlFor="color">Select Color</label>
                                    <input type="color" name="color" value="#ff0000" className="rounded-full w-[25px] h-[25px]" />
                                    <Switch />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Push Notification */}
                    <div className="flex justify-between items-center mb-3  border-b border-gray-300 pb-4">
                        <span className="text-gray-700">Occupancy</span>
                        <Switch onChange={() => onChange(3)} />
                    </div>

                    {/* Show fields when Push Notification is enabled */}
                    {pushNotifications && (
                        <div className="my-6">
                            <div className=" flex justify-between items-center">
                                <label className="block text-gray-700 w-1/4">Parking </label>
                                <Switch />
                            </div>
                            <div className=" flex justify-between items-center my-6">
                                <label className="block text-gray-700 w-1/4">Notify me when occupancy rate reaches</label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-4">
                                        <select className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300">
                                            <option value="">Parking Area (A)</option>
                                            <option value="">Parking Area (B)</option>
                                            <option value="">Parking Area (C)</option>
                                        </select>
                                        <div className="p-2 border rounded-md hover:bg-gray-200 text-xl">200</div>
                                    </div>
                                    <div className="flex gap-4">
                                        <select className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300">
                                            <option value="">Parking Area (C)</option>
                                            <option value="">Parking Area (D)</option>
                                            <option value="">Parking Area (E)</option>
                                        </select>
                                        <div className="p-2 border rounded-md hover:bg-gray-200 text-xl">200</div>
                                    </div>
                                    <div className="flex gap-4">
                                        <select className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300">
                                            <option value="">Parking Area (C)</option>
                                            <option value="">Parking Area (D)</option>
                                            <option value="">Parking Area (E)</option>
                                        </select>
                                        <div className="p-2 border rounded-md hover:bg-gray-200 text-xl">200</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

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

        </>
    );
}
