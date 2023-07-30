import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;

    return (
        // children is a reserved word and is by default passed to each component even though
        // no other props are passed
        <div className={classes}>{props.children}</div>
    );
}

export default Card;