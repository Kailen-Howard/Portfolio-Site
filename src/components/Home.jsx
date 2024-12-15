import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HomeContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const ParticleBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.2;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(var(--color-primary) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: particleAnimation 20s linear infinite;
  }
  
  &::after {
    background-size: 30px 30px;
    animation-duration: 30s;
    opacity: 0.5;
  }
  
  @keyframes particleAnimation {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(-100%) rotate(45deg);
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-family: var(--font-mono);
  
  span {
    color: var(--color-text);
  }
`;

const Subtitle = styled.div`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  margin-bottom: 2rem;
  color: var(--color-text);
  opacity: 0.9;
  font-family: var(--font-mono);
`;

const Description = styled(motion.p)`
  max-width: 600px;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: var(--color-text);
  opacity: 0.8;
  line-height: 1.8;
`;

const GlowingLine = styled(motion.div)`
  width: 100px;
  height: 3px;
  background: var(--color-primary);
  margin: 2rem 0;
  position: relative;
  border-radius: 2px;
  
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0;
    right: 0;
    bottom: -3px;
    background: var(--color-primary);
    filter: blur(4px);
    opacity: 0.5;
  }
`;

const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />
      
      <ContentWrapper>
        <HeroContent>
          <Title
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span className="glitch" data-text="Kailen">Kailen</span>
          </Title>
          
          <Subtitle>
            <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
                'Tech Enthusiast',
                2000,
                'Learner',
                2000,
                'Creator',
                2000,
                'Innovator',
                2000,
                'Collaborator',
                2000,
                'Student',
                2000,
                'Gamer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Subtitle>
          
          <GlowingLine
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          
          <Description
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm a university student with a growing passion for web development, 
            networking, and security. I enjoy exploring technology, from coding to 
            working with wires and circuit boards. When I'm not diving into tech, I 
            love spending time with my kids and finding new ways to learn and grow.
          </Description>
        </HeroContent>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
