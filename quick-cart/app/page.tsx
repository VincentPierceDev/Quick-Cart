import { ItemData } from "@/global-types/shop/shop-types";
import { RetrieveAllShopItems } from "@/lib/shop/shop-services";
import Shop from "@/components/shopping/Shop";

//NOTE: This would typically by at like a specific route
//however, I am just adding it as Next's default home page for simplicity of this project

export const dynamic = 'force-dynamic';

export default async function Home() {
  const storeItems: ItemData[] = await RetrieveAllShopItems();
  console.log(storeItems.length);

  return (
    <Shop data={storeItems}/>
  );
}
