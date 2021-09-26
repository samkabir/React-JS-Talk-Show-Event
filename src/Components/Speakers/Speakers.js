import React, { useEffect, useState} from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Speakers.css';

const Speakers = () => {
    const [person, setPerson] = useState([]);
    const [cart, setCart] =useState([]);

    useEffect( () => {
        fetch('./people.JSON')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, []);

    const handleAddToCart = (person) => {
        const newCart = [...cart, person]
        setCart(newCart);
    }

    return( 
        <div className="shop-container">
            <div className="people-container">
                {
                    person.map(person => <Person
                        key={person.key}
                        person = {person} 
                        handleAddToCart = {handleAddToCart}
                        >
                        </Person>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    )
}
export default Speakers;