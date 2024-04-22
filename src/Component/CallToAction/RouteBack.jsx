import React from 'react';
import { useNavigate } from 'react-router-dom';

const RouteBack = ({ serviceName }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1); // Navigate back
  };

  return (
    <div>
      <button className="py-2 px-6 rounded-[10px] bg-[#ccc] mb-4" onClick={handleBackButtonClick}>
        Back
      </button>

      {/* Dynamically generate the service route button */}
    </div>
  );
};

export default RouteBack;
