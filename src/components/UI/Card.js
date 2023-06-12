import React from 'react' ;
import classes from './Card.module.css' ;
const Card = props =>{
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
}
export default Card;
//we merged external class coming from one of the pops in the addUser components 