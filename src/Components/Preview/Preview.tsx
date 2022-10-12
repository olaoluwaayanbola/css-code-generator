import React, { useState, useContext, useMemo } from 'react'
import { FaClipboard } from "react-icons/fa"
import { FaClipboardCheck } from "react-icons/fa"
import PreviewStyle from "./Preview.module.scss"
import { contextFirst } from "../../Context/Context"

interface Props {
    form: any;
    type?: any;
    setForm?: React.Dispatch<React.SetStateAction<string>>
}
export const Preview = ({ form, type }: Props) => {
    const Contextdata = useContext(contextFirst)
    const { color, code, setCode, handleSeleted } = Contextdata
    const [copy, setCopy] = useState<boolean>(false)

    useMemo(() => {
        setCode([`${handleSeleted == "Yes" ? `inset` : " "} ${form.Horizontaloffset}px ${form.Verticaloffset}px ${form.Spread}px ${form.Blur}px ${color}`])
    }, [color, form, handleSeleted])
    const handlecopy: () => void = (): void => {
        setCopy(true)
        switch (type) {
            case "box-shadow":
                navigator.clipboard.writeText(`box-shadow: ${code[0]} \n -webkit-box-shadow: ${code[0]}}`)
                break;
            case "background-color":
                navigator.clipboard.writeText(`background-color: ${color}`)
                break;
            case "Transform":
                navigator.clipboard.writeText(`Transform: ${color}`)
                break;
            case "Gradient":
                navigator.clipboard.writeText(`Gradient: ${color}`)
                break;
            default:
                console.log(null)
        }
    }
    return (
        <div className={PreviewStyle.PreviewContainer}>
            <div className={PreviewStyle.MainContainer}>
                <span>
                    <h2>Preview</h2>
                </span>
                <div className={PreviewStyle.Content}>
                    {
                        type ?
                            <div className={PreviewStyle.PreviewContent} style={{ boxShadow: `${code}` }}></div>
                            :
                            <div className={PreviewStyle.PreviewContent} style={{ backgroundColor: `${color}` }}></div>
                    }
                </div>
                <span>
                    <h2>Code</h2>
                </span>
                <div className={PreviewStyle.Code}>
                    {
                        type ?
                            <code>
                                {`box-shadow:` + code[0]}<br />{`-webkit-box-shadow:` + code[0]}
                            </code>
                            :
                            <code>{`background-color: ${color}`}</code>
                    }
                    <div className={PreviewStyle.Icon}>
                        {copy ? <FaClipboardCheck /> : <FaClipboard onClick={handlecopy} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
