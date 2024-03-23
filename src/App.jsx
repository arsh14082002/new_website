import './App.scss';
import Nav from './Component/Nav';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

function App() {
  const containerRef = useRef(null);
  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //     // Add any additional Locomotive Scroll instance options here
    //   }}
    //   // onUpdate={() => console.log('Updated, but not on location change!')} // Will trigger on
    //   watch={[window.location.pathname]}
    //   containerRef={containerRef}
    // >
    <main>
      <Router>
        {/* <ScrollToTop /> */}
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/blogs/tags/:tag" element={<TagPage />} />
          {/* <Route path="/blogs/tags/:tag/:slug" element={<BlogPage />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blogs/tags" element={<Navigate to="/blogs" />} /> */}
        </Routes>
        <CallingBtn />
        <WhatsappBtn />
        <Footer />
      </Router>
    </main>
  );
}

export default App;