import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={filteredYear} onYearChange={filterYearHandler} />
                {/* key prop is required when any component is rendered using map i.e. list*/}
                {props.items.map((expense) => (
                    <ExpenseItem 
                    // key is an inbuilt props for any custom component or built in HTML components
                    // this is required, else React will manipulate each ExpenseItem component, if new item is added to list
                    // this will have a performance hit and also lead to error if ExpenseItem is a component which has state variable.
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                    />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;