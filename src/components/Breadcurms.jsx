import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";


const Breadcrumb = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="breadcrumb-item flex items-center">
                        {item.link ? (
                            <Link to={item.link} className="text-blue-500 hover:underline">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-500">{item.label}</span>
                        )}
                        {index < items.length - 1 && <span className="mx-2"><RiArrowRightSLine className='text-lg text-gray-500' /></span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            link: PropTypes.string,
        })
    ).isRequired,
};

export default Breadcrumb;
