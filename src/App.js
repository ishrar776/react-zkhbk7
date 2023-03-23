import React, { useState } from 'react';
import './style.css';
export default function App() {
  const [chekvalue, setCheckValue] = useState(false);
  //const [chekvalue1, setCheckValue1] = useState(false);
  const [values, setValues] = useState({
    firstchk: chekvalue,
    //firstchk1: chekvalue1,
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    setCheckValue(e.target.checked);
    const name = e.target.name;
    const value = e.target.checked;
    setValues({ ...values, [name]: value });
    //console.log('values of checkbox is' + chekvalue);
    //console.log('revaryvay' + values.firstchk);
  };
  // const handleChange1 = (e) => {
  //   setCheckValue1(e.target.checked);
  //   const name = e.target.name;
  //   const value = e.target.checked;
  //   setValues({ ...values, [name]: value });
  // };
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
          //navigate('/register');
        })
        //.then((data) => setValues(data.message))
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
      {/* <p>
        <input
          type="checkbox"
          onChange={handleChange1}
          value={values.firstchk1}
          name="firstChk1"
        ></input>
      </p> */}
      <p>
        <input type="submit" />
      </p>
    </form>
  );
}
