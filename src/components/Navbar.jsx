import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.5rem;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  color: var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '>';
    opacity: 0.7;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: var(--font-mono);
  color: var(--color-text);
  text-decoration: none;
  position: relative;
  padding: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
  }
  
  &:hover::before,
  &.active::before {
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: var(--color-text);
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-primary);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 1rem 0;
  font-size: 1.2rem;
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      >
        <NavContainer>
          <Logo to="/" data-hoverable>
            Kailen.dev
          </Logo>
          
          <NavLinks>
            <NavLink to="/" className={isActive('/') ? 'active' : ''} data-hoverable>
              Home
            </NavLink>
            <NavLink to="/projects" className={isActive('/projects') ? 'active' : ''} data-hoverable>
              Projects
            </NavLink>
            <NavLink to="/contact" className={isActive('/contact') ? 'active' : ''} data-hoverable>
              Contact
            </NavLink>
            
            <SocialLinks>
              <SocialLink href="https://github.com/kailen-howard" target="_blank" rel="noopener noreferrer" data-hoverable>
                <FiGithub />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/kailen-howard-0702041b7/" target="_blank" rel="noopener noreferrer" data-hoverable>
                <FiLinkedin />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-hoverable>
                <FiTwitter />
              </SocialLink>
            </SocialLinks>
          </NavLinks>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            ☰
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
            
            <SocialLinks style={{ marginTop: '1rem' }}>
              <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </SocialLink>
              <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </SocialLink>
            </SocialLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
