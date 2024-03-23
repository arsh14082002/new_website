import React from 'react';
import HeaderImg from '../..//assets/Home/header.jpg';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header_img">
          <img src={HeaderImg} alt="" />
        </div>

        <div className="header_content">
          <div className="header_content_head ">
            <div className="header_tags">
              <span>Service</span> <span>|</span> <span>Reliable</span> <span>|</span>
              <span>Security</span>
            </div>
            <h1 className="">
              We Are Your <br />
              Business Advisor
            </h1>

            <div className="header_btn">
              <button>Explore Our Services</button>
            </div>

            <div className="newsletter">
              <h3>Newsletter</h3>
              <input type="text" placeholder="write a newsletter..." />
              <p>Your feedback is the compass that guides us towards excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
