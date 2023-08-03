import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        setShowAddExpenseForm(false);

        props.onAddExpense(expenseData);
    };

    const cancelExpenseHandler = () => {
        setShowAddExpenseForm(false);
    }

    const addNewExpenseHandler = () => {
        setShowAddExpenseForm(true);
    }

    return (
        <div className='new-expense'>
            {!showAddExpenseForm && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
            {showAddExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancelAddForm={cancelExpenseHandler} />}
        </div>
    );
}

export default NewExpense;