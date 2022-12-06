import './css/ExpenseFilter.css'

const ExpenseFilter = function () {
    [selectedYear,setSelectedYear]
    const yearSelectHandler = (event) => {
        setSelectedYear(event.target.value)
    }

    return (
        <div className="expense-filter">
            <div className="expense-filter-control">
                <label className="expense-filter-label">
                    Filter By Year
                </label>
                <select className="expense-filter-selector">
                    <option value="2019" onClick={yearSelectHandler}>2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter