import React from 'react'

export default function SettingMenu({ selected, setSelected }) {
    return (
        <div className="w-1/5 p-6 border-r">
            <ul className="space-y-2">
                {['Profile', 'Company Profile', 'Password', 'Notifications', 'Display'].map(item => (
                    <li
                        key={item}
                        className={`cursor-pointer font-bold p-2 rounded-md text-gray-500 hover:text-purple-800 hover:bg-purple-200 ${selected === item.toLowerCase() ? 'text-purple-800 bg-purple-200' : ''}`}
                        onClick={() => setSelected(item.toLowerCase())}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
