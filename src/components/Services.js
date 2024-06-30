import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const ServiceBox = styled.div`
  display: inline-block;
  width: 30%;
  margin: 1rem;
  padding: 1rem;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Services = () => {
  return (
    <ServicesSection id="services">
      <h2>My Services</h2>
      <div>
        <ServiceBox>
          <h3>Web Development</h3>
          <p>Creating responsive and modern websites.</p>
        </ServiceBox>
        <ServiceBox>
          <h3>SEO Optimization</h3>
          <p>Improving search engine rankings.</p>
        </ServiceBox>
        <ServiceBox>
          <h3>Consulting</h3>
          <p>Providing expert advice and solutions.</p>
        </ServiceBox>
      </div>
    </ServicesSection>
  );
};

export default Services;
