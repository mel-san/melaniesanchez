import React from 'react';
import './intro.css';
import bg from '../../assets/grad_image.png';
import profile_full from '../../assets/profile_full.jpg';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GitlabIcon from '../../assets/gitlab.png';
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello"> Hello,</span>
        <span className="introText">
          I'm <span className="introName">Melanie Sanchez</span>
          <br /> Software Engineer
          <br />
          <br />
          <p className="introPara">
            I hold a degree in Computer Science and Engineering from the
            University of Nevada, Reno. Additionally, I am a proud graduate of
            TechWise, an 18-month Software Engineering program offered by
            TalentSprint and sponsored by Google.
          </p>
        </span>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/melanie-sanchez-8b7a4a230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon color="primary" fontSize="large" className="link" />
          </a>
          <a
            href="https://github.com/mel-san"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              sx={{ color: 'black' }}
              fontSize="large"
              className="link"
            />
          </a>
          <a
            href="https://gitlab.com/melaniesanchez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitlabIcon} alt="Gitlab logo" className="link" />
          </a>
        </div>
      </div>
      <img src={profile_full} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
