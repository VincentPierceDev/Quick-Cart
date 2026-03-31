'use client'
import { useCart } from "@/contexts/shop/cart-provider";
import { useMenu } from "@/contexts/general/menu-provider";
import { CartData } from "@/global-types/shop/shop-types";
import { useState, useEffect } from "react";
import { CheckoutCart } from "@/lib/shop/shop-services";
import CartNotification from "./cart-notification";
import Button from "@/components/global/Button/Button";
import CartItem from './cart-item/cart-item';

export default function ShoppingCart() {
    const [total, setTotal] = useState(0);
    const [checkoutEnabled, setCheckoutEnabled] = useState(false);
    const openClass = 'translate-x-0 pointer-events-auto';
    const closedClass = 'translate-x-[120%] pointer-events-none';
    const {cartProducts, getTotalValue, getItemQuantity} = useCart();
    const {isOpen, closeMenu} = useMenu();

    const checkoutCart = () => {
        if(total > 0)
            CheckoutCart(cartProducts);
    }

    //could use memo on here as well for large data sets
    //don't need to fetch the getTotalValue() every render
    //small data set is just less effecient to useMemo
    useEffect(() => {
        setTotal(parseFloat(getTotalValue().toFixed(2)));
        setCheckoutEnabled(total > 0);
    }, [cartProducts, total]);

    return(
        <div id="shopping-cart" className={`flex flex-col gap-15 justify-between z-50 pt-4 pl-2 pr-2 w-80 md:w-100 h-full bg-[var(--primary-color)] fixed top-0 right-0 will-change-transform transition-all duration-300 ${isOpen ? openClass : closedClass}`}>
            <div className="sm:pl-1 lg:pl-0 flex flex-row justify-between">
                <span className={`w-80 inline-block relative text-2xl font-bold`}>Shopping Cart</span>
                <Button type="button" ariaControls="shopping-cart" onClick={closeMenu}>
                    <span className="text-xl font-extrabold">X</span>
                </Button>
            </div>
            <div className="overflow-y-auto w-auto h-full items-center flex flex-col gap-3">
                {
                    cartProducts.map((product: CartData) => (
                        <CartItem key={product.id} cartInfo={product}/>
                    ))
                }
            </div>
            <div className="pb-3 flex flex-col gap-3 w-60 md:w-70 lg:w-80 ml-auto mr-auto">
                <div className="w-full flex flex-row justify-between">
                    <span className="font-extrabold">Total: </span>
                    <span className="font-extrabold">${total}</span>
                </div>
                <Button type="submit" onClick={checkoutCart} ariaDisabled={!checkoutEnabled} extraClasses="w-full m-auto">
                    Checkout
                </Button>
            </div>
        </div>
    );
}