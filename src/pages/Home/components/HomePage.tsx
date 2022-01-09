import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Temp from './Temp';

const HomePage = () => {
  return (
    <>
      <Title>Control Container</Title>
      <PageContainer>
        <Card name='State' title='State Daikin' controlName='Control' />
        <Card name='Light' title='State Light' controlName='Control Light' />
        <Temp name='Temp Daikin' title='Temperature Daikin' controlName='Control Temp' />
        <Card name='Fan' title='State Fan' controlName='Control Fan' />
      </PageContainer>
    </>
  );
};

const Title = styled.h1`
  margin-left:20px;
  font-size:40px;
`;
const PageContainer = styled.div`
  display: grid;
  width: 100vw;
  /* justify-content: center; */
  grid-template-columns: 48% 48%;
  text-align: center;
`;

export default HomePage;
