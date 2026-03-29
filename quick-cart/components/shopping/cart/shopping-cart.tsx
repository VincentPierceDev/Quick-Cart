'use client'
import { useEffect } from "react";
import { useCart } from "@/contexts/shop/cart-provider";
import { useMenu } from "@/contexts/general/menu-context";
import { CartData } from "@/global-types/shop/shop-types";
import CartItem from './cart-item';

export default function ShoppingCart() {
    const {cartProducts} = useCart();
    const {isOpen} = useMenu();
    
    useEffect(() => {
        console.log(cartProducts);
        console.log(isOpen);
    }, [cartProducts, isOpen]);
    
    return(
        <div className="p-4 w-80 md:w-100 h-full bg-[var(--primary-color)] z-50 absolute right-0 top-0">
            <span className={`w-80 inline-block relative text-2xl font-bold`}>Shopping Cart</span>
            <div className="overflow-scroll w-auto h-100">
                {
                    cartProducts.map((product: CartData) => (
                        <CartItem key={product.id} cartInfo={product}/>
                    ))
                }
            </div>
        </div>
    );
}