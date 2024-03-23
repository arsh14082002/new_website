import React from 'react';
import { useParams } from 'react-router-dom';
import './Styles/ServicePage.scss';
import ServicePageContent from '../Component/ServicePage/ServicePageContent';
import data from '../Component/ServicePage/data.json';
import { Helmet } from 'react-helmet';

const ServicePage = () => {
  const { slug } = useParams(); // Destructure the slug from the params object

  // Function to remove hyphens and capitalize text
  const formatSlug = (slug) => {
    return slug.replace(/-/g, ' ').toUpperCase(); // Replace hyphens with spaces and capitalize text
  };

  // Find the object in data that matches the slug
  const serviceData = data.find((item) => Object.keys(item)[0] === slug);

  return (
    <div className="service_page">
      <Helmet>
        <title>{formatSlug(slug)} | SERVICES | SECUREYOURSELF</title>
      </Helmet>

      <h1>{formatSlug(slug)}</h1>
      <div className="service_page_boxes">
        {serviceData &&
          serviceData[slug].map((service, i) => (
            <div key={i}>
              <ServicePageContent {...service} /> {/* Spread service object as props */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicePage;
