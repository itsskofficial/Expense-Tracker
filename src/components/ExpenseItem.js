import '../css/ExpenseItem.css'

function ExpenseItem(props) {
    const month=props.expense.date.toLocaleString('en-US', {month:'long'})                                                               
    const month=props.expense.date.toLocaleString('en-US', {month:'long'})                                                               
    const month=props.expense.date.toLocaleString('en-US', {month:'long'})                                                               
    return (
        <div className="expense-item">
            <div className="expense-item-date">
                {props.expense.date.toISOString()}
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