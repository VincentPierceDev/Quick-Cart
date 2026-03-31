'use client'

import ShoppingCart from "./cart/shopping-cart"
import ShoppingGrid from "./shopping-grid/shopping-grid"
import { ItemData } from "@/global-types/shop/shop-types"
import { ShopDataProvider } from "@/contexts/shop/shop-provider"
import { CartDataProvider } from "@/contexts/shop/cart-provider"

interface Props {
    data: ItemData[]
}

export default function Shop(props: Props) {
    return(
    <>
      <ShopDataProvider initialProducts={props.data}>
      <CartDataProvider>
          <ShoppingGrid/>
          <ShoppingCart/> 
      </CartDataProvider>
      </ShopDataProvider>
    </>
    )
}