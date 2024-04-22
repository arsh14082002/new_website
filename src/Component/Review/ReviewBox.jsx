import React, { useState, useEffect } from 'react';

const ReviewBox = ({ head, img1, img2, img3, img4 }) => {
  const [maximizeImage, setMaxiMizeImage] = useState(null);

  const handleImageClick = (image) => {
    if (maximizeImage === image) setMaxiMizeImage(null);
    else setMaxiMizeImage(image);
  };

  useEffect(() => {
    const handleClickOutsideImage = (event) => {
      console.log(event.target.classList.contains('maximize'));
      if (maximizeImage && !event.target.classList.contains('maximize')) {
        setMaxiMizeImage(null);
      }
    };

    document.body.addEventListener('click', handleClickOutsideImage);

    return () => {
      document.body.removeEventListener('click', handleClickOutsideImage);
    };
  }, [maximizeImage]);

  return (
    <div className="indi_cli_rev">
      <h3>{head}</h3>
      <div className="indi_cli_img">
        <img
          src={img1}
          alt=""
          onClick={() => handleImageClick(img1)}
          className={maximizeImage == img1 ? 'maximize' : ''}
        />
        <img
          src={img2}
          alt=""
          onClick={() => handleImageClick(img1)}
          className={maximizeImage == img2 ? 'maximize' : ''}
        />
        <img
          src={img3}
          alt=""
          onClick={() => handleImageClick(img1)}
          className={maximizeImage == img3 ? 'maximize' : ''}
        />
        <img
          src={img4}
          alt=""
          onClick={() => handleImageClick(img1)}
          className={maximizeImage == img4 ? 'maximize' : ''}
        />
      </div>
    </div>
  );
};

export default ReviewBox;
