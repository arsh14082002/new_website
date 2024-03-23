import React from 'react';

const LocationEmbed = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1177312551267!2d77.1267864744552!3d28.47600089117358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f1e3922d7c9%3A0x125a60374f862bd8!2sSECURE%20YOURSELF!5e0!3m2!1sen!2sin!4v1709744490401!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationEmbed;
