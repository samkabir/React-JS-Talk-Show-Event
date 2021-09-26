import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Person.css';

const Person = (props) => {
    const {name, img, price, company, net_worth} = props.person;
    const element = <FontAwesomeIcon icon={faUserPlus} />
    return(
        <div className="person-section">
            <div className="person-card">
                 <img src={img} width="200px" height="200px" alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <p>Company: {company}</p>
                <p>Net Worth:<b> {net_worth}</b></p>
                <p>Cost:<b> ${price}</b></p>
                <button onClick={() => props.handleAddToCart(props.person)} className="btn-regular">Add to List {element} </button>
            </div>
        </div> 

    )
}
export default Person;