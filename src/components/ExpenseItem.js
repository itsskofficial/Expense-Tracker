import '../css/ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div className="expense-item-date">
                {props.date.toISOString()}
            </div>
            <div className="expense-item-info">
                <div className="expense-item-title">
                    {expenseTitle}  
                </div>
                <div className="expense-item-price">
                    {expensePrice}
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem