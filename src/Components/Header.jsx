import { motion } from "framer-motion"
import { useContext, useEffect } from "react"
import { DarkContext } from "./context"
import "../index.css"
function Header(){
    const{isDark,setIsDark} = useContext(DarkContext);
    
       const clickHandler = () =>{
          setIsDark(!isDark)
       }
    
       useEffect(() => {
         document.body.style.background= isDark ? "#222222" : "white"
         document.body.style.color = isDark ? "white" : "black"
       },[isDark])
    return(
        <header className={`fixed top-0 left-0 right-0 z-50  shadow-md px-8 py-4 transition-colors duration-500 ease-in-out ${isDark ? "bg-[#222222] text-white shadow-white shadow-sm" : "bg-white text-black shadow-sm shadow-black"}`}>
            <div className="flex justify-between">
  <h1 className="text-2xl font-bold text-indigo-700">TourCraft</h1>
  <motion.button 
   onClick={clickHandler}  
   whileHover={{scale:1.05}}
   whileTap={{scale:0.95}}
   transition={{duration:0.7}}
  className="bg-indigo-700 px-4 py-1 rounded-lg text-white hover:bg-indigo-800">Change Theme</motion.button>
       </div>
</header>
    )
}
export default Header
