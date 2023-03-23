import React, { useState, useEffect } from 'react';
import './style.css';
export default function App() {
  const [chekvalue, setCheckValue] = useState(false);
  const [values, setValues] = useState({
    firstchk: chekvalue,
  });
  const handleChange = (e) => {
    console.log(e.target.checked);
    setCheckValue(e.target.checked);
    const name = e.target.name;
    const value = e.target.checked;
    setValues({ ...values, [name]: value });
    console.log('values of check click' + chekvalue);
    console.log('values of check click innner' + values.firstchk);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>
        <input
          type="checkbox"
          onClick={handleChange}
          value={values.firstchk}
          name="firstChk"
        ></input>
      </p>
    </div>
  );
}
//There should be a parent component and a child component
//Child component should render 2 checkboxes
//When we select any checkbox from child component, parent component should //display //the value of the checkbox
