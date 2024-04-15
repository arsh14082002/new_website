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
        {data.services.map((service, i) => {
          const icon = icons[service.name] || null;

          return (
            <div key={i} className="service_box">
              <div className="box">
                {icon && <img src={icon} alt="" width={50} />}
                <h3>{service.name}</h3>
                <div className="box_para">
                  <p>{service.description}</p>
                </div>
              </div>
              <NavLink
                to={`services/${service.name
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/&/g, 'and')}`}
                className="service_link_for"
              >
                <span>Explore More</span>
                <FaArrowRight />
              </NavLink>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
