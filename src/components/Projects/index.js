import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/projectCard';
import ProjectModal from '../Project-Popup'; // Modal component
import { projects } from '../../data/constant'; // Projects data
import { motion, useInView } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

const Title = styled(motion.div)`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Description = styled(motion.div)`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center; // center all cards
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
  padding: 20px 0;

  @media (min-width: 1280px) {
    flex-wrap: nowrap; // 4 cards side by side
  }

  @media (max-width: 1279px) {
    flex-wrap: wrap;
  }
`;




const Projects = () => {
  const [active, setToggle] = useState('ALL'); // Toggle state (optional)
  const [openModal, setOpenModal] = useState({ state: false, project: null }); // Modal state

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    rootMargin: '-500px', 
  });

  return (
    <Container
      id="projects"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Wrapper>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </Title>
        <Description
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A showcase of the diverse projects I've worked on, demonstrating my
          skills in software development, problem-solving, and innovation.
        </Description>

        <CardContainer
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
{projects.map((project, index) => (
  <motion.div
    key={project.id}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    onClick={() => setOpenModal({ state: true, project })}
  >
    <ProjectCard project={project} setOpenModal={setOpenModal} />
  </motion.div>
))}


        </CardContainer>
      </Wrapper>

      {/* Project Modal */}
      {openModal.state && (
        <ProjectModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </Container>
  );
};

export default Projects;
