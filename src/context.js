import React, {createContext, useReducer} from 'react';
import {reducer} from "./reducer";
import {type} from "@testing-library/user-event/dist/type";

export const ShopContext = createContext;

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: "",
}
export const ContextProvider = ({children}) => {
    const [value,dispatch ] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({type: "CLOSE_ALERT"});
    }

    value.addToBasket = (item) => {
        dispatch({type: "ADD_TO_BASKET", payload: item})
    }

    value.incQuantity = (itemID) => {
        dispatch({type: "INCREMENT_QUANTITY", payload: {id: itemID}});
    }

    value.decQuantity = (itemID) => {
        dispatch({type: "DECREMENT_QUANTITY", payload: {id: itemID}});
    }

    value.hadleBasketShow = () => {
        dispatch({type: "TOGGLE_BASKET"})
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: "REMOVE_FROM_BASKET", payload:{id: itemId}})
    }

    return <ShopContext value={value}>
        {children}
    </ShopContext>
}
