import React from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
  height: 100vh;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const Home = () => {
  return (
    <HomeSection id="home">
      <div>
        <h2>Welcome to My Portfolio</h2>
        <p>Discover my work and projects.</p>
      </div>
    </HomeSection>
  );
};

export default Home;
