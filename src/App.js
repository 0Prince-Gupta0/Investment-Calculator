import React, { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Table from "./Components/Table";

function App() {

  const [userInput,setUserInput]=useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];
  if(userInput){
    // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    
  }

  return (
    <div>
      <Header></Header>
      <Form onSave={calculateHandler}></Form>
      {!userInput&&<p>No Investment Found</p>}
      {userInput&&<Table data={yearlyData} investment={userInput['current-savings']}></Table>}
    </div>
  );
}

export default App;
