import React from 'react';
import './Styles/Home.scss';
import Header from '../Component/Home/Header';
import Service from '../Component/Home/Service';
import Blogs from '../Component/Home/Blogs';
import ObjectiveService from '../Component/Home/ObjectiveService';
import ObjectiveBlogs from '../Component/Home/ObjectiveBlogs';
import Team from '../Component/Home/Team';
import About from '../Component/Home/About';
import WebForms from '../Component/CallToAction/WebForms';
import { Helmet } from 'react-helmet';
import Projects from '../Component/Home/Projects';
import Project from '../Component/Home/Project';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="canonical" href="https://www.secureyourself.in/" /> */}
        <title>Secure Yourself - A Complete IT's Solutions</title>
        <meta
          name="description"
          content="Secure Yourself provides comprehensive IT solutions in Delhi, including CCTV installation, network security, and home security systems. Get a free quote today!"
        />
        <meta
          name="keywords"
          content="IT solutions Delhi, CCTV installation Delhi, IT security services India, network security solutions, home security systems Delhi, website devlopment, website design, web designing in delhi, best quality service provide in delhi ncr, service 24*7 available "
        />
      </Helmet>

      <Header />
      {/* <About /> */}
      <Service />
      <Project />
      <Blogs />
      <Team />
      <WebForms />
      <Projects />
    </>
  );
};

export default Home;
