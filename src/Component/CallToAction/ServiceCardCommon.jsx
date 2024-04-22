import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import './Styles/CommonCard.scss';

const ServiceCardCommon = ({ icon, title, description, route }) => {
  return (
    <div className="common_card">
      <div className="card">
        {icon && <img src={icon} alt="" width={50} />}
        <h3>{title}</h3>
        <div className="para">
          <p>{description}</p>
        </div>
      </div>
      <NavLink to={`/services/${route}`} className="card_link">
        <span>Explore More</span>
        <FaArrowRight />
      </NavLink>
    </div>
  );
};

export default ServiceCardCommon;
