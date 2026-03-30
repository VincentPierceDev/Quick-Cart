'use client'

import {createContext, useContext, useState, ReactNode} from "react";

//could use an array of booleans
//bring in an id from the functions
//then toggle and change the specific button id which coorelates to each menu button on the page
//however, just sticking with a single one for now since that is all the app requires

interface MenuContextType {
    isOpen: boolean;
    toggleMenu: () => void;
    openMenu: () => void;
    closeMenu: () => void;
}

interface Props {
    children: ReactNode;
}

const menuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider(props: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    return (
        <menuContext.Provider value={{isOpen, toggleMenu, openMenu, closeMenu}}>
            {props.children}
        </menuContext.Provider>
    )
}

export const useMenu = () => {
    const context = useContext(menuContext);
    if(!context) throw new Error("useMenu is not inside a Menuprovider!");
    return context;
}
