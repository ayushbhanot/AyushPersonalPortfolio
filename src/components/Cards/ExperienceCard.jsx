import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.card};
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #3AAFB9;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const DocumentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;   /* moves it to the right */
  margin-top: 6px;
`;

const DocumentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DocumentLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
`;

const ViewButton = styled.button`
  padding: 6px 18px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid #3AAFB9;
  background: transparent;
  color: #3AAFB9;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #3AAFB9;
    color: #000;
    transform: translateY(-1px);
  }
`;




const ExperienceCard = ({ experience }) => {

        return (
            <Card>
                <Top>
                    <Image src={experience.img} />
                    <Body>
                        <Role>{experience.role}</Role>
                        <Company>{experience.company}</Company>
                        <Date>{experience.date}</Date>
                    </Body>
                </Top>
                <Description>
                    {experience?.desc && <Span>{experience?.desc}</Span>}
    
                    {experience?.skills && (
                        <>
                            <br />
                            <Skills>
                                <b>Skills:</b>
                                <ItemWrapper>
                                    {experience?.skills?.map((skill, index) => (
                                        <Skill key={`skill-${index}`}>• {skill}</Skill>
                                    ))}
                                </ItemWrapper>
                            </Skills>
                        </>
                    )}
                 </Description>
                 {/*
                {experience.doc && (
                    <a href={experience.doc} target="new">
                        <Document src={experience.doc} />
                    </a>
                )} */}
               {experience.docLink && (
  <DocumentWrapper>
    <DocumentRow>
      <DocumentLabel>Recommendation Letter:</DocumentLabel>
      <a href={experience.docLink} target="_blank" rel="noreferrer">
        <ViewButton>View</ViewButton>
      </a>
    </DocumentRow>
  </DocumentWrapper>
)}


            </Card>
        );
    };
    
    export default ExperienceCard;
    