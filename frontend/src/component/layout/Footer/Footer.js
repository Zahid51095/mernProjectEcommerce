import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"

const Footer = () => {
    return (
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and IOS mobile phone</p>
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" />
        </div>
  
        <div className="midFooter">
          <h1>ECOMMERCE.</h1>
          <p>High Quality is our first priority</p>
  
          <p>Copyrights 2024 &copy; MeZahid</p>
        </div>
  
        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="https://twitter.com/ZahidHasan51095">Twitter</a>
          <a href="https://www.linkedin.com/in/zahid-hasan-7494372a4/">Linkedin</a>
          <a href="https://www.facebook.com/profile.php?id=100085404383256">Facebook</a>
        </div>
      </footer>
    );
  };

export default Footer