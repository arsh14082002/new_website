import React, { useState, useEffect } from 'react';
import './App.scss';
import Nav from './Component/Nav';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'boxicons';
import Footer from './Component/Footer';
import Services from './Pages/Services';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import './Component/Styles/Component.scss';
import CallingBtn from './Component/CallToAction/CallBtn';
import WhatsappBtn from './Component/CallToAction/WhatsappBtn';
import BlogPage from './Pages/BlogPage';
import ServicePage from './Pages/ServicePage';
import TagPage from './Pages/TagPage';
import Reviews from './Pages/Reviews';
import CategoryBlogs from './Pages/CategoryBlogs';
import CopyRightsText from './Component/CallToAction/CopyRightsText';
import RouteBack from './Component/CallToAction/RouteBack';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const endLoading = () => setIsLoading(false);

    // Subscribe to route changes and start/stop loading accordingly
    const unsubscribeStart = window.addEventListener('routeChangeStart', startLoading);
    const unsubscribeEnd = window.addEventListener('routeChangeEnd', endLoading);

    // Clean up event listeners
    return () => {
      unsubscribeStart();
      unsubscribeEnd();
    };
  }, []);

  return (
    <main>
      {isLoading && <div className="loader">Loading...</div>}
      <Router>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/blogs/tags/:tag" element={<TagPage />} />
          {/* <Route path="/blogs/category/:id" element={CategoryBlogs} /> */}

          {/* <Route path="/blogs/category/:id" element /> */}
          <Route path="/projects" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<h1>No page found</h1>} />
        </Routes>
        <CallingBtn />
        <WhatsappBtn />
        <Footer />
        <CopyRightsText />
      </Router>
    </main>
  );
}

export default App;
