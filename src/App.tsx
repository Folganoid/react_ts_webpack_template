import React from 'react';
import './styles.css';
import img from './img.png';
import imgSvg from './git.svg';

export default function App() {
  return (
    <>
      <h1>TEST !!!</h1>
      <h2>{process.env.NODE_ENV}</h2>
      <h3>{process.env.name}</h3>
      <img height="100" src={img} alt="image" />
      <img height="100" src={imgSvg} alt="git logo" />
    </>
  );
}