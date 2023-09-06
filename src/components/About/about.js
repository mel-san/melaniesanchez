import React from 'react';
import './about.css';
import lakeTahoe from '../../assets/lakeTahoe.png';
import UNR from '../../assets/UNR-logo.webp';
import techwise from '../../assets/techwise_logo.png';
const About = () => {
  return (
    <div>
      <section id="about">
        <h2 className="aboutTitle">About Me</h2>
        <p className="aboutDesc">
          I'm Melanie Sanchez, and I'm originally from Lake Tahoe in Zephyr
          Cove, Nevada. After graduating from George Whittell High School, I
          pursued my passion for technology at the University of Nevada, Reno,
          where I graduated cum laude with a BS in Computer Science and
          Engineering, along with a minor in Mathematics.
        </p>
        <p className="aboutDesc">
          During my junior and senior years in college, I had the privilege of
          participating in an 18-month Software Engineering Program called{' '}
          <a
            href="https://techwise.talentsprint.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TechWise
          </a>{' '}
          by TalentSprint, sponsored by Google. This program not only enhanced
          my technical skills but also exposed me to real-world software
          engineering challenges and teamwork.
        </p>
        <p className="aboutDesc">
          I'm passionate about software engineering and am eager to embark on a
          rewarding career in this field. My goal is to continue learning,
          collaborating on innovative projects, and contributing to the
          ever-evolving world of technology.
        </p>
        <div className="image-container">
          <img src={lakeTahoe} alt="Lake Tahoe Cartoon" className="lakeTahoe" />
          <img src={UNR} alt="UNR logo" className="unr" />
          <img src={techwise} alt="Techwise logo" className="techwise" />
        </div>
      </section>
    </div>
  );
};

export default About;
