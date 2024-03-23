import aboutImg from '../../assets/About/about.jpg';

const AboutHeader = () => {
  return (
    <header>
      <div className="about">
        <div className="about_img">
          <img src={aboutImg} alt="" />
        </div>

        <div className="about_content">
          <h1>About Us</h1>
          <p>Take a look at some of my works, and if you like them, feel free to contact me.</p>
          <div className="whatsapp_btn">
            <a href="">Whatsapp</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
