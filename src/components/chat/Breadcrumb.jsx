import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = ({ name }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center">
      <button onClick={() => navigate(-1)} className="text-gray-900 flex items-center text-xl">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      </button>
      <span className="ml-auto">{name}</span>
    </div>
  );
};

export default Breadcrumb;
