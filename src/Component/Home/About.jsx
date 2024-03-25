import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about">
      <div className="about_para">
        <p>
          {' '}
          At Secure Yourself, we understand that in today's rapidly evolving digital landscape,
          security and technological advancement are paramount. That's why we're dedicated to
          providing cutting-edge solutions that not only protect your assets but also propel your
          business forward.
        </p>
      </div>

      <div className="about_link">
        <Link to="/about">More About Us.</Link>
      </div>
    </section>
  );
};

export default About;
