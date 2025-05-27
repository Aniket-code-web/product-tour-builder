import { createContext } from "react";

export const DarkContext = createContext({
    isDark:true,
    setIsDark : () => {},
    text : "",
    setText : () => {}
})