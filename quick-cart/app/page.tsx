'use client' //remove to run on server locally

import { useEffect, useState} from "react"; //comment this out for server
import Shop from "@/components/shopping/Shop";
import { RetrieveAllShopItems } from "@/lib/shop/shop-services";
import { ItemData } from "@/global-types/shop/shop-types";
import Loading from "@/components/global/Loading";

//NOTE: This would typically by at like a specific route
//however, I am just adding it as Next's default home page for simplicity of this project

//export const dynamic = 'force-dynamic';

//add async to function signature for server fetching
export default function Home() {
  //uncomment to server fetch
  //const storeItems: ItemData[] = await RetrieveAllShopItems();

  //comment all of this out to do server fetching instead
  const [storeItems, setStoreItems] = useState<ItemData[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [mount, setMount] = useState<Boolean>(false);

  //comment out this use effect for server fetching
  useEffect(() => {
    setMount(true);

    const fetchItems = async () => {
      try {
        const data = await RetrieveAllShopItems();
        setStoreItems(data);
      } catch (error) {
        console.error("Store Fetch Failed", error);
      } finally {
        setLoading(false);
      }
      return await RetrieveAllShopItems();
    };

    fetchItems();
  }, []);
  
  //server fetching return

  /*
  return(
    <Shop data={storeItems}/>
  ) */
    
  //comment all of this out below here for server fetching
  if(!mount) return null;

  return (
    <>
    {
      loading ? <Loading/> : <Shop data={storeItems}/>
    }
    </>
  );
}
