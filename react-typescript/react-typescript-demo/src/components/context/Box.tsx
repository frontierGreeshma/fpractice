import { useContext } from "react"
import { ThemeContext } from "./ThemeContext";

export const Box = () => {

    // use the context defined in ThemeContext.tsx and consume
    const ThemeUse = useContext(ThemeContext);
    
    return <div style={{backgroundColor: ThemeUse.primary.main, color: ThemeUse.primary.text}}>Theme Context</div>
}