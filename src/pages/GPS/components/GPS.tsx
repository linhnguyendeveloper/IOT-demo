import React, { useState } from 'react';
import styled from 'styled-components';
import Map from './Map';

const GPS = () => {
  return (
    <>
      <Title>Tracking Container</Title>
      <PageContainer>
        <Map />
      </PageContainer>
    </>
  );
};

const Title = styled.h1`
  margin-left: 20px;
  font-size: 40px;
`;
const PageContainer = styled.div`
  display: grid;
  width: 100vw;
  /* justify-content: center; */
  grid-template-columns: 32% 32% 32%;
  text-align: center;
`;

export default GPS;
