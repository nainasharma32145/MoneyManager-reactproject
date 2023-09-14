import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

export default function ExpensesList(props) {
  
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>
  }
  // if(props.items.length > 0)
  // {
  //   expensedata=props.items.map((expenses) => (
  //     <ExpenseItem
  //       key={expenses.id}
  //       title={expenses.title}
  //       amount={expenses.amount}
  //       date={expenses.date}
  //     />
  //   ));
  // }
  return (
    <ul className="expenses-list">
      {props.items.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))
      }
    </ul>
  );
}
