import React from 'react';

const MapEmbed = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56095.698167929695!2d77.12010238299395!3d28.51021528705025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f1e3922d7c9%3A0x125a60374f862bd8!2sSECURE%20YOURSELF!5e0!3m2!1sen!2sin!4v1711362903292!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Embed"
    ></iframe>
  );
};

export default MapEmbed;
