import React from 'react'

export default function Display() {
    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Display Mode</h2>
            <form>
                <div className="flex flex-col gap-4 mb-4 min-h-[40vh]">
                    <div className="flex gap-4 items-center">
                        <label className="block text-gray-700 w-1/4">Theme</label>
                        <div className='flex flex-col gap-2'>
                            <div className='w-[200px] flex justify-between px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300'>
                                <span>Light</span>
                                <input type="radio" />
                            </div>
                            <div className='w-[200px] flex justify-between px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300'>
                                <span>Dark</span>
                                <input type="radio" />
                            </div>
                            <div className='w-[200px] flex justify-between px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-none border-gray-300'>
                                <span>System</span>
                                <input type="radio" />
                            </div>
                        </div>
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
