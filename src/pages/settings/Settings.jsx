import React, { useState } from 'react'
import SettingMenu from './setting-menu/SettingMenu'
import Profile from './profile/Profile'

export default function Settings() {
    const [selected, setSelected] = useState('profile')
    return (
        <>
            <h1 className='text-xl font-bold'>Settings</h1>
            <div className="flex">
                <SettingMenu selected={selected} setSelected={setSelected} />
                {selected === 'profile' && <Profile />}
            </div>
        </>
    )
}
