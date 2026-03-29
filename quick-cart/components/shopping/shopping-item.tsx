import Image from "next/image"
import { ItemData } from "@/global-types/shop-types";

interface Props {
    info: ItemData;
}

export default function ShoppingItem(props: Props) {
    return(
        <div className="w-full h-full">
            <div className="relative w-full h-full bg-blue-300">
                <Image className="w-auto h-auto object-cover absolute" loading="lazy" src={props.info.image} alt={`${props.info.title} showcase`} width={0} height={0}/>
            </div>
            
        </div>
    )
}