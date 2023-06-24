import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order';
import Profile from './Profile';




const showOrders = (props) => {

    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />))}
        <p className='summa'>Сумма:{new Intl.NumberFormat().format(summa)}$</p>

    </div>
    )
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>No goods</h2>

    </div>)
}


export default function Header(props) {



    let [cartOpen, setCartOpen] = useState(false);
    let [showProfile, setshowProfile] = useState(false);



    return (
        <header>
            <div>
                <div className='logo'> House accessories</div>
            </div>
            <ul className='nav'>
                <li>Our company</li>
                <li>Delivery</li>
                <li onClick={() => setshowProfile(showProfile = !showProfile)}>Profile

                </li>
            </ul>
            {showProfile &&
                <Profile onClick={() => setshowProfile(showProfile = !showProfile)} />}



            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />


            {cartOpen && (
                <div className='shop-cart'>
                    {props.orders.length > 0 ? showOrders(props) : showNothing()}
                </div>

            )}

            <div className='presentation'></div>
        </header>

    )
}
