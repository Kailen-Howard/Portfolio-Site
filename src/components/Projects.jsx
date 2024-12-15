import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(var(--color-primary-rgb), 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const ProjectTitle = styled.h3`
  font-family: var(--font-mono);
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: var(--color-text);
  opacity: 0.8;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(var(--color-primary-rgb), 0.1);
  color: var(--color-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: var(--font-mono);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: var(--color-text);
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-primary);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  
  span {
    color: var(--color-primary);
  }
`;

// Sample project data
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A full-stack web application built with React and Node.js, featuring real-time data synchronization and a modern user interface.",
    image: "https://via.placeholder.com/300x200",
    techStack: ["React", "Node.js", "MongoDB", "WebSocket"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.com"
  },
  {
    id: 2,
    title: "Project Two",
    description: "An e-commerce platform with advanced filtering, search functionality, and secure payment processing.",
    image: "https://via.placeholder.com/300x200",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com/yourusername/project-two",
    liveUrl: "https://project-two.com"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A mobile-first progressive web app for task management with offline capabilities and cloud synchronization.",
    image: "https://via.placeholder.com/300x200",
    techStack: ["React Native", "Firebase", "Redux", "PWA"],
    githubUrl: "https://github.com/yourusername/project-three",
    liveUrl: "https://project-three.com"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <ProjectsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Featured <span>Projects</span>
      </SectionTitle>
      
      <ProjectsGrid>
        <AnimatePresence>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              data-hoverable
            >
              <ProjectImage
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechStack>
                {project.techStack.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <ProjectLinks>
                <ProjectLink 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-hoverable
                >
                  <FiGithub />
                </ProjectLink>
                <ProjectLink 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-hoverable
                >
                  <FiExternalLink />
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
