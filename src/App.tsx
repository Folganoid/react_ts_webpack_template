import React from 'react';
import './styles.css';
import img from './img.png';
import imgSvg from './git.svg';

export default function App() {
  return (
    <>
      <h1>TEST !!!</h1>
      <img src={img} alt="image" />
      <img src={imgSvg} alt="git logo" />
    </>
  );
}