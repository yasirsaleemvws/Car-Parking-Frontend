import React, { useState } from 'react'
import SettingMenu from './setting-menu/SettingMenu'
import Profile from './profile/Profile'
import CompanyProfile from './company-profile/CompanyProfile'
import Password from './password/Password'
import Notifications from './notifications/Notifications'
import Display from './display/Display'

export default function Settings() {
    const [selected, setSelected] = useState('profile')
    return (
        <div className="p-6 bg-white rounded-lg">
            <h1 className='text-2xl font-bold mb-4 border-b pb-4'>Setting</h1>
            <div className="flex mt-2">
                <SettingMenu selected={selected} setSelected={setSelected} />
                <div className="w-3/4 pl-4">
                    {selected === 'profile' && <Profile />}
                    {selected === 'company profile' && <CompanyProfile />}
                    {selected === 'password' && <Password />}
                    {selected === 'notifications' && <Notifications />}
                    {selected === 'display' && <Display />}
                </div>
            </div>
        </div>
    )
}
