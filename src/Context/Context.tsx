import React, { createContext, useState } from 'react'
interface Props {
    children: React.ReactNode
}
interface Form {
    inset: String,
    Horizontaloffset: number,
    Verticaloffset: number,
    Blur: number,
    Spread: number,
}
interface TransForm {
    Scale: number,
    Rotate: number,
    TranslateX: number,
    TranslateY: number,
    SkewX: number,
    SkewY: number,
}

export const contextFirst: React.Context<any> = createContext({})
export const FirstContext = ({ children }: Props) => {
    const [code, setCode] = useState<any[]>([])
    const [handleSeleted, setSelected]: any = useState("No")
    const [dark, setDark] = useState<boolean>(true)
    const [color, setColor] = useState(`#b9b3b3`)
    const [Handlecolors, SetColors] = useState({ background: '#7441e2' })
    const [Handlecolorstwo, SetColorstwo] = useState({ background: '#823e3e' })
    const [Handlecolorsthree, SetColorsthree] = useState<number>(75)
    const [form, setForm] = useState<Form>({
        inset: "No",
        Horizontaloffset: 0,
        Verticaloffset: 0,
        Blur: 0,
        Spread: 0,
    })
    const [TransForm, setTransForm] = useState<TransForm>({
        Scale: 0.5,
        Rotate: 0,
        TranslateX: 0,
        TranslateY: 0,
        SkewX: 0,
        SkewY: 0,
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
            setColor,
            TransForm,
            setTransForm,
            handleSeleted,
            setSelected,
            Handlecolors,
            SetColors,
            Handlecolorstwo,
            SetColorstwo,
            Handlecolorsthree,
            SetColorsthree
        }}>
            {children}
        </contextFirst.Provider>
    )
}
