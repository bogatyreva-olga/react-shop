import React from 'react';

const Cart = (props) => {
    const {quantity = 0, handleBasketShow = Function.prototype} = props
    return (
        <div className="cart #bdbdbd grey lighten-1 black-text"
             onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    );
};

export {Cart};
