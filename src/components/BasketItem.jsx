import React from 'react';

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
    } = props;
    return (
        <li className="collection-item">{name} * {quantity} = {price * quantity} руб
            <span className="secondary-content" onClick={() => removeFromBasket(id)}>
                <i className="material-icons basket-delete">close</i></span>
        </li>
    );
};

export {BasketItem};
