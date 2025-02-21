import React from 'react'
import { APP_ROUTES } from '../config/Constants'
import { useNavigate } from 'react-router-dom';

export default function CameraCard({ data }) {
    const navigate = useNavigate();


    return (
        <div className="bg-gray-200 rounded-lg shadow-lg" onClick={() => { navigate(APP_ROUTES.PARKING_CAMERA_DETAILS.replace(':id', data.id)) }}>
            <div className='flex px-4 py-3'>
                <img src="/images/icons/cctv.png" alt="" />
                <span className='ml-2'> {data.title} </span>
            </div>
            <div className="w-full">
                <video className="w-full h-auto rounded-br-lg rounded-bl-lg" autoPlay muted loop>
                    <source src={data.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
