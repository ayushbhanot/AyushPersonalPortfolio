
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard.jsx';
import { experiences } from '../../data/constant';
import { motion } from 'framer-motion';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;




const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                This is a showcase of my professional experiences and contributions as a software engineer.
                </Desc>
                <TimelineSection>
                    <Timeline
                     as={motion.div}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     variants={{
                         hidden: { opacity: 0 },
                         visible: {
                             opacity: 1,
                             transition: {
                                 staggerChildren: 0.2,
                             },
                            },
                        }}>
                        {experiences.map((experience, index) => (
                            <TimelineItem 
                              as={motion.div}
                              key={experience.id} 
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <TimelineSeparator>
                                    <TimelineDot
                                      as={motion.div}
                                      initial={{ scale: 0 }}
                                      whileInView={{ scale: 1 }}
                                      transition={{ duration: 0.5, delay: index * 0.2 }}
                                      variant="outlined"
                                      color="secondary"
                                      sx={{ width: '30px', height: '30px', border: '8px solid #3AAFB9' }}
                                    />
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector
                                          as={motion.div}
                                          initial={{ height: 0 }}
                                          whileInView={{ height: `${experiences[index].duration * 50}px` }}
                                          transition={{ duration: 0.5, delay: index * 0.2 }}
                                          style={{
                                              background: '#3AAFB9',
                                              width: '5px',
                                          }}
                                        />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent 
                                  as={motion.div}
                                  initial={{ opacity: 0, x: -50 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.2 }}
                                  sx={{ py: '12px', px: 2 }}
                                >
                                    <ExperienceCard
                                      as={motion.div}
                                      initial={{ scale: 0.8, opacity: 0 }}
                                      whileInView={{ scale: 1, opacity: 1 }}
                                      transition={{ duration: 0.5, delay: index * 0.2 }}
                                      experience={experience}
                                    />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Experience;
