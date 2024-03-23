import React from 'react';
import './Styles/CallToAction.scss';

const WhatsappBtn = () => {
  return (
    <div className="whatsapp_btn_fun">
      <a
        href="https://api.whatsapp.com/send?phone=919999629495&amp;text=Hello SecureYourself Team, I am looking Website. Please share me details."
        rel="noreferrer"
        target="_blank"
      >
        <div className="cont_btn">
          <box-icon type="logo" name="whatsapp" color="#fff" size="45px"></box-icon>
        </div>
      </a>
    </div>
  );
};

export default WhatsappBtn;
