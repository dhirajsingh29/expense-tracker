import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 247,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 32500, date: new Date(2022, 9, 10) },
  {
    id: 'e3',
    title: 'Bike Insurance',
    amount: 2200,
    date: new Date(2023, 2, 25),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 4500,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {return [expense, ...prevExpense]});
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
