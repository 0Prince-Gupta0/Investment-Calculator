import React from "react";
import style from "./Table.module.css";
const Table = (props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
   
 
  
  return (
    <table className={style.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yeardata) => (
          <tr key={yeardata.year}>
            <td>{yeardata.year}</td>
            <td>{formatter.format(yeardata.savingsEndOfYear)}</td>
            <td>{formatter.format(yeardata.yearlyInterest)}</td>
            <td>
              {formatter.format(yeardata.savingsEndOfYear -
                props.investment -
                yeardata.yearlyContribution * yeardata.year)}
            </td>
            <td>
              {formatter.format(props.investment + yeardata.yearlyContribution * yeardata.year)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
