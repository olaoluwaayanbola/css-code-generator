import React, { createContext, useState } from 'react'
interface Props {
    children: React.ReactNode
}
interface Form {
    Horizontaloffset: number,
    Verticaloffset: number,
    Blur: number,
    Spread: number,
  }

export const contextFirst: React.Context<any> = createContext({})
export const FirstContext = ({ children }: Props) => {
    const [code, setCode] = useState<any[]>([])
    const [dark, setDark] = useState<boolean>(false)
    const [color, setColor] = useState(`#ffff`)
    const [form, setForm] = useState<Form>({
        Horizontaloffset: 0,
        Verticaloffset: 0,
        Blur: 0,
        Spread: 0,
      })
    const trigger = (): void => {
        setDark(prev => !prev)
    }
    return (
        <contextFirst.Provider value={{
            code,
            setCode,
            dark,
            trigger,
            form,
            setForm,
            color,
            setColor
        }}>
            {children}
        </contextFirst.Provider>
    )
}
