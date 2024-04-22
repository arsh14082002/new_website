import React from 'react';

import review1 from '../../assets/review-gallery/review1.png';
import review2 from '../../assets/review-gallery/review2.png';
import review3 from '../../assets/review-gallery/review3.png';
import review4 from '../../assets/review-gallery/review4.png';

import review5 from '../../assets/review-gallery/review5.png';
import review6 from '../../assets/review-gallery/review6.png';
import review7 from '../../assets/review-gallery/review7.png';
import review8 from '../../assets/review-gallery/review8.png';

import review10 from '../../assets/review-gallery/review10.png';
import review11 from '../../assets/review-gallery/review11.png';
import review12 from '../../assets/review-gallery/review12.png';

import review13 from '../../assets/review-gallery/review13.png';
import review14 from '../../assets/review-gallery/review14.png';
import review15 from '../../assets/review-gallery/review15.png';
import { CommonBtn } from '../CallToAction/CommonBtn';

const data = [
  {
    img1: review1,
    img2: review2,
    img3: review3,
    img4: review4,
    title: 'MOPA AIRPORT',
    description: 'GOA',
  },

  {
    img1: review5,
    img2: review6,
    img3: review7,
    img4: review8,
    title: 'RYNOX',
    description: 'Aya Nagar, Delhi',
  },

  {
    img1: review10,
    img2: review11,
    img3: review12,
    img4: review13,
    title: 'CBRE TOWER',
    description: 'Sector 14, Gurugram',
  },
];

console.log(data);

const Project = () => {
  return (
    <div className="client_project ">
      <div className="blogs_head">
        <h2>Recent Projects</h2>
        <h4>Blogs and articles about us.</h4>
      </div>

      <div className="client_projects ">
        {data.map((item, i) => (
          <div className="projects_card" key={i}>
            <div className="projects">
              <div className="project">
                <img src={item.img1} alt="" />
              </div>

              <div className="project">
                <img src={item.img2} alt="" />
              </div>

              <div className="project">
                <img src={item.img3} alt="" />
              </div>

              <div className="project">
                <img src={item.img4} alt="" />
              </div>
            </div>

            <div className="project_content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <CommonBtn link={'projects'} btnText={'See More Projects'} />
    </div>
  );
};

export default Project;
