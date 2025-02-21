import { Drawer } from 'antd'
import React from 'react'

export default function CustomDrawer({ onClose, open }) {

    return (
        <div>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}
