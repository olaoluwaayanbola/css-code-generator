import React, { useState, useContext, useMemo } from 'react'
import { FaClipboard } from "react-icons/fa"
import { FaClipboardCheck } from "react-icons/fa"
import PreviewStyle from "./Preview.module.scss"
import { contextFirst } from "../../Context/Context"

interface Props {
    form: any;
    setForm?: React.Dispatch<React.SetStateAction<string>>
}
export const Preview = ({ form }: Props) => {
    const Contextdata = useContext(contextFirst)
    const { color, code, setCode, handleSeleted } = Contextdata
    const [copy, setCopy] = useState<boolean>(false)
    useMemo(() => {
        setCode([`${handleSeleted == "Yes" ? `inset` : " "} ${form.Horizontaloffset}px ${form.Verticaloffset}px ${form.Spread}px ${form.Blur}px ${color}`])
    }, [color, form, handleSeleted])

    const handlecopy: () => void = (): void => {
        setCopy(true)
        navigator.clipboard.writeText(`box-shadow: ${code[0]} \n -webkit-box-shadow: ${code[0]}}`)
    }
    return (
        <div className={PreviewStyle.PreviewContainer}>
            <div className={PreviewStyle.MainContainer}>
                <span>
                    <h2>Preview</h2>
                </span>
                <div className={PreviewStyle.Content}>
                    <div className={PreviewStyle.PreviewContent} style={{ boxShadow: `${code}` }}>

                    </div>
                </div>
                <span>
                    <h2>Code</h2>
                </span>
                <div className={PreviewStyle.Code}>
                    <code>
                        {/* {
                            code.map((arr: any, index: any) => {
                                return (
                                    <>
                                        <div key={index} className={PreviewStyle.codeline}>
                                            {arr.background}
                                        </div>
                                    </>
                                )
<span className={PreviewStyle.box_color}></span>
                            })
                        } */}
                        {
                            `box-shadow:` + code[0]
                        }
                        <br />
                        {
                            `-webkit-box-shadow:` + code[0]
                        }
                    </code>
                    <div className={PreviewStyle.Icon}>
                        {copy ? <FaClipboardCheck /> : <FaClipboard onClick={handlecopy} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
