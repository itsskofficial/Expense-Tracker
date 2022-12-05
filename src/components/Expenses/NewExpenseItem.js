
const NewExpenseItem = function () {
    return (
        <div>
            <form>
                <div className="new-expense-item-controls">
                    <div className="new-expense-item-control">
                        <label for="new-expense-item-title-input" className="new-expense-item-title">
                            Title
                        </label>        
                        <input type="text" className="new-expense-item-title-input" id="new-expense-item-title-input"></input>
                    </div>
                    <div className="new-expense-item-control">
                        <label for="new-expense-item-amount-input" className="new-expense-item-label">
                            Title
                        </label>        
                        <input type="text" className="new-expense-item-title-input" id="new-expense-item-title-input"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}