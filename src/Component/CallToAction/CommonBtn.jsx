import React from 'react';
import { Link } from 'react-router-dom';

export const CommonBtn = ({ link, btnText }) => {
  return (
    <div className="flex justify-center mt-9">
      <Link to={`/${link}`} className="py-2 px-4 bg-[#726d6d] text-white rounded-sms">
        {btnText}
      </Link>
    </div>
  );
};
