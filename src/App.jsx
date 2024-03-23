import './App.scss';
import Nav from './Component/Nav';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/blogs/tags/:tag" element={<TagPage />} />
          {/* <Route path="/blogs/tags/:tag/:slug" element={<BlogPage />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/tags" element={<Navigate to="/blogs" />} />
        </Routes>
        <CallingBtn />
        <WhatsappBtn />
        <Footer />
      </Router>
    </>
  );
}

export default App;
