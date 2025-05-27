import { useState } from "react"
import { DarkContext } from "./context"

function ContextProvider({children}){
   const [isDark, setIsDark] = useState(true);
   const [text,setText] = useState("")

   return(
     <DarkContext.Provider
       value={{isDark,setIsDark,text,setText}}
     >
       {children}
     </DarkContext.Provider>
   )
}
export default ContextProvider