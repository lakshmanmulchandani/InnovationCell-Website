import React from 'react';
import Snowfall from 'react-snowfall';
import snowflake1 from '../../imgs/snowflake1.png'; // Adjust the path as needed

const img1 = new Image();
img1.src = snowflake1;

const img = [img1, img1]; // Add multiple image elements to the array

const SnowfallComponent = () => {
  return <Snowfall snowflakeCount={100} radius={[7.0,17.0]} images={img} style={{ position: 'fixed' }} />;
}

export default SnowfallComponent;
