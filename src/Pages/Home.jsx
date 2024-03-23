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

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Secure Yourself - A Complete IT's Solutions</title>
      </Helmet>
      <Header />
      <About />
      <Service />
      <ObjectiveService />
      <Blogs />
      <ObjectiveBlogs />
      <Team />
      <WebForms />
      <Projects />
    </>
  );
};

export default Home;
