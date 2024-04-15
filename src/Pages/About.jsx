import './Styles/About.scss';
import AboutHeader from '../Component/About/AboutHeader';
import AboutContent from '../Component/About/AboutContent';
import WebForms from '../Component/CallToAction/WebForms';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.secureyourself.in/about" />
        <title>About Us - Secure Yourself</title>
      </Helmet>
      <AboutHeader />
      <AboutContent />
      <WebForms />
    </>
  );
};

export default About;
