import React from 'react'
import { MdMoreVert } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { access_rules_card_data } from '../../config/data.service';

export default function AccessRule() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-lg font-semibold mb-5">Access Rule</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-5">
        {access_rules_card_data.map((rule) => (
          <div
            key={rule.id}
            className="relative bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 cursor-pointer"
            onClick={() => navigate(rule.navigateTo)}
          >
            <div className="flex justify-center mb-5">
              <img src={rule.icon} alt={rule.title} />
            </div>
            <h2 className="text-xl font-semibold text-center">{rule.title}</h2>
            <p className="text-gray-600 mb-4 text-center">{rule.description}</p>
            <div className="flex justify-center">
              <img src="/images/icons/members.png" alt="Members" />
            </div>
            <MdMoreVert className='absolute top-4 right-4 text-xl' />
          </div>
        ))}
      </div>
    </>
  );
}