'use client'
import Image from "next/image"
import { CartData, ItemData } from "@/global-types/shop/shop-types";
import Button from "../../global/Button/Button";
import { useRef } from "react";
import Rating from "../rating";
import { useCart } from "@/contexts/shop/cart-provider";

interface Props {
    info: ItemData;
}

export default function ShoppingItem(props: Props) {
    const image = useRef<HTMLImageElement>(null);
    const {updateCart} = useCart();

    const aboveFoldCount: number = 3;
    const loadingStyle = props.info.id > aboveFoldCount ? 'lazy' : 'eager';
    const priority: boolean = props.info.id > aboveFoldCount ? false : true;

    const hoverEffect = () => {
        image.current?.classList.add('scale-110');
    }

    const unHoverEffect = () => {
        image.current?.classList.remove('scale-110');
    }

    const addItemToCart = () => {
        updateCart(props.info.id, 1);
    }

    return(
        <div onMouseEnter={hoverEffect} onMouseLeave={unHoverEffect} className="flex flex-col w-full h-full bg-[var(--primary-color)] text-[var(--dark-text)] rounded-md">
            <div className="relative w-full h-50 bg-red-200 overflow-hidden">
                <Image ref={image} fetchPriority="high" priority={priority} className="w-full h-full object-cover absolute transition-transform duration-300 ease-in-out select-none pointer-events-none" loading={loadingStyle} src={props.info.image} alt={`${props.info.title} showcase`} fill={true} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
            </div>
            <div className="flex-grow block p-3 flex flex-col gap-5 shadow-[color:var(--secondary-color)] shadow-md rounded-bl-md rounded-br-md">
                <div className="flex flex-col gap-1">
                    <h2 className="font-bold block">{props.info.title}</h2>
                    <Rating rating={props.info.rating}/>
                </div>
                <p className="text-xs">
                    {props.info.description}
                </p>
                <div className="flex row items-center justify-between w-full mt-auto">
                    <span className="font-bold text-xl">${props.info.price}</span>
                    <Button type="submit" onClick={addItemToCart} ariaDisabled={false} disabledText="Out of Stock">Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}