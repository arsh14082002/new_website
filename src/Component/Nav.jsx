import React, { useState } from 'react';
import logo from '../assets/logo/LogoB.png';
import logoW from '../assets/logo/LogoW.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            {' '}
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="nav_tag">
          <h3>COMPLETE IT SOLUTIONS...</h3>
        </div>

        <div className="menu_btn">
          <button onClick={toggleMenu}>Menu</button>
        </div>

        {isMenuOpen && (
          <div className="nav_links">
            <div className="links">
              <div className="close_btn">
                <box-icon name="x" color="#fff" onClick={toggleMenu}></box-icon>
              </div>
              <div className="links_img">
                <img src={logoW} alt="" />
              </div>
              <ul>
                <li>
                  <Link to="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" onClick={closeMenu}>
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/services" onClick={closeMenu}>
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/blogs" onClick={closeMenu}>
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link to="/contact" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="links_icons">
                <div className="icon">
                  <box-icon type="logo" name="instagram" color="#000"></box-icon>
                </div>

                <div className="icon">
                  <box-icon name="facebook" type="logo" color="#000"></box-icon>{' '}
                </div>

                <div className="icon">
                  <box-icon name="linkedin" type="logo" color="#000"></box-icon>{' '}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
