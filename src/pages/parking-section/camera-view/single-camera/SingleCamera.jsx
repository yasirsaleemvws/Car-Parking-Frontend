import React from 'react'
import { useParams } from 'react-router-dom';
import CameraCard from '../../../../components/CameraCard';
import { camera_data } from '../../../../config/Constants';

export default function SingleCamera() {
    const { id } = useParams();


    return (
        <>

            <div className='flex justify-center items-center'>
                <CameraCard data={camera_data.find(item => item.id == id)} />
            </div>
        </>
    )
}
