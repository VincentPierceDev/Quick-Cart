import Image from "next/image";
import Button from "./Button";


export default function Navbar() {
    return(
        <div className="absolute top-0 left-0 z-999 h-15 w-full h-10 flex flex-row justify-between items-center p-3 bg-[var(--tertiary-color)]">
            <h1 className="text-3xl font-bold">Quick Cart</h1>
            <Button>
                <Image width={32} height={32} src={"/shopping_cart.svg"} alt="shop icon"/>
            </Button>
        </div>
    )    
}