'use client'
import { ItemData, CartData } from "@/global-types/shop/shop-types"
import { useCart } from "@/contexts/shop/cart-provider"
import { useShopData } from "@/contexts/shop/shop-provider";
import { useMemo } from "react"; //keep for testing
import Button from "@/components/global/Button/Button";
import Image from "next/image";

interface Props {
    cartInfo: CartData;
}

export default function CartItem(props: Props) {
    const {updateCart, cartProducts} = useCart();
    const {shopProducts} = useShopData();
    
    //usememo overhead would probably be more expensive than just using it like this
    const item = shopProducts.find(
        (e: ItemData) => e.id === props.cartInfo.id
    );

    //however, here is the useMemo implementation for scalability
    /*
    const item = useMemo(() => {
        return shopProducts.find(
            (e: ItemData) => e.id === props.cartInfo.id
        );
    }, [shopProducts, props.cartInfo.id]); */

    const addItem = () => {
        updateCart(props.cartInfo.id, 1);
    }

    const removeItem = () => {
        updateCart(props.cartInfo.id, -1);
    }

    const deleteItem = () => {
        updateCart(props.cartInfo.id, -Number.MAX_SAFE_INTEGER);
    }

    if(!item) return null;

    const shortenedTitle = item.title.slice(0, 25);

    return (
        <div className="flex flex-row gap-3 p-1 w-full rounded-sm border-2 border-gray-400 text-[var(--dark-text)]">
            <div className="relative w-20 h-20 bg-red-200 overflow-hidden rounded-sm">
                <Image fetchPriority="low" priority={false} className="w-full h-full object-cover absolute transition-transform duration-300 ease-in-out select-none pointer-events-none" loading={"lazy"} src={item.image} alt={`${item.title} thumbnail`} fill={true} sizes="(max-width: 767px) 30vw, (max-width: 1023px) 20vw, 5vw" />
            </div>
            <div className="flex flex-col mr-auto w-full">
                <span>{shortenedTitle}...</span>
                <span>${item.price}</span>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-5 items-center">
                    <Button type="button" onClick={removeItem}>-</Button>
                    <span>{props.cartInfo.quantity}</span>
                    <Button type="button" onClick={addItem}>+</Button>
                </div>
                <Button type="button" onClick={deleteItem}>🗑</Button>
            </div>
            </div>
        </div>
    )
}