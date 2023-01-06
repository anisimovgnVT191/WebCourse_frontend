import React from 'react';

function NavbarCart(props) {
    return (
        <div className="navbar-cart">
            <a className="navbar-cart-link">
                <span>
                    <span className="navbar-cart-small"> Корзина: </span>
                    <span className="navbar-cart-large"> {props.price} РУБ.</span>
                </span>
            </a>
        </div>
    );
}

export default NavbarCart;