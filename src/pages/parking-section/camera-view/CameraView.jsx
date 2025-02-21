import React from 'react'
import CameraCard from '../../../components/CameraCard'
import { camera_data } from '../../../config/Constants'


export default function CameraView() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {camera_data.map((item, index) => (
                    <CameraCard key={index} data={item} />
                ))}
            </div>
        </>
    )
}
