import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/constant';
import { TypewriterClass } from 'typewriter-effect';
import Typewriter from "typewriter-effect";
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm";

const HeroContainer = styled.div`
background-color: ${({ theme }) => theme.card_light};
display: flex;

height: auto;
justify-content: center;
position: relative;
z-index: 1;
padding: 80px 30px;
clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
`;

const HeroBg = styled.div`
position: absolute;
display: flex;
justify-content: end;
top: 0;
right: 0;
bottom: 0;
left: 0;
overflow: hidden;
width: 100%;
height: 100%;
padding: 0 30px;
top: 50%;
left: 50%;
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);

@media screen and (max-width: 960px) {
padding: 0 0px;
justify-content: center;
}
`;

/*
const HeroInnerContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 1100px;

@media screen and (max-width: 960px) {
flex-direction: column;
}
`;*/

const HeroInnerContainer = styled.div`
position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: auto;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  height: auto;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MyTitle = styled.div`
font-size: 50px;
font-weight: 700;
color: ${({ theme }) => theme.text_primary};
line-height: 68px;

@media screen and (max-width: 960px) {
text-align: center;
}

@media screen and (max-width: 640px) {
font-size: 40px;
line-height: 48px;
margin-bottom: 8px;
}
`;

const TextAnimation = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  gap: 12px;
  display: flex;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const HighlightedSpan = styled.span`
  font-weight: 700; /* Bold text */
  color: ${({ theme }) => theme.primary}; /* Light blue color */
  cursor: pointer;
`;


const Span = styled.span`
color: ${({ theme }) => theme.primary};
cursor: pointer;
`;

const Description = styled.div`
font-size: 20px;
color: ${({ theme }) => theme.text_primary+95};
line-heigh: 32px;
margin-bottom: 32px;
@media screen and (max-width: 960px) {
text-align: center;
}
@media screen and (max-width: 640px) {
font-size: 16px;
line-height: 32px;
}
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: auto%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  /* Gradient based on website theme */
  background: linear-gradient(to right, #007bff, #00c853); 
  color: #fff; 

  &:hover {
    transform: scale(1.05); /* This line was missing a semicolon */
    background: linear-gradient(to right, #0056b3, #009432); 
  }
`;

const ParticleContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: ;
`;

const SocialContainer = styled.div`
width: 100%;
  display: flex;
  order: 2;
    justify-content: end;
          margin-bottom: 100px;
  gap: 50px;

  a {
      display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; /* Center the text */
    text-decoration: none; /* Remove underline */
    color: white;
    font-size: 25px;
    font-weight: 700;
  }

    span {
    margin-top: 15px; /* Add margin-top to the span */
  }

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
        margin-bottom: 80px;
`;

const Social = styled.span`
    color: ${({ theme }) => theme.white}; /* Set text color to white */
    font-size: 14px; /* Adjust font size as needed */
    font-weight: 400; /* Adjust font weight as needed */
    text-decoration: none; /* Remove underline */
`;

const HeroRightContainer = styled.div`
   width: 100%;
      flex-wrap: nowrap
        display: flex;
          order: 2;
  justify-content: end;
  gap: 12px;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;


const Education = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px; 
  padding: 10px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 20px; 
  box-shadow: 0px 4px 6px rgba(0, 175, 185, 0.4);
  width: 100%;
  max-width: 600px;
  gap: 20px;

 .education-text {
    flex: 2;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.8;
    text-align: left;

    p {
      margin: 0;  */
    }

    p:first-child {
      font-size: 18px;
      font-weight: 500; 
    }

    p:last-child {
      margin-top: 8px;
      font-style: italic;
      color: gray;
      font-size: 15px;
    }
  }

  .education-logo {
    flex: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
      height:100px;
      object-fit: contain;
      border-radius: 10px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    .education-logo {
      margin-top: 10px;
    }
  }
`;




const Hero = () => {
const [centerX, setCenterX] = useState(0);
const [centerY, setCenterY] = useState(0);
const containerRef = useRef(null);
const configs = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  background: {
    color: "transparent",
  },
};


useEffect(() => {
const loadParticles = async () => {
await loadAll(tsParticles);
await tsParticles.load({
id: "tsparticles",
options: configs,
});
const container = containerRef.current;
const containerRect = container.getBoundingClientRect();
const centerX = containerRect.left + containerRect.width / 2;
const centerY = containerRect.top + containerRect.height / 2;
};
loadParticles();
}, []);

return (
<div id="about">
<ParticleContainer id="tsparticles" ref={containerRef}></ParticleContainer>
<HeroContainer>
<HeroBg>
</HeroBg>
<HeroInnerContainer>
<HeroLeftContainer>
<MyTitle>Hi, I am
<br />{Bio.name}
</MyTitle>

<TextAnimation>
  I am a
  <span>
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        delay: 75,
        strings: Bio.roles.map(
          (role) =>
            `<span style="font-weight: bold; color: #3AAFB9">${role}</span>`
        ),
      }}
      onInit={(typewriter) => {
        Bio.roles.forEach((role, index) => {
          typewriter
            .typeString(
              `<span style="font-weight: bold; color: #3AAFB9">${role}</span>`
            )
            .pauseFor(1000)
            .deleteAll();
        });
        typewriter.start();
      }}
    />
  </span>
</TextAnimation>

<Description>
{Bio.description}
</Description>
<Education>
  <div className="education-text">
    <p>{Bio.education.description}</p>
    <p>Expected Graduation Year: {Bio.education.graduationYear}</p>
  </div>
  <img
    className="education-logo"
    src={Bio.education.logo}
    alt="Western University Logo"
  />
</Education>

</HeroLeftContainer>
<HeroRightContainer>
<SocialContainer>
<a href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
    <img
      src="assets/linkedin-logo.svg"
      alt="LinkedIn"
      style={{
        width: "150px",
        height: "150px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.1)";
        e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "none";
      }}
    />
    <Social>LinkedIn</Social>
  </a>
  <a href={Bio.github} target="_blank" rel="noopener noreferrer">
    <img
      src="assets/github-logo.svg"
      alt="GitHub"
      style={{
        width: "150px",
        height: "150px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.1)";
        e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "none";
      }}
    />
    <Social>GitHub</Social>
  </a>
  <a href={`mailto:${Bio.email}`} target="_blank" rel="noopener noreferrer">
    <img
      src="assets/gmail-logo.svg"
      alt="Gmail"
      style={{
        width: "150px",
        height: "150px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.1)";
        e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "none";
      }}
    />
    <Social>Email</Social>
  </a>
</SocialContainer>
<ResumeButton href={Bio.resume} target="display">See Resume</ResumeButton>
</HeroRightContainer>
</HeroInnerContainer>
</HeroContainer>
</div>
);
};

export default Hero;