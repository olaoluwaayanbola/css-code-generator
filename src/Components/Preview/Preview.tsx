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
    const CssType: any = () => {
        let design
        switch (type) {
            case "box-shadow":
                design = <div className={PreviewStyle.PreviewContent} style={{ boxShadow: `${code}` }}></div>
                break;
            case "background-color":
                design = <div className={PreviewStyle.PreviewContent} style={{ backgroundColor: `${color}` }}></div>
                break;
            case "Transform":
                // design = <div className={PreviewStyle.PreviewContent} style={{ transform:` scale(1.3) rotate(120deg) translate(-38px, -14px) skew(-63deg, 39deg)`}}></div>
                break;
            case "Gradient":
                design = navigator.clipboard.writeText(`Gradient: ${color}`)
                break;
            default:
                console.log(null)
        }
        return design
    }
    const Code = () => {
        let codeblock
        switch (type) {
            case "box-shadow":
                codeblock = <code>{`box-shadow:` + code[0]}<br />{`-webkit-box-shadow:` + code[0]}</code>
                break;
            case "background-color":
                codeblock = <code>{`background-color: ${color}`}</code>
                break;
            case "Transform":
                codeblock = <code>{`Transform: ${code[0]}`}<br />{`-webkit-box-shadow:` + code[0]}</code>
                break;
            case "Gradient":
                codeblock = <code>{`box-shadow:` + code[0]}<br />{`-webkit-box-shadow:` + code[0]}</code>
                break;
            default:
                console.log(null)
        }
        return codeblock
    }
    return (
        <div className={PreviewStyle.PreviewContainer}>
            <div className={PreviewStyle.MainContainer}>
                <span>
                    <h2>Preview</h2>
                </span>
                <div className={PreviewStyle.Content}>
                    {CssType()}
                </div>
                <span>
                    <h2>Code</h2>
                </span>
                <div className={PreviewStyle.Code}>
                    {Code()}
                    <div className={PreviewStyle.Icon}>
                        {copy ? <FaClipboardCheck /> : <FaClipboard onClick={handlecopy} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
