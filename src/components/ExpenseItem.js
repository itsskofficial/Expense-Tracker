import '../css/ExpenseItem.css'

function ExpenseItem() {
    expenseDate = new Date(2021, 3, 28)
    
    return (
        <div className="expense-item">
            <div className="expense-item-date">
                Date
            </div>
            <div className="expense-item-info">
                <div className="expense-item-title">
                    Title  
                </div>
                <div className="expense-item-price">
                    Price
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem