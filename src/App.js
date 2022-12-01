import ExpenseItem from "./components/ExpenseItem"
import './index.css'

function App() {
  expenses = [
    {
      date=new Date(2021, 12, 3),
      title="Ojaswini"
    }
  ]
  return (
    <ExpenseItem></ExpenseItem>
  );
}

export default App

