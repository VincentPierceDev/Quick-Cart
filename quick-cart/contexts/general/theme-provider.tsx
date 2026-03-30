"use client"

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export function DarkModeThemeProvider(props: Props) {
    return(
        <ThemeProvider attribute="class">
            {props.children}
        </ThemeProvider>
    )
}