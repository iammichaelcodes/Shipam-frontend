import React, { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";


const ResizeContext = createContext();
export const ResizeObserver = ({children}) => {
    const [width, setWidth] = useState(window.innerWidth)
    
    const handlesize = () => {
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize', handlesize)
        handlesize();
        return() => {
        window.removeEventListener('resize', handlesize)
        }
    },[])
    
    return(
        <ResizeContext.Provider value={{width}}>
              { children }
        </ResizeContext.Provider>
    )

}

export const Useviewport = () => {
    return(
        useContext(ResizeContext)
    )
}