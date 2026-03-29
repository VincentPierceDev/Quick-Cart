'use client'

import { createContext, useState, ReactNode, useContext } from "react";
import { CartData } from "@/global-types/shop/shop-types";


interface CartContext {
    cartProducts: CartData[];
    updateCart: (id: number, amnt: number) => void;
}

interface Props {
    children: ReactNode;
}

const cartContext = createContext<CartContext | undefined>(undefined);

export function CartDataProvider(props: Props) {
    const [cartItems, setCartItems] = useState<CartData[]>([]);

    const updateItemQuantity = (id: number, amnt: number) => {
        setCartItems((prevItems: any) => {
            const exists = prevItems.find((item: CartData) => item.id == id);

            //take all the data that already exists, and just simply add the new amount that is coming in to the corresponding qnty
            //if a negative comes in adding will still substract still
            if(exists)
                return prevItems.map((item: CartData) => {
                    console.log(item);
                    return item.id === id ? {...item, quantity: item.quantity + amnt} as CartData : item
                }).filter((item: CartData) => item.quantity > 0); //remove item if there are no more

            //just add a completely new item when it doesnt exists
            return amnt > 0 ? [...prevItems, {id, quantity: amnt}] : prevItems;
        })
    }

    return (
        <cartContext.Provider value={{cartProducts: cartItems, updateCart: updateItemQuantity}}>
            {props.children}
        </cartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(cartContext);
    if(!context) throw new Error("useCart ist not inside a CartDataProvider!");
    return context;
}