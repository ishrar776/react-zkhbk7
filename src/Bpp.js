import React, { useState, useEffect } from 'react';
import './style.css';
export default function Bpp() {
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
      <h1>I am child component</h1>
      <p>
        <input type="checkbox" onClick={handleChange}></input>
      </p>
      <p>
        <input type="checkbox" onClick={handleChange1}></input>
      </p>
    </div>
  );
}
