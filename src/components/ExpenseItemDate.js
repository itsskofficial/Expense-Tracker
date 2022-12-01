function ExpenseItemDate(props) {
    const month=props.expense.date.toLocaleString('en-US', {month:'long'})                                                               
    const day=props.expense.date.toLocaleString('en-US', {day:'2-digit'})                                                               
    const year = props.expense.date.getFullYear() 
    
}