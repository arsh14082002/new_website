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
        <p>
          With our expertise in CCTV surveillance, we offer state-of-the-art security systems that
          keep a vigilant eye on your premises, ensuring round-the-clock protection and peace of
          mind. Our tailored solutions are designed to meet the unique requirements of businesses,
          homes, and public spaces, empowering you to safeguard what matters most.
        </p>
        <p>
          In addition to security solutions, we excel in website development and design. Our team of
          experienced developers and designers collaborate closely with clients to create visually
          stunning, user-friendly websites that make a lasting impression. Whether you're a small
          business or a large enterprise, we have the expertise to elevate your online presence and
          drive results.
        </p>{' '}
      </div>

      <div className="about_link">
        <Link to="/about">More About Us.</Link>
      </div>
    </section>
  );
};

export default About;
