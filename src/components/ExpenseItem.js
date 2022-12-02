import '../css/ExpenseItem.css'
import Card from './Card'
import ExpenseItemDate from './ExpenseItemDate'

function ExpenseItem(props) {                                                             
    return (
        <Card className="expense-item">
            <ExpenseItemDate expenseDate={props.expense.date}>
            </ExpenseItemDate>
            <div className="expense-item-info">
                <div className="expense-item-title">
                    {props.expense.title}  
                </div>
                <div className="expense-item-price">
                    ${props.expense.price}
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem