import "./index.css";
import "./components/UI/css/Card.css";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpenseItem from "./components/Expenses/NewExpenseItem";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { useState } from "react";

function App() {
  let expenses = [
    {
      date: new Date(2021, 12, 3),
      title: "Ojaswini",
      price: 500,
    },
    {
      date: new Date(2021, 12, 3),
      title: "Ojaswini",
      price: 500,
    },
    {
      date: new Date(2021, 12, 3),
      title: "Ojaswini",
      price: 500,
    },
  ];

  const [expenseItems,setExpenseItems] = useState(expenses)

  const addExpenseHandler = (expense) => {
    console.log(expense)
  }

  const changeFilterHandler = (year) => {
    console.log(year)
  }

  return (
    <div className="container">
      <Card className="new-expense-container">
        <NewExpenseItem onAddExpense={addExpenseHandler}></NewExpenseItem>
      </Card>
      <Card className="expense-filter-container">
        <ExpenseFilter onChangeFilter={changeFilterHandler}></ExpenseFilter>
      </Card>
      <Card className="expense-container">
        {expenses.map((expense) => (
          <ExpenseItem expense={expense}></ExpenseItem>
        ))}
        {/* <ExpenseItem expense={expenses[0]}></ExpenseItem>
        <ExpenseItem expense={expenses[1]}></ExpenseItem>
        <ExpenseItem expense={expenses[2]}></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default App;
