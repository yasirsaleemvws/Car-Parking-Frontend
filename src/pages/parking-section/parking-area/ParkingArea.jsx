import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import View3D from './view-3D/View3D';
import View2D from './view-2D/View2D';
import { DiHtml53dEffects } from "react-icons/di";
import { FaCamera } from "react-icons/fa";
import { APP_ROUTES } from '../../../config/Constants';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export default function ParkingArea() {
    const navigate = useNavigate();
    const query = useQuery();
    const id = query.get('id');
    const view = query.get('view');
    const [floor, setFloor] = React.useState(3);

    const redirect = (route) => {
        if (route == '2d') {
            navigate(`${APP_ROUTES.PARKING_AREA}?id=${id}&&view=2d`)
        } else if (route == '3d') {
            setFloor(3)
            navigate(`${APP_ROUTES.PARKING_AREA}?id=${id}&&view=3d`)
        } else if (route == 'camera') {
            navigate(`${APP_ROUTES.PARKING_CAMERA}?id=${id}`)
        }
    }

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Parking Area</h1>
                <div className="flex items-center gap-2">
                    {view == '3d' ? (
                        <>
                            <select value={floor} className='mr-2 px-4 h-[40px] rounded-md border border-gray-400' onChange={() => setFloor(parseInt(event.target.value))}>
                                <option value="3">Top Floor</option>
                                <option value="2">Second Floor</option>
                                <option value="1">Ground Floor</option>
                            </select>
                            <button className='flex items-center bg-white text-purple-700 px-4 h-[40px] rounded-md border border-gray-400' onClick={() => redirect('2d')}>
                                <DiHtml53dEffects className='text-2xl mr-2' /> 2D View
                            </button>
                        </>
                    ) : (
                        <button className='flex items-center bg-white text-purple-700 px-4 h-[40px] rounded-md border border-gray-400' onClick={() => redirect('3d')}>
                            <DiHtml53dEffects className='text-2xl mr-2' /> 3D View
                        </button>
                    )}

                    <button className='flex items-center bg-purple-700 text-white px-4 h-[40px] rounded-md ml-2 border border-gray-400' onClick={() => redirect('camera')}>
                        <FaCamera className='text-lg mr-2' />Camera View
                    </button>
                </div>
            </div>
            {view === '3d' ? <View3D floor={floor} /> : <View2D />}
        </>
    )
}
