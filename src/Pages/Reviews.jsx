import React from 'react';
import './Styles/Reviews.scss';
import review1 from '../assets/review-gallery/review1.png';
import review2 from '../assets/review-gallery/review2.png';
import review3 from '../assets/review-gallery/review3.png';
import review4 from '../assets/review-gallery/review4.png';

import review5 from '../assets/review-gallery/review5.png';
import review6 from '../assets/review-gallery/review6.png';
import review7 from '../assets/review-gallery/review7.png';
import review8 from '../assets/review-gallery/review8.png';

import review10 from '../assets/review-gallery/review10.png';
import review11 from '../assets/review-gallery/review11.png';
import review12 from '../assets/review-gallery/review12.png';

import review13 from '../assets/review-gallery/review13.png';
import review14 from '../assets/review-gallery/review14.png';
import review15 from '../assets/review-gallery/review15.png';

import ReviewBox from '../Component/Review/ReviewBox';
import { Helmet } from 'react-helmet';
import WebForms from '../Component/CallToAction/WebForms';

const Reviews = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.secureyourself.in/projects" />
        <title>Project - Secure Yourself</title>
      </Helmet>
      <div className="blogs_head">
        <h2>Projects</h2>
        <h4>We Completed Projects</h4>
      </div>

      <div className="review_boxes">
        <ReviewBox
          head="MOPA AIRPORT"
          img1={review1}
          img2={review2}
          img3={review3}
          img4={review4}
        />

        <ReviewBox
          head="RYNOX GEAR DELHI BRANCH"
          img1={review5}
          img2={review6}
          img3={review7}
          img4={review8}
        />

        <ReviewBox
          head="CBRE SOUTH ASIA Pvt. Ltd."
          img1={review10}
          img2={review11}
          img3={review12}
        />

        <ReviewBox head="CHILDREN DENTALS CLINIC" img1={review13} img2={review14} img3={review15} />
      </div>

      <WebForms />
    </>
  );
};

export default Reviews;
