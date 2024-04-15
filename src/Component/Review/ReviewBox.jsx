import React from 'react';

const ReviewBox = ({ head, img1, img2, img3, img4 }) => {
  return (
    <div className="indi_cli_rev">
      <h3>{head}</h3>
      <div className="indi_cli_img">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default ReviewBox;
