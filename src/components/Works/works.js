import React from 'react';
import './works.css';
import FashionFairy from '../../assets/FashionFairy.png';
import Orfeus from '../../assets/Orfeus.png';
import TYSM from '../../assets/tysm.png';
import Pacman from '../../assets/Pacman.png';
import CodeForChange from '../../assets/CodeForChange.png';
import CarRental from '../../assets/MockCarAgency.png';
import ColorSelector from '../../assets/ColorSelector.png';
import ProjectCard from './projectCard';

const projects = [
  {
    name: 'Fashion Fairy',
    imageUrl: FashionFairy,
    description:
      "Mobile app that uses both ChatGPT and DALL-E API to both suggest and display an AI-generative outfit, based off a the user's preferences",
    linkText: 'Source Code',
    link: 'https://gitlab.com/ynam1/techwise-project-3',
  },
  {
    name: 'Orfeus',
    imageUrl: Orfeus,
    description:
      "Music generation site using OpenAI's Jukebox, transforming uploaded songs between genres within a social media-style platform",
    linkText: 'Source Code',
    link: 'https://orfeus8.wixsite.com/orfeus',
  },
  {
    name: 'E-Commerce Website',
    imageUrl: TYSM,
    description:
      'Includes account creation, authentication, password encryption, search and filtering, cart functionality, order summary, and order history',
    linkText: 'Source Code',
    link: 'https://gitlab.com/ynam1/techwise-project-2',
  },
  {
    name: 'Pacman',
    imageUrl: Pacman,
    description:
      'Pacman clone featuring added elements like secret levels, diverse power-ups, and multiple game modes including classic, ghost play, and multiplayer',
    linkText: 'Source Code',
    link: 'https://gitlab.com/ynam1/techwise-project-1',
  },
  {
    name: 'Code for Change',
    imageUrl: CodeForChange,
    description:
      'Hackathon: Teamed up to build an interactive website offering personalized Python coding lessons based on a personality quiz, connecting users with relevant charities for continued engagement',
    linkText: 'Source Code',
    link: 'https://github.com/elisacarrillo/vmware-codehouse',
  },
];

const Works = () => {
  return (
    <div>
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">
          Take a look at some of the projects I've worked on so far
        </span>

        <div className="worksImgs">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.name}
              imageUrl={project.imageUrl}
              description={project.description}
              linkText={project.linkText}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Works;
