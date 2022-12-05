
const NewExpenseItem = function () {
    return (
        <div>
            <form>
                <div className="new-expense-item-controls">
                    <div className="new-expense-item-control">
                        <label for="new-expense-item-title-input" className="new-expense-item-label">
                            Title
                        </label>        
                        <input type="text" className="new-expense-item-title-input" id="new-expense-item-title-input"></input>
                    </div>
                    <div className="new-expense-item-control">
                        <label for="new-expense-item-amount-input" className="new-expense-item-label">
                            Amount
                        </label>        
                        <input type="number" className="new-expense-item-amount-input" id="new-expense-item-amount-input" min="0.01" step="0.01"></input>
                    </div>
                    <div className="new-expense-item-control">
                        <label for="new-expense-item-date-input" className="new-expense-item-label">
                            Amount
                        </label>        
                        <input type="d" className="new-expense-item-amount-input" id="new-expense-item-amount-input" min="0.01" step="0.01"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}