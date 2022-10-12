import 'antd/dist/antd.css';
import { useContext } from "react"
import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import ControlStyle from "./Controls.module.scss"
import { contextFirst } from "../../Context/Context"


export const RGBAControls = () => {
  const boxContext = useContext<any>(contextFirst)
  const [colortruth, setColortruth] = useState<boolean>(false)
  const { color, setColor }: any = boxContext

  const handleColorChange = (color: any): void => {
    setColor(color.hex)
  }
  const handlecolordisplay = (): void => {
    setColortruth(prev => !prev)
  }
  return (
    <div className={ControlStyle.ControlsContainer}>
      <div className={ControlStyle.ControlBox}>
        <div className={ControlStyle.Header}>
          <h2>Options</h2>
        </div>
        <div className={ControlStyle.Select}>
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
        </div>
      </div>
    </div>
  )
}
