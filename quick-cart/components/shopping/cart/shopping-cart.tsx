'use client'
import { useCart } from "@/contexts/shop/cart-provider";
import { useMenu } from "@/contexts/general/menu-context";
import { CartData } from "@/global-types/shop/shop-types";
import { useState, useEffect } from "react";
import { CheckoutCart } from "@/lib/shop/shop-services";
import { useShopData } from "@/contexts/shop/shop-provider";
import Button from "@/components/global/Button";
import CartItem from './cart-item';

export default function ShoppingCart() {
    const [total, setTotal] = useState<Number>(0);
    const openClass = 'translate-x-0 pointer-events-auto z-50';
    const closedClass = 'translate-x-[120%] pointer-events-none z-0';
    const {cartProducts} = useCart();
    const {shopProducts} = useShopData()
    const {isOpen, closeMenu} = useMenu();

    const checkoutCart = () => {
        CheckoutCart(cartProducts);
    }

    useEffect(() => {
        let runningTotal: number = 0;
        cartProducts.map((product: CartData) => {
            const item = shopProducts.find(x => x.id === product.id);
            if(item)
                return runningTotal += item?.price * product.quantity;
            else
                return 0;
        })

        setTotal(runningTotal);

    }, [cartProducts]);

    return(
        <div className={`flex flex-col gap-15 justify-between pt-4 pl-2 pr-2 w-80 md:w-100 h-full bg-[var(--primary-color)] fixed top-0 right-0 will-change-transform ${isOpen ? openClass : closedClass}`}>
            <div className="sm:pl-1 lg:pl-0 flex flex-row justify-between">
                <span className={`w-80 inline-block relative text-2xl font-bold`}>Shopping Cart</span>
                <Button onClick={closeMenu}>
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
            <div className="pb-3 flex flex-col gap-3 w-80 ml-auto mr-auto">
                <div className="w-full flex flex-row justify-between">
                    <span className="font-extrabold">Total: </span>
                    <span className="font-extrabold">${total}</span>
                </div>
                <Button onClick={checkoutCart} extraClasses="w-80 m-auto">
                    Checkout
                </Button>
            </div>
        </div>
    );
}