import './Styles/About.scss';
import AboutHeader from '../Component/About/AboutHeader';
import AboutContent from '../Component/About/AboutContent';
import WebForms from '../Component/CallToAction/WebForms';

const About = () => {
  return (
    <>
      <AboutHeader />
      <AboutContent />
      <WebForms />
    </>
  );
};

export default About;
