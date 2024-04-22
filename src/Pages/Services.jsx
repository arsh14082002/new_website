import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import data from '../data.json';
import { NavLink } from 'react-router-dom';
import './Styles/Services.scss';
import WebForms from '../Component/CallToAction/WebForms';
import ServiceCardCommon from '../Component/CallToAction/ServiceCardCommon';
import digitalMarketing from '../assets/service-icons/digital-marketing.png';
// import dg from "../assets/service-icons/di"
import cctv from '../assets/service-icons/cctv.png';
import website from '../assets/service-icons/website.png';
import cyberSecurity from '../assets/service-icons/cyber-security.png';
import mobileComputer from '../assets/service-icons/mobile-computer-accessories.png';
import mobileApplication from '../assets/service-icons/mobile-application.png';

const icons = {
  'Digital Marketing': digitalMarketing,
  'CCTV surveillance': cctv,
  'Website Designs & Design': website,
  'Cyber Security Consultancy': cyberSecurity,
  'Mobile & Computers Accessories': mobileComputer,
  'Mobile Applications Developement': mobileApplication,
};

const Services = () => {
  return (
    <section className="service">
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

      <div className="service_boxes">
        {data.services.map((service, i) => (
          <ServiceCardCommon
            key={i}
            icon={icons[service.name] || null}
            title={service.name}
            description={service.description}
            route={service.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
          />
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
