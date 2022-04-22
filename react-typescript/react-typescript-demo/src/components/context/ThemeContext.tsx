import React, { createContext } from "react"
import { theme } from "./theme"

type ThemeContextProviderProps = {
    children: React.ReactNode
}

// create context
export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
            // Provide context  
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}