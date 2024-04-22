import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import './Styles/CommonCard.scss';
// import CommonBtn from './CommonBtn';

const BlogCardCommon = ({ title, description, route }) => {
  return (
    <div className="common_card">
      <div className="card">
        <h3>{title}</h3>
        <div className="para">
          <RiDoubleQuotesL size={`30px`} color="#726d6d" />
          <p>{description}...</p>
          <RiDoubleQuotesR size={`30px`} color="#726d6d" />
        </div>

      </div>
      <NavLink to={`/blogs/${route}`} className="card_link">
        <span>Read Blogs</span>
      </NavLink>
    </div>
  );
};

export default BlogCardCommon;
