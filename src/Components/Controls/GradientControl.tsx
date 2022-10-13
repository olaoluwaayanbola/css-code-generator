import 'antd/dist/antd.css';
import { useContext } from "react"
import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import ControlStyle from "./Controls.module.scss"
import { contextFirst } from "../../Context/Context"


export const GradientControls = () => {
    const boxContext = useContext<any>(contextFirst)
    const [colortruth, setColortruth] = useState<boolean>(false)
    const { color, setColor, form, setForm, handleSeleted, setSelected }: any = boxContext
    const handleColorChange = (color: any): void => {
        setColor(color.hex)
    }
    const handlecolordisplay = (): void => {
        setColortruth(prev => !prev)
    }
    const StyleBlocks = [
        { flow: "to right", type: "linear-gradient" },
        { flow: "to bottom", type: "linear-gradient" },
        { flow: 135 + "deg", type: "linear-gradient" },
        { flow: 135 + "deg", type: "linear-gradient" },
        { flow: "ellipse at center", type: "radial-gradient" }
    ]
    return (
        <div className={ControlStyle.ControlsContainer}>
            <div className={ControlStyle.ControlBox}>
                <div className={ControlStyle.Header}>
                    <h2>Options</h2>
                </div>
                <div className={ControlStyle.Select}>
                    <h3>Middle Transition</h3>
                    <input
                        type="range"
                        id="points"
                        name="Blur"
                        min="1"
                        max="100"
                        className={ControlStyle.input}
                    />
                    <h3>Color</h3>
                    <div className={ControlStyle.colorConatainer} >
                        {
                            colortruth &&
                            <ChromePicker
                                className={ControlStyle.Hexcolor}
                                color={color}
                                onChangeComplete={handleColorChange}
                            />
                        }
                        <div
                            className={ControlStyle.colorPicker}
                            onClick={handlecolordisplay}
                            style={{ background: `${color}` }}
                        >
                            {color}
                        </div>
                    </div>
                    <div className={ControlStyle.MapContainer}>
                        {
                            StyleBlocks.map((items, index) => {
                                return (
                                    <div
                                        className={ControlStyle.StyleBlocks}
                                        key={index}
                                        onClick={() => { }}
                                        style={{
                                            background: `${items.type}(${items.flow}, #CE5937 0%, #3CA497 56%, #C59237 100%)`
                                        }}>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
