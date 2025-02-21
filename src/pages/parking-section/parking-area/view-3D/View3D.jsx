import React from 'react'

export default function View3D({ floor }) {
    return (
        <div className='min-h-[70vh] flex items-center justify-center'>
            {floor == '3' ? (
                <img src="/images/floor3.png" alt="" className='max-w-[700px]' />
            ) : floor == '2' ? (
                <img src="/images/floor2.png" alt="" className='max-w-[700px]' />
            ) : (
                <img src="/images/floor1.png" alt="" className='max-w-[700px]' />
            )}
        </div>
    )
}
