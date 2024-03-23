import React from 'react';
import { Helmet } from 'react-helmet';

const ServicePageContent = ({ name, description, price }) => {
  return (
    <div className="service_page_box">
      <h4>{name}</h4>
      <p>{description}</p>
      {/* <button>Book your appointment now!</button>
      <button>Explore more...</button> */}
      {/* <p>{price}</p> */}
    </div>
  );
};

export default ServicePageContent;
