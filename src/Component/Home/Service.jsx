import React from 'react';
import data from '../../data.json';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <section className="service">
      <div className="service_head">
        <h2>Service</h2>
        <h4>What We Provide You?</h4>
      </div>

      <div className="service_boxes">
        {data.services.map((service, i) => {
          return (
            <div className="box" key={i}>
              <h3>{service.name}</h3>
              <div className="box_para">
                <box-icon name="quote-alt-left" type="solid" color="#726d6d"></box-icon>{' '}
                <p>{service.description}</p>
                <box-icon name="quote-alt-right" type="solid" color="#726d6d"></box-icon>{' '}
              </div>
              <Link
                to={`services/${service.name
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/&/g, 'and')}`}
              >
                Explore More
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;


