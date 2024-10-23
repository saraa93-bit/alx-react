import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  // Function to add scroll reveal effect to images
  useEffect(() => {
    const handleScroll = () => {
      const imageItems = document.querySelectorAll('.image-item');
      imageItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          item.classList.add('visible'); // أضف الفئة عند ظهور الصورة
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to show images if they are already in view

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Main container */
    <div className="home-container-smart">
      <img
        className="smartcare-logo"
        src={`${process.env.PUBLIC_URL}/images/Smart_care-logo.png`}
        alt="Smart Care Logo"
      />
      {/* Header */}
      <h2 className="login-welcome">Welcome Back</h2>
      <p className="login-para">To enter our dashboard, please press login</p>

      {/* link to login page direct */}
      <Link to="/login">
        <button className="login-button-home"><i className="fa fa-sign-in"></i>Login</button>
      </Link>

      {/* Image gallery with scroll effect */}
      <div className="image-gallery">
        <div className="image-item">
          <img
            className="gallery-image"
            src={`${process.env.PUBLIC_URL}/images/doctor.jpg`}
            alt="Doctor"
          />
          <p>In service of our patients, we unite our efforts to deliver efficient healthcare solutions for everyone involved</p>
        </div>

        <div className="image-item">
          <img
            className="gallery-image"
            src={`${process.env.PUBLIC_URL}/images/hospital.png`}
            alt="Hospital"
          />
          <p>Our dedicated doctors are always here to provide the best care possible. 
               With a strong commitment to the health.</p>
        </div>

        <div className="image-item">
          <img
            className="gallery-image"
            src={`${process.env.PUBLIC_URL}/images/news.jpg`}
            alt="Nurse"
          />
          <p>Together, we strive to provide the best care for our patients, ensuring a seamless experience for doctors, nurses, and staff</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h6>Contact us at smartcare@gmail.com</h6>
        <h6>&copy;Smartcare 2024</h6>
      </footer>
    </div>
  );
};

export default Home;
