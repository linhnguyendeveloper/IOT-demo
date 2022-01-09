import React, { useState } from 'react';
import styled from 'styled-components';
import Temp from './Temp';
import Table from './Table';


const Sensor = () => {
  return (
    <>
      <Title>Sensor Container</Title>
      <Table/>
      <PageContainer>
        <Temp
          name='Temperature 1'
          min={0}
          max={49}
          value={29.0}
          color='#FF3131
'
        />
        <Temp name='Humidity 1' min={0} max={100} value={78.0} color='#39ff14' />
        <Temp
          name='Temperature 2'
          min={0}
          max={49}
          value={35.0}
          color='#FF3131
'
        />

        <Temp name='Humidity 2' min={0} max={100} value={63.0} color='#39ff14' />
        <Temp name='Battery' min={0} max={100} value={86.0} color='#fff01f' />
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

export default Sensor;
