import { ItemData, CartData } from "@/global-types/shop/shop-types"
import { useCart } from "@/contexts/shop/cart-provider"

interface Props {
    cartInfo: CartData;
    shopData: ItemData[];
}

export default function CartItem(props: Props) {
    const {updateCart} = useCart();
    
    return (
        <div>
            {props.cartInfo.id}
        </div>
    )
}