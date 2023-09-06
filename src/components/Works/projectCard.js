import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProjectCard = ({
  projectName,
  imageUrl,
  description,
  linkText,
  link,
}) => {
  return (
    <Card
      className="projectCard"
      style={{ margin: '2rem' }}
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="140"
          image={imageUrl}
          alt={projectName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button size="small" color="primary">
            {linkText}
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

// import React, { useState } from 'react';

// const ProjectCard = ({ imageUrl, description, link }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className="project-card" // Keep this class name as it is
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="imageContainer">
//         <img src={imageUrl} alt="Project" className="projectImage" />{' '}
//         {/* Use "project-image" here */}
//         {isHovered && (
//           <div className="description-overlay">
//             <p className="description-text">{description}</p>
//             <a href={link} target="_blank" rel="noopener noreferrer">
//               Learn more
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

export default ProjectCard;
