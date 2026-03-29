import { ItemData } from "@/global-types/shop/shop-types";
import { RetrieveAllShopItems } from "@/lib/shop/shop-services";
import { ShopDataProvider } from "@/contexts/shop/shop-provider";
import ShoppingGrid from "@/components/shopping/shopping-grid";

//NOTE: This would typically by at like a specific route
//however, I am just adding it as Next's default home page for simplicity of this project

export default async function Home() {
  const storeItems: ItemData[] = await RetrieveAllShopItems();

  return (
    <>
      <ShopDataProvider initialProducts={storeItems}>
          <ShoppingGrid/>
      </ShopDataProvider>
    </>
  );
}
