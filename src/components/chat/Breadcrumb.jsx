import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/poppins';


const Breadcrumb = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-4">
      <button onClick={() => navigate(-1)} className="text-blue-500">
        Back
      </button>
    </div>
  );
};

export default Breadcrumb;
