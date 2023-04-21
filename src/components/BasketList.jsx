import React from 'react';
import {BasketItem} from "./BasketItem";

const BasketList = (props) => {
    const {order = []} = props
    return (
        <ul className="collection">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item}/>
                )) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">Общая стоимость:</li>
        </ul>
    )
};

export {BasketList};
