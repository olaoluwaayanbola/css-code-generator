import React, { createContext, useState } from 'react'


interface Props {
    children: React.ReactNode
}

export const contextFirst: React.Context<any> = createContext({})
export const FirstContext = ({ children }: Props) => {
    const [dark,setDark] = useState<boolean>(false)
    const trigger = ():void =>{
        setDark(prev => !prev)
    }
    return (
        <contextFirst.Provider value={{
            dark,
            trigger
        }}>
            {children}
        </contextFirst.Provider>
    )
}
