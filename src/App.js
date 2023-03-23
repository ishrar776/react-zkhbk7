import React, { useState, useEffect } from 'react';
import './style.css';
import Bpp from './Bpp';
export default function App() {
  return (
    <>
      <div>
        <h1>I am parent component</h1>
        <Bpp />
      </div>
    </>
  );
}
//There should be a parent component and a child component
//Child component should render 2 checkboxes
//When we select any checkbox from child component, parent component should //display //the value of the checkbox
