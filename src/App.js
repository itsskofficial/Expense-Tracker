import "./index.css";
import "./components/UI/css/Card.css";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpenseItem from "./components/Expenses/NewExpenseItem";

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

  return (
    <div>
      <Card className="new-expense-container">
        <NewExpenseItem></NewExpenseItem>
      </Card>
      <Card className="expense-container">
        <ExpenseItem expense={expenses[0]}></ExpenseItem>
        <ExpenseItem expense={expenses[1]}></ExpenseItem>
        <ExpenseItem expense={expenses[2]}></ExpenseItem>
      </Card>
    </div>
  );
}

export default App;
