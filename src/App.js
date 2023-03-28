import React, { useState, useEffect } from 'react';
import './style.css';
import Bpp from './Bpp';
export default function App() {
  const [chkone, setCheckone] = useState('');
  const [chktwo, setChecktwo] = useState('');
  const [dropdown, drpValue] = useState('');
  return (
    <>
      <div>
        <p> value of first is {chkone}</p>
        <p> value of first is {chktwo}</p>
        <p> value of selectDropdown is {dropdown}</p>
        <h1>I am parent component</h1>
        <Bpp name1={setCheckone} name2={setChecktwo} name3={drpValue} />
      </div>
    </>
  );
}
//There should be a parent component and a child component
//Child component should render 2 checkboxes
//When we select any checkbox from child component, parent component should //display //the value of the checkbox
