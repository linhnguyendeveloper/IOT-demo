import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-input-slider';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: any) => <Marker>{text}</Marker>;

const Map = ({ name, min, max, value, color }: any) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (a: any) => {
    setChecked(a);
  };
  const data = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD6VJ2Gu0K0_W-4G1Oy_H8O1vbn1dauRIc' }}
        defaultCenter={data.center}
        defaultZoom={data.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
      </GoogleMapReact>
    </div>
  );
};

const Marker = styled.div`
  width: 70px;
  height: 50px;
  background: red;
  color: white;
  border-radius: 3px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Min = styled.div`
  position: absolute;
  left: 50px;
  font-weight: bold;
  font-size: 18px;
`;
const Max = styled.div`
  position: absolute;
  right: 50px;
  font-weight: bold;
  font-size: 18px;
`;

const CardContainer = styled.div`
  display: flex;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  width: 350px !important;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
  background: black;
  color: white;
  padding: 50px 20px;
  position: relative;
`;

const ControlContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Status = styled.h1`
  font-size: 40px;
`;

const StatusOn = styled.div`
  margin-top: 20px;
  font-size: 35px;
  font-weight: bold;
  color: #04d9ff;
`;
const Name = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #04d9ff;
`;

export default Map;
