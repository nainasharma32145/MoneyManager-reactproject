import React from "react";
import "./Expenseform.css";
import { useState } from "react";

export default function Expenseform(props) {
  const [title, settitle] = useState(" ");
  const [amount, setamount] = useState("0");
  const [date, setdate] = useState("");
  const [addexpense, setaddexpense] = useState(false);

  //using event we can fetch thee value by using event.target.value its a object

  const Titlehandler = (event) => {
    settitle(event.target.value); //storing value in the form of state using usestate
    //console.log(title);
  };
  const Amounthandler = (event) => {
    setamount(event.target.value); //storing value in the form of state using usestate
  };
  const Datehandler = (event) => {
    setdate(event.target.value); //storing value in the form of state using usestate
  };

  const AddExpensehandler = () => {
    setaddexpense(true);
  };

  //fetching all the datA OF THE INPUTS AND STORE USING JAVASRIPT
  const formdatahandler = (event) => {
    event.preventDefault();

    const expense = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.saveonexpense(expense);
    settitle(" ");
    setamount(" ");
    setdate(" ");
  };

  return (
    <form onSubmit={formdatahandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={Titlehandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={Amounthandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2028-01-01"
            value={date}
            onChange={Datehandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={AddExpensehandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
}
