import '../css/ExpenseItem.css'
import ExpenseItemDate from './ExpenseItemDate'

function ExpenseItem(props) {                                                             
    return (
        <div className="expense-item">
            <ExpenseItemDate expense
            </ExpenseItemDate>
            <div className="expense-item-info">
                <div className="expense-item-title">
                    {props.expense.title}  
                </div>
                <div className="expense-item-price">
                    {props.expense.price}
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem