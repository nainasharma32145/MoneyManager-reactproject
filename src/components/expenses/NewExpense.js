import React from "react";
import Expenseform from "./ExpenseForm";
import "./NewExpense.css";
import ExpensesFilter from "./Expensesfilter";

export default function NewExpense(props) {
  //BOTTOM UP APPROACH
  const saveexpensehandler = (enteredexpensedata) => {
    const enterexpense = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };
    props.onaddexpense(enterexpense); //through this we are sending the value to the oarent that is to app component
  };

  return (
    <div className="new-expense">
     
      <Expenseform saveonexpense={saveexpensehandler} />
    </div>
  );
}
