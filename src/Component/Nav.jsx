import React, { useEffect, useState } from 'react';
import logo from '../assets/logo/LogoB.png';
import logoW from '../assets/logo/sy-logo.png';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const hamberg = document.querySelector('nav .menu_btn ');
    const navLinks = document.querySelector('nav .nav_links');

    const toggleNav = () => {
      navLinks.classList.toggle('active');
      hamberg.classList.toggle('active');
      setNavOpen(!navOpen); // Toggle the state

      // Add or remove class to body to disable or enable scrolling
      if (!navOpen) {
        document.body.classList.add('nav-open');
      } else {
        document.body.classList.remove('nav-open');
      }
    };

    hamberg.addEventListener('click', toggleNav);

    return () => {
      hamberg.removeEventListener('click', toggleNav);
    };
  }, [navOpen]); // Added navOpen as dependency

  // Function to close the navbar when a link is clicked
  const closeNav = () => {
    const navLinks = document.querySelector('nav .nav_links');
    const hamberg = document.querySelector('nav .menu_btn ');
    navLinks.classList.remove('active');
    hamberg.classList.remove('active');
    setNavOpen(false); // Close the navbar

    // Remove class from body to enable scrolling
    document.body.classList.remove('nav-open');
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <div className="nav_tag">
          <h3>
            SECURE <span>YOURSELF</span>
          </h3>

          <div className="header_tags">
            <span>Service</span> <span></span> <span>Reliable</span> <span></span>
            <span>Security</span>
          </div>
        </div>
      </div>

      <div className="menu_btn">
        <div className="menu_btn_text">{!navOpen ? 'Open Menu' : 'Exit Menu'}</div>
        <div className="hamberg">
          <span></span>
          {/* <span></span> */}
          <span></span>
        </div>
      </div>

      <div className="nav_links">
        <div className="links">
          <ul>
            <li>
              <NavLink to="/" activeClassName="activeRoute" onClick={closeNav}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" activeClassName="activeRoute" onClick={closeNav}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" activeClassName="activeRoute" onClick={closeNav}>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects" activeClassName="activeRoute" onClick={closeNav}>
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/blogs" activeClassName="activeRoute" onClick={closeNav}>
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" activeClassName="activeRoute" onClick={closeNav}>
                Contact
              </NavLink>
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
    </nav>
  );
};

export default Nav;
