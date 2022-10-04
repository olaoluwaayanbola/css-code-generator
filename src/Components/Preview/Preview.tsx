import React, { useState, useContext, useEffect } from 'react'
import {FaClipboard} from "react-icons/fa"
import PreviewStyle from "./Preview.module.scss"
import { contextFirst } from "../../Context/Context"
export const Preview = () => {
    const Contextdata = useContext(contextFirst)
    const [copy, setCopy] = useState<boolean>(false)
    const { code, setCode } = Contextdata
    useEffect(() => {
        setCode([{ background: "background:pink" }, { background: "background:yellow" }])
    }, [])
    const handlecopy: () => void = (): void => {
        navigator.clipboard.writeText(code)
        setCopy(true)
    }
    console.log(code)
    return (
        <div className={PreviewStyle.PreviewContainer}>
            <div className={PreviewStyle.MainContainer}>
                <div className={PreviewStyle.Content}>
                    <div className={PreviewStyle.PreviewContent}>
                    
                    </div>
                </div>
                <div className={PreviewStyle.Code}>
                    <div className={PreviewStyle.Icon} onClick={handlecopy}>
                        <FaClipboard/>
                    </div>
                    <code>
                        {
                            code.map((arr: any, index: any) => {
                                return (
                                    <>
                                        <span key={index}>{arr.background}</span>
                                    </>
                                )

                            })
                        }
                    </code>
                </div>
            </div>
        </div>
    )
}
