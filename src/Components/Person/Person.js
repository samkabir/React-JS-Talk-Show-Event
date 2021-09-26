import React from 'react';
import './Person.css';

const Person = (props) => {
    
    const {name, img, price, company, net_worth} = props.person;
    return(
        <div className="person-section">
            <div className="person-card">
                 <img src={img} width="200px" height="250px" alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <p>Company: {company}</p>
                <p>Net Worth:<b> {net_worth}</b></p>
                <p>Cost:<b> ${price}</b></p>
                <button onClick={() => props.handleAddToCart(props.person)} className="btn-regular">Add to List</button>
            </div>
        </div> 

    )
}
export default Person;