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
      date: new Date(2021, 11, 3),
      title: "Ojaswini",
      price: 500,
    },
    {
      date: new Date(2021, 11, 3),
      title: "Ojaswini",
      price: 500,
    },
    {
      date: new Date(2021, 11, 3),
      title: "Ojaswini",
      price: 500,
    },
  ];

  const [expenseItems, setExpenseItems] = useState(expenses)
  const [filterYear,setFilterYear] = useState(2019)

  const addExpenseHandler = (expense) => {
    setExpenseItems((prevExpenses) => {
    return [expense,...prevExpenses]
    })}

  const changeFilterHandler = (year) => {
    setFilterYear(year)
  }

  let expensesContent = <p className="">No expenses for {filterYear}</p>

  return (
    <div className="container">
      <Card className="new-expense-container">
        <NewExpenseItem onAddExpense={addExpenseHandler}></NewExpenseItem>
      </Card>
      <Card className="expense-filter-container">
        <ExpenseFilter onChangeFilter={changeFilterHandler}></ExpenseFilter>
      </Card>
      <Card className="expense-container">
        {expenseItems.filter(expense => expense.date.getFullYear() == filterYear).map((expense,index)=> (
          <ExpenseItem expense={{ key: index, ...expense }}></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default App;
