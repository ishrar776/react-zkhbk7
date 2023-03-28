import React, { useState, useEffect } from 'react';
import './style.css';
export default function Bpp(pros) {
  const handleChange = (e) => {
    const chkvalue = e.target.checked ? 'citymontesery' : 'kuchnhi';
    pros.name1(chkvalue);
    console.log(e.target.checked);
    console.log('values of first checkbox' + chkvalue);
  };
  const handleChange1 = (e) => {
    const chkvalue = e.target.checked ? 'citymontesery2' : 'kuchnhi2';
    pros.name2(chkvalue);
    console.log(e.target.checked);
    console.log('values of second checkbox' + chkvalue);
  };
  const options = [
    { Value: 'kasmir', state: 'Kasmir' },
    { Value: 'Chennai', state: 'Anderpradesh' },
    { Value: 'bombay', state: 'Mahrasta' },
  ];
  const bindDropdown = (e) => {
    const selectvalue = e.target.value;
    pros.name3(selectvalue);
    console.log(selectvalue);
  };
  return (
    <>
      <div>
        <h1>I am child component</h1>
        <p>
          <input type="checkbox" onClick={handleChange}></input>
        </p>
        <p>
          <input type="checkbox" onClick={handleChange1}></input>
        </p>
        <p>
          <select onChange={bindDropdown}>
            {options.map((option) => (
              <option value={option.Value}>{option.state}</option>
            ))}
          </select>
        </p>
      </div>
    </>
  );
}
