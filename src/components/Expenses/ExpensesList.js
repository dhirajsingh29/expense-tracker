import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = props => {

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            {
                // key prop is required when any component is rendered using map i.e. list
                props.items.map((expense) => (
                    <ExpenseItem
                        // key is an inbuilt props for any custom component or built in HTML components
                        // this is required, else React will manipulate each ExpenseItem component, if new item is added to list
                        // this will have a performance hit and also lead to error if ExpenseItem is a component which has state variable.
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    )
};

export default ExpensesList;