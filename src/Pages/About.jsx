import './Styles/About.scss';
import AboutHeader from '../Component/About/AboutHeader';
import AboutContent from '../Component/About/AboutContent';
import WebForms from '../Component/CallToAction/WebForms';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Secure Yourself</title>
      </Helmet>
      <AboutHeader />
      <AboutContent />
      <WebForms />
    </>
  );
};

export default About;
