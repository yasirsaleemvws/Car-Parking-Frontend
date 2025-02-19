import React from 'react'
import { MdMoreVert } from "react-icons/md";

export default function AccessRule() {

  return (
    <>
      <h2 className="text-lg font-semibold mb-5">Access Rule</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-5">
        {/* Guaranteed Parkers */}
        <div className="relative bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
          <div className="flex justify-center mb-5">
            <img src="/images/icons/guaranted.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold ml-4 text-center">Guaranteed Parkers</h2>
          <p className="text-gray-600 mb-4 text-center">People who always get a free space</p>
          <div className="flex justify-center">
            <img src="/images/icons/members.png" alt="" />
          </div>
          <MdMoreVert className='absolute top-4 right-4 text-xl'/>
        </div>

        {/* Membership Parkers */}
        <div className="relative bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
          <div className="flex justify-center mb-5">
            <img src="/images/icons/membership.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold ml-4 text-center">Membership Parkers</h2>
          <p className="text-gray-600 mb-4 text-center">People who always pay for space</p>
          <div className="flex justify-center">
            <img src="/images/icons/members.png" alt="" />
          </div>
          <MdMoreVert className='absolute top-4 right-4 text-xl'/>
        </div>

        {/* Restricted Parkers */}
        <div className="relative bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
          <div className="flex justify-center mb-5">
            <img src="/images/icons/blocked.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold ml-4 text-center">Restricted Parkers</h2>
          <p className="text-gray-600 mb-4 text-center">People who are restricted from entry</p>
          <div className="flex justify-center">
            <img src="/images/icons/members.png" alt="" />
          </div>
          <MdMoreVert className='absolute top-4 right-4 text-xl'/>
        </div>
      </div>
    </>
  );
}