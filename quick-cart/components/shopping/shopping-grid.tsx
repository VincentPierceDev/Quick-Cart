import ShoppingItem from "@/components/shopping/shopping-item";
import { ItemData } from "@/global-types/shop-types"
import { RetrieveAllShopItems } from "@/services/shop-services"

interface Props {
    addToCart: Function;
}

export default async function ShoppingGrid(props: Props) {
    const shopData: ItemData[] = await RetrieveAllShopItems();
    
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-scroll w-full h-full bg-blue-300">
            {
                shopData.map((x: ItemData) => (
                    <ShoppingItem key={x.id} info={x}/>
                ))
            }
        </div>
    )
}