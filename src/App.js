import "./index.css";
import "./css/Card.css";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/ExpenseItem";

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
    <Card className="expense-container">
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
    </Card>
  );
}

export default App;
