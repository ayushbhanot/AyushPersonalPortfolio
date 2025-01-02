import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  cursor: pointer;
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 32px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const GithubButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.accent};
  border: 1.8px solid ${({ theme }) => theme.accent};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  height: 70%;
  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text_primary};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;
const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <DiCssdeck size={48} />
          <Span>Ayush's Portfolio</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars
            size={48}
            color="white"
            style={{cursor: 'pointer' }}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Contact</NavLink>
        </NavItems>
        <GithubButton
          href="https://github.com/ayushbhanot"
          target="_blank"
          rel="noopener noreferrer"
        >Github Profile
        </GithubButton>
      </NavContainer>

      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks href="#about" onClick={() => setOpen(false)}>
            About
          </MobileMenuLinks>
          <MobileMenuLinks href="#skills" onClick={() => setOpen(false)}>
            Skills
          </MobileMenuLinks>
          <MobileMenuLinks href="#experience" onClick={() => setOpen(false)}>
            Experience
          </MobileMenuLinks>
          <MobileMenuLinks href="#projects" onClick={() => setOpen(false)}>
            Projects
          </MobileMenuLinks>
          <MobileMenuLinks href="#education" onClick={() => setOpen(false)}>
            Education
          </MobileMenuLinks>
          <GithubButton
            style={{
              padding: "10px 16px",
              background: theme.accent,
              color: "white",
              width: "max-content",
            }}
            href="https://github.com/ayushbhanot"
            target="_blank"
          >
            Github Profile
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default NavBar;
