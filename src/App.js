import "./App.css";
import NewExpense from "./components/expenses/NewExpense";
import React, { useState } from "react";
import Navbar from "./components/expenses/Navbar";
import Expenses from "./components/expenses/Expenses";

const App = () => {
  const DUMMYitemsexp = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    { id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2024, 2, 12)
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2024, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2025, 5, 12),
    },
    {
      id: "e5",
      title: "almira (Wooden)",
      amount: 4500,
      date: new Date(2023, 5, 12),
    },
  ];
  const [mode, setMode] = useState("light");
  const [alert, setAlrt] = useState(null);
  const [expenses, SetExpenses] = useState(DUMMYitemsexp);

  const showAlrt = (message, type) => {
    setAlrt({
      mssg: message,
      type: type,
    });

    setTimeout(() => {
      setAlrt(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style = "background: #333435;";
      showAlrt("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style = "background: white;";
      showAlrt("Light Mode Enabled", "success");
    }
  };
  //BOTTOM UP APPROACH
  const addexpensehandler = (enterexpense) => {
    SetExpenses((prevExpense) => {
      return [enterexpense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <Navbar
        title="Let's Manage"
        About="AboutUs"
        mode={mode}
        togglemode={togglemode}
      />
      <NewExpense onaddexpense={addexpensehandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
