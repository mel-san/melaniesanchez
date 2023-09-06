import React from 'react';
import './news.css';
import ProjectCard from '../Works/projectCard';
import TechWise from '../../assets/TechWise.png';
import VMWare from '../../assets/vmware.jpeg';
const websites = [
  {
    name: 'TechWise Program provides software engineering students with a clear pathway to success',
    imageUrl: TechWise,
    linkText: 'View Article',
    link: 'https://www.unr.edu/nevada-today/news/2023/techwise-first-cohort?utm_source=LinkedIn&utm_medium=social&utm_campaign=News&utm_content=TechWise',
  },
  {
    name: 'CodeHouse 2022 Palo Alto and Atlanta – The Opportunities Of A Lifetime',
    imageUrl: VMWare,
    linkText: 'View Article',
    link: 'https://blogs.vmware.com/careers/2022/11/codehouse-2022-palo-alto-and-atlanta-the-opportunities-of-a-lifetime.html#:~:text=Atlanta%20Winners,programming%20both%20engaging%20and%20relatable.',
  },
];
const News = () => {
  return (
    <div>
      <section id="news">
        <h2 className="newsTitle">News</h2>
        <span className="newsDescription">
          Here are some articles that I've been featured in
        </span>
        <div className="articles">
          {websites.map((website, index) => (
            <ProjectCard
              key={index}
              projectName={website.name}
              imageUrl={website.imageUrl}
              description={website.description}
              linkText={website.linkText}
              link={website.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
