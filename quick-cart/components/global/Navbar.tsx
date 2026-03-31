'use client'
import Image from "next/image";
import Button from "./Button/Button";
import { useMenu } from "@/contexts/general/menu-provider";
import ThemeToggle from "./ThemeToggle";
import CartNotification from "../shopping/cart/cart-notification";

//ideally navbar would not have cart stuff
//similar issue to the layout, trying to make the project scalable, but have a couple neccessary corners to cut

export default function Navbar() {
    const {openMenu, isOpen} = useMenu();

    return(
        <div className="absolute top-0 left-0 z-40 h-15 w-full h-10 flex flex-row justify-between items-center p-3 bg-[var(--tertiary-color)]">
            <h1 className="text-3xl font-bold">Quick Cart</h1>
            <div className="flex flex-row gap-3">
                <ThemeToggle/>
                <div>
                    <Button type="button" ariaControls="shopping-cart" onClick={openMenu} toggled={isOpen}>
                        <Image className="brightness-0 saturate-100" width={32} height={32} src={"/shopping_cart.svg"} alt="shop icon"/>
                    </Button>
                </div>
            </div>
        </div>
    )    
}