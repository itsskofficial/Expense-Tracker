import '../css/ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2021, 3, 28)
    const expenseTitle = "Ojaswini's Bracelet"
    const expensePrice= 294

    return (
        <div className="expense-item">
            <div className="expense-item-date">
                {expenseDate}
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