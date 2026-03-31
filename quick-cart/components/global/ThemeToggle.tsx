'use client'

import { useTheme } from "next-themes";
import Button from "./Button/Button";
import { useEffect, useState } from "react";


export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    const [emblem, setEmblem] = useState("");

    const toggleClick = async () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    useEffect(() => {
        setEmblem(theme === "dark" ? "☼" : "☾")
    }, [theme])

    return (
        <Button type="button" extraClasses="w-10" onClick={toggleClick}>{emblem}</Button>
    )
}