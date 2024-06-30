import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #eaeaea;
  text-align: center;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: auto;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <AboutContent>
        <p>This is the about section of the portfolio.</p>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
