import React from 'react';
import { Helmet } from 'react-helmet';
import ServiceData from '../data.json';
import { NavLink } from 'react-router-dom';
import './Styles/Services.scss';
import WebForms from '../Component/CallToAction/WebForms';

const Services = () => {
  return (
    <section className="services">
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.secureyourself.in/services" />
        <title>Services | Secure Yourself</title>{' '}
      </Helmet>

      <div className="blogs_head">
        <h2>Services</h2>
        <h4>What We Provide You?</h4>
      </div>

      <div className="blogs_boxes">
        {ServiceData.services.map((service, i) => (
          <div className="box" key={i}>
            <h3>{service.name}</h3>

            <div className="box_para">
              <box-icon name="quote-alt-left" type="solid" color="#726d6d"></box-icon>{' '}
              <p>{service.description}</p>
              <box-icon name="quote-alt-right" type="solid" color="#726d6d"></box-icon>{' '}
            </div>
            <NavLink
              className="blog_direct_link"
              to={`/services/${service.name
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/&/g, 'and')}`}
            >
              Explore Our Service
            </NavLink>
          </div>
        ))}
      </div>

      <div className="objective" style={{ marginTop: '50px' }}>
        <p>
          Explore our diverse service portfolio tailored to modern demands. Safeguard your premises
          with cutting-edge CCTV surveillance. Enhance your online presence with bespoke Website
          Development & Design solutions. Stay ahead in the mobile realm with our Mobile
          Applications Development expertise. Amplify your brand with comprehensive digital
          marketing strategies. Ensure digital security with our Cyber Security Consultancy
          services. Additionally, discover our range of Mobile Accessories & Telecom products for
          seamless connectivity. We are dedicated to delivering excellence across every service,
          prioritizing your satisfaction and success. Join us on your journey to innovation and
          growth in today's ever-evolving landscape.
        </p>
      </div>

      <WebForms />
    </section>
  );
};

export default Services;
