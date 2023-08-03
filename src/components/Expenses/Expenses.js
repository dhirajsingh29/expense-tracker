import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpense = props.items.filter(expense => expense.date.getFullYear() === Number(filteredYear));

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={filteredYear} onYearChange={filterYearHandler} />
                <ExpensesChart expenses={filteredExpense} />
                <ExpensesList items={filteredExpense}/>
            </Card>
        </div>
    )
}

export default Expenses;