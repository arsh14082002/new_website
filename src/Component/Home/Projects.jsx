import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './project.json';

// Import images
import bassiLogo from '../../assets/project-icons/bassi_logo.png';
import fruitLogo from '../../assets/project-icons/fruit365.png';
import kniCraft from '../../assets/project-icons/knitcraft_logo.png';
import mopaLogo from '../../assets/project-icons/mopa_logo.png';
import rynoxLogo from '../../assets/project-icons/Rynox-Logo.jpg';
import triumphLogo from '../../assets/project-icons/triumph.png';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  // Map the imported images to the corresponding icon names
  const iconMap = {
    bassi_logo: bassiLogo,
    fruit365: fruitLogo,
    knitcraft_logo: kniCraft,
    mopa_logo: mopaLogo,
    'Rynox-Logo': rynoxLogo,
    triumph: triumphLogo,
  };

  return (
    <section className="project">
      <div className="project_head">
        <h2>Project</h2>
        <h4>What We Provide You?</h4>
      </div>

      <div className="project_slides">
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((item, i) => (
              <div key={i} className="slide">
                <div className="slide_box">
                  <div className="box">
                    <img src={iconMap[item.icon]} alt="Project Icon" />
                    <h3>{item.name}</h3>
                    <p>{item.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
