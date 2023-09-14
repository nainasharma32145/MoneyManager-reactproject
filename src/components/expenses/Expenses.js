import React from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./Expensesfilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
 //USING FILTER FOR CONDITIONAL OUTPUTTING THAT IS OUTPUT THE DATA BASED ON CONDITIONS
  const filteredexpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensedata=<p>No Expense found.</p>
  // if(filteredexpenses.length > 0)
  // {
  //   expensedata=filteredexpenses.map((expenses) => (
  //     <ExpenseItem
  //       key={expenses.id}
  //       title={expenses.title}
  //       amount={expenses.amount}
  //       date={expenses.date}
  //     />
  //   ));
  // }
 
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredexpenses} />
      <ExpensesList items={filteredexpenses}/>
      {/* RENDERING OUR DATA DYNAMICALLY WITH THE HELP OF MAP} */}
      
       {/* {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))} */}
    </Card>
  );
}
