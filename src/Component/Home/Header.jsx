import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import slide1 from '../../assets/header-slides/slide1.jpg';
import slide2 from '../../assets/header-slides/slide2.jpg';
import slide3 from '../../assets/header-slides/slide3.jpg';
import slide4 from '../../assets/header-slides/slide4.jpg';
import slide5 from '../../assets/header-slides/slide5.jpg';
import slide6 from '../../assets/header-slides/slide6.jpg';
import slide7 from '../../assets/header-slides/slide7.jpg';
import slide8 from '../../assets/header-slides/slide8.jpg';
import slide9 from '../../assets/header-slides/slide9.jpg';
import slide10 from '../../assets/header-slides/slide10.jpeg';
import slide11 from '../../assets/header-slides/slide11.jpg';

const Header = () => {
  const images = [
    slide8,
    slide10,
    slide7,
    slide11,
    slide4,

    // slide1,
    // slide2,
    // slide3,
    // slide5,
    // slide6,
    // slide9,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    touchMove: true,
  };

  const scrollToServices = () => {
    const serviceSection = document.getElementById('service');
    serviceSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="slider-container">
      <div className="header">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i} className="header_img">
              <img src={img} alt="" />
              <div className="header_content">
                <h3>SERVICE | RELIABLE | SECURITY</h3>
                <h1>Best Quality Service</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic facilis,
                  mollitia dolore nam quo molestias est eum consequatur, aliquid quod doloremque
                  fuga atque quidem, aspernatur rem aperiam laudantium quam?
                </p>
                <button onClick={scrollToServices}>
                  <span>Explore Service</span>
                </button>
              </div>{' '}
            </div>
          ))}
        </Slider>{' '}
      </div>
    </header>
  );
};

export default Header;
