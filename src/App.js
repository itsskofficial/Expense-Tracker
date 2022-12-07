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

  console.log(expenses.filter(expense => expense.date.getFullYear()))
  console.log(expenses[0].date.getFullYear())

  const [expenseItems, setExpenseItems] = useState(expenses)
  let filterYear=0

  const addExpenseHandler = (expense) => {
    setExpenseItems((prevExpenses) => {
    return [expense,...prevExpenses]
    })}

  const changeFilterHandler = (year) => {
    filterYear=year
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
        {expenses.filter(expense => expense.date.getFullYear() === filterYear).map((expense,index) => (
          <ExpenseItem expense={{ key: index, ...expense }}></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default App;
