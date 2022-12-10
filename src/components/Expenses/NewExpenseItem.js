import { useState } from 'react'
import './css/NewExpenseItem.css'

const NewExpenseItem = function (props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    let newExpenseForm =
        <div>
            <div className="new-expense-item-actions">
                <div className="new-expense-item-action">
                    <button className="new-expense-item-button">
                        Add New Expense
                    </button>
                </div>
            </div>
        </div>
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title:enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        
        newExpenseForm = 

        props.onAddExpense(expenseData)
    }

    return (
        
    )
}

export default NewExpenseItem