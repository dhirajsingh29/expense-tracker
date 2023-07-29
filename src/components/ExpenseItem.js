import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2023, 2, 25);
    const expenseTitle = 'Bike Insurance';
    const expenseAmount = 2200; 

    return (
        <div className='expense-item'>
            <div>{expenseDate.toString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>Rs {expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;