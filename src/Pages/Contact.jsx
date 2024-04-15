import React from 'react';
import './Styles/Contact.scss';
import EmailJsContactForm from '../Component/Contact/EmailJsContactForm';
import MapEmbed from '../Component/Contact/MapEmbed';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.secureyourself.in/contact" />
        <title>Contact | Secure Yourself</title>
      </Helmet>

      <div className="blogs_head">
        <h2>Get In Touch </h2>
        <h4>What We Provide You?</h4>
      </div>
      <EmailJsContactForm />
      <MapEmbed />
    </>
  );
};

export default Contact;
