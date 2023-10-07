"use client";

import { useState, createContext } from "react";

export const Menu = createContext("")

export default function MenuProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return <Menu.Provider value={{ isOpen, setIsOpen }}>{children}</Menu.Provider>
}