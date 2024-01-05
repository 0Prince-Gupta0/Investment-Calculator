import React, { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  // const [current, setCurrent] = useState("");
  // const [saving, setSaving] = useState("");
  // const [interest, setInterest] = useState("");
  // const [investment, setInvestment] = useState("");
  const UserInput={
    'current-savings':10000,
   'yearly-contribution':1200,
    'expected-return':7,
    duration:10
  }

  const [userInput, setUserInput]=useState(UserInput);

  const ChangeHandler=(input,value)=>{
    setUserInput((prev)=>{
      return {
        ...prev,
        [input]:+value
      }
    })
  }

  // const currentSavingChangeHandler = (event) => {
  //   return setCurrent(event.target.value);
  // };
  // const yearlySavingChangeHandler = (event) => {
  //   return setSaving(event.target.value);
  // };
  // const expectedInterestChangeHandler = (event) => {
  //   return setInterest(event.target.value);
  // };
  // const investmentChangeHandler = (event) => {
  //   return setInvestment(event.target.value);
  // };
  const resetHandler = (event) => {
    // setCurrent(event.target.value);
    // setSaving(event.target.value);
    // setInterest(event.target.value);
    // setInvestment(event.target.value);
   
     setUserInput(UserInput);

  };
  const submitHandler = (event) => {
    event.preventDefault()
    props.onSave(userInput);
  };
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <div className={`${style["input-group"]}`}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput['current-savings']}
            onChange={(event)=>ChangeHandler('current-savings',event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput['yearly-contribution']}
            onChange={(event)=>ChangeHandler('yearly-contribution',event.target.value)}
          />
        </p>
      </div>
      <div className={`${style["input-group"]}`}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput['expected-return']}
            onChange={(event)=>ChangeHandler('expected-return',event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput['duration']}
            onChange={(event)=>ChangeHandler('duration',event.target.value)}
          />
        </p>
      </div>
      <p className={style.actions}>
        <button type="reset" className={style.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;
