// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Sun from "./Sun";

type Theme = "light" | "dark"

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (

        <Button isIconOnly variant="light" onPress={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <Sun /> : <Sun />}</Button>

    )
};