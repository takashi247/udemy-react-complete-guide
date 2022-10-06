import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState('2020');

  const selectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(item => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectYear={ selectYearHandler } />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;