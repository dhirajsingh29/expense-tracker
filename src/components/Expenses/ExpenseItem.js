import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    return (
        // because of props.children used inside of Card component we are able to pass
        // other components as child to Card component. example is ExpenseDate under Card.

        // className is a default attribute for HTML tags and not custom component. 
        // Hence, className used under Card is passed as prop to Card component and used there. 
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>Rs {props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;