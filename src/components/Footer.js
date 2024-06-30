import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </FooterSection>
  );
};

export default Footer;
