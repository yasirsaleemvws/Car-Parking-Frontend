import { Drawer } from 'antd'
import React from 'react'

export default function CustomDrawer({ onClose, open }) {

    return (
        <div>
            <Drawer title="Parking Space" onClose={onClose} open={open}>
                <div className="mt-2 flex justify-between items-center bg-purple-100 p-2 rounded-lg">
                    <span className="text-gray-700 font-medium">Current Status</span>
                    <span className="font-semibold text-purple-700">IN</span>
                </div>
                <p className="text-sm text-gray-500">#A06</p>

                <div className="flex justify-center my-4">
                    <img src="/images/car.png" alt="Car Top View" className="w-32" />
                </div>

                <div className="text-center">
                    <h3 className="font-semibold">Dianne Russell</h3>
                    <div className="mt-2 flex justify-around text-sm">
                        <div>
                            <p className="text-gray-500">Premium Membership</p>
                            <p className="font-medium">30 Days</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Amount Payed</p>
                            <p className="font-medium">$220</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 border-t pt-4">
                    <h4 className="text-lg font-semibold mb-2">Details</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                        <div>
                            <p className="text-gray-500">License Plate Number</p>
                            <p className='font-bold'>ABC-1234</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Car Make</p>
                            <p className='font-bold'>Toyota</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Car Model</p>
                            <p className='font-bold'>Corolla</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Year of Manufacture</p>
                            <p className='font-bold'>2020</p>
                        </div>
                        <div>
                            <p className="text-gray-500">VIN</p>
                            <p className='font-bold'>1HGCM82633A123456</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Color of the Car</p>
                            <p className='font-bold'>White</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Contact Number</p>
                            <p className='font-bold'>+1-234-567-8900</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Parking Spot Number</p>
                            <p className='font-bold'>P-45</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t mt-4">
                    <button
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                        onClick={onClose}
                    >
                        Back
                    </button>
                </div>
            </Drawer>
        </div>
    )
}
