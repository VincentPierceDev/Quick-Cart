'use client'

import { createContext, useContext, useState, ReactNode } from 'react';
import { ItemData } from '@/global-types/shop/shop-types';

interface ShopContext {
    shopProducts: ItemData[];
    //add filtering here if there is time
}

interface Props {
    initialProducts: ItemData[];    
    children: ReactNode;
}

const ShopContext = createContext<ShopContext | undefined>(undefined);

export function ShopDataProvider(props: Props) {
    const [shopProducts] = useState<ItemData[]>(props.initialProducts);
    return(
        <ShopContext.Provider value={{shopProducts: shopProducts}}>
            {props.children}
        </ShopContext.Provider>
    )
}

export const useShopData = () => {
    const context = useContext(ShopContext);
    if(!context)
        throw new Error('useShopData is not in a ShopDataProvider!');
    return context;
}