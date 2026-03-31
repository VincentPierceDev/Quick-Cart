'use client'
import ShoppingItem from "@/components/shopping/shopping-item/shopping-item";
import { ItemData } from "@/global-types/shop/shop-types"
import { useShopData } from "@/contexts/shop/shop-provider";

export default function ShoppingGrid() {
    const {shopProducts} = useShopData();

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-y-auto w-full h-full bg-[var(--primary-color)] p-3 pt-25 pb-50 md:pd-25 relative">
            <span className="absolute right-0 mr-3 mt-15">Showing {shopProducts.length} Items</span>
            {
                shopProducts.map((x: ItemData) => (
                    <ShoppingItem key={x.id} info={x}/>
                ))
            }
        </div>
    )
}