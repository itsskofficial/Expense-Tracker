import ExpenseItem from "./components/ExpenseItem"
import './index.css'

function App() {
  let expenses = [
    {
      date:new Date(2021, 12, 3),
      title:"Ojaswini",
      price:500
    },
    {
      date:new Date(2021, 12, 3),
      title:"Ojaswini",
      price:500
    },
    {
      date:new Date(2021, 12, 3),
      title:"Ojaswini",
      price:500
    }
  ]

  return (
    <div>
      <ExpenseItem expense={expenses[0]}>
      </ExpenseItem>
      <ExpenseItem expense={expenses[1]}>
        </ExpenseItem>
        <ExpenseItem expense={expenses[2]}>
        </ExpenseItem>
    </div>
  )
}

export default App

