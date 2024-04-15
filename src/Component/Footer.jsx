import footerLogo from '../assets/logo/sy-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer_rows">
        <div className="footer_col">
          <div className="footer_logo">
            {' '}
            <img src={footerLogo} alt="" />
          </div>
          <div className="footer_des">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, debitis architecto quos
              corrupti quod fugit assumenda unde voluptate nulla eos.
            </p>
          </div>

          <div className="footer_add">
            <address>12, Block Z, Phase 5, Aya Nagar, New Delhi 110047</address>
          </div>
        </div>

        <div className="footer_col">
          <h3>Usefull Links</h3>

          <ul>
            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/">Home</Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/about">About</Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services">Services</Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="//custumer-reviews">Reviews</Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/blogs">Blogs</Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <h3>Services</h3>

          <ul>
            <li>
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services/cctv-surveillance">CCTV Serveillance</Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services/website-development-and-design">
                Website Design & Development
              </Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services/mobile-applications-developement">
                Mobile Application Development
              </Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services/digital-marketing">Digital Marketing</Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services/cyber-security-consultancy">Cyber Security Consultancy</Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services/mobile-accessories-and-telecom">Mobile & Computer Service</Link>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <h3>Follow Us.</h3>

          <ul>
            <li>
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services/cctv-surveillance">Facebook</Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services/website-development-and-design">Instagram </Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services/mobile-applications-developement">Linkedin </Link>
            </li>

            <li>
              {' '}
              <box-icon name="chevron-right" color="#fff"></box-icon>
              <Link to="/services/digital-marketing">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
