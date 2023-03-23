import React, { useState, useEffect } from 'react';
import './style.css';
export default function App() {
  const handleChange = (e) => {
    const chkvalue = e.target.checked ? 'citymontesery' : 'kuchnhi';
    console.log(e.target.checked);
    console.log('values of first checkbox' + chkvalue);
  };
  const handleChange1 = (e) => {
    const chkvalue = e.target.checked ? 'citymontesery2' : 'kuchnhi2';
    console.log(e.target.checked);
    console.log('values of second checkbox' + chkvalue);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>
        <input type="checkbox" onClick={handleChange}></input>
      </p>
      <p>
        <input type="checkbox" onClick={handleChange1}></input>
      </p>
    </div>
  );
}
//There should be a parent component and a child component
//Child component should render 2 checkboxes
//When we select any checkbox from child component, parent component should //display //the value of the checkbox
