import React from 'react';
import data from '../../data.json';
import { Link, NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

import digitalMarketing from '../../assets/service-icons/digital-marketing.png';
import cctv from '../../assets/service-icons/cctv.png';
import website from '../../assets/service-icons/website.png';
import cyberSecurity from '../../assets/service-icons/cyber-security.png';
import mobileComputer from '../../assets/service-icons/mobile-computer-accessories.png';
import mobileApplication from '../../assets/service-icons/mobile-application.png';
import { CommonBtn } from '../CallToAction/CommonBtn';
import ServiceCardCommon from '../CallToAction/ServiceCardCommon';

const icons = {
  'Digital Marketing': digitalMarketing,
  'CCTV surveillance': cctv,
  'Website Designs & Design': website,
  'Cyber Security Consultancy': cyberSecurity,
  'Mobile & Computers Accessories': mobileComputer,
  'Mobile Applications Developement': mobileApplication,
};

const Service = () => {
  return (
    <section className="service" id="service">
      <div className="service_head">
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

      <CommonBtn link={'services'} btnText={'More About Us'} />
    </section>
  );
};

export default Service;
