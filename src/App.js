import React, { useState } from 'react';
import './style.css';
export default function App() {
  const [chekvalue, setCheckValue] = useState(false);
  const [values, setValues] = useState({
    firstchk: chekvalue,
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    setCheckValue(e.target.checked);
    const name = e.target.name;
    const value = e.target.checked;
    setValues({ ...values, [name]: value });
  };
  const submitdata = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (!isSubmit) {
      console.log('israr hey');
      console.log('values of check click' + chekvalue);
      console.log('values of check click innner' + values.firstchk);
      const allData = { ...values };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allData),
      };
      console.log(requestOptions.body);
      fetch('https://reqres.in/api/posts', requestOptions)
        .then((response) => {
          console.log('post sucess' + response);
          response.json();
        })
        .catch((error) => {
          console.log('failed result' + error);
        });
    }
  };
  return (
    <form onSubmit={submitdata}>
      <h1>Hello StackBlitz!</h1>
      <p>
        <input
          type="checkbox"
          onChange={handleChange}
          value={values.firstchk}
          name="firstChk"
        ></input>
      </p>
      <p>
        <input type="submit" />
      </p>
    </form>
  );
}
