'use client'

import {createContext, useContext, useState, ReactNode} from "react";

interface MenuContextType {
    isOpen: boolean;
    toggleMenu: () => void;
}

interface Props {
    children: ReactNode;
}

const menuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider(props: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <menuContext.Provider value={{isOpen, toggleMenu}}>
            {props.children}
        </menuContext.Provider>
    )
}

export const useMenu = () => {
    const context = useContext(menuContext);
    if(!context) throw new Error("useMenu is not inside a Menuprovider!");
    return context;
}
