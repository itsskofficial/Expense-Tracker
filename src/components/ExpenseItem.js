import '../css/ExpenseItem.css'

function ExpenseItem(props) {
    const month=props.expense.date.toLocaleString('en-US', {month:'long'})                                                               
    const day=props.expense.date.toLocaleString('en-US', {day:'2-digit'})                                                               
    const year=props.expense.date.getFullYear()                                                              
    return (
        <div className="expense-item">
            <div className="expense-item-date">
                <div >
                    {month}
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