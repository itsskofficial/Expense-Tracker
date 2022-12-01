import '../css/ExpenseItem.css'

function ExpenseItem(props) {                                                             
    return (
        <div className="expense-item">
            <div className="expense-item-date">
                <div className="expense-item-date-month">
                    {month}
                </div>
                <div className="expense-item-date-day">
                    {day}
                </div>
                <div className="expense-item-date-year">
                    {year}
                </div>
            </div>
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