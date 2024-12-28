import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/projectCard';

const Container = styled.div`
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
    justify-content: space-between;
    width: 100%;
    gap: 12px;
`;

const Title = styled.div`
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

const Description = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;
    background-color: #3AAFB9;
    color: ${({ active, theme }) => (active ? 'white' : theme.primary)};
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.primary + '20'};
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Selector = styled.div`
    width: 1.5px;
    background-color: black;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const Projects = () => {
    const [active, setToggle] = useState('ALL');

    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Description>
                    A showcase of the diverse projects I've worked on, demonstrating my skills in software development, problem-solving, and innovation.
                </Description>

                <ToggleGroup>
                    {['ALL', 'WEB', 'Cloud Computing', 'Machine Learning'].map((label) => (
                        <React.Fragment key={label}>
                            <ToggleButton
                                active={active === label}
                                onClick={() => setToggle(label)}
                            >
                                {label}
                            </ToggleButton>
                            {label !== 'Machine Learning' && <Selector />}
                        </React.Fragment>
                    ))}
                </ToggleGroup>

                <CardContainer>
                    <ProjectCard />
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;
