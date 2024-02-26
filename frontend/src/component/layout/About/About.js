import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FaceBookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/zahid-hasan-7494372a4/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://i.ibb.co/vdFdg0B/IZwka-z3-400x400.jpg"
              alt="Founder"
            />
            <Typography>Zahid Hasan</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button>
            <span>
              This is a sample wesbite made by @mezahidhasan. Only with the
              purpose to teach MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.facebook.com/profile.php?id=100085404383256"
              target="blank"
            >
              <FaceBookIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://twitter.com/ZahidHasan51095" target="blank">
              <TwitterIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;