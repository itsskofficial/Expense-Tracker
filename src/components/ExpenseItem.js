import '../css/ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div className="expense-item-date">
                {props.expense.date.toISOString()}
            </div>
            <div className="expense-item-info">
                <div className="expense-item-title">
                    {props.title}  
                </div>
                <div className="expense-item-price">
                    {props.price}
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem