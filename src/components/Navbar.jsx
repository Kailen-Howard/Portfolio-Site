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
  z-index: 1000;
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
  z-index: 1001;
  
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
  z-index: 1001;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.95);
  z-index: 998;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: var(--color-background);
  padding: 6rem 2rem 2rem;
  z-index: 999;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  z-index: 1000;
  
  &:hover {
    color: var(--color-primary);
  }
`;

const MobileSocialLinks = styled(SocialLinks)`
  margin-top: 2rem;
  justify-content: center;
  z-index: 1000;
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      >
        <NavContainer>
          <Logo to="/" data-hoverable onClick={closeMobileMenu}>
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

          <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? '×' : '☰'}
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <MobileMenuOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <MobileMenu
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <MobileNavLink to="/" onClick={closeMobileMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/projects" onClick={closeMobileMenu}>
                Projects
              </MobileNavLink>
              <MobileNavLink to="/contact" onClick={closeMobileMenu}>
                Contact
              </MobileNavLink>
              
              <MobileSocialLinks>
                <SocialLink href="https://github.com/kailen-howard" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/kailen-howard-0702041b7/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                </SocialLink>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FiTwitter />
                </SocialLink>
              </MobileSocialLinks>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
