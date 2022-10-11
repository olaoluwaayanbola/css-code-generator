import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useContext } from "react"
import { HexColorPicker } from "react-colorful";
import ControlStyle from "./Controls.module.scss"
import { contextFirst } from "../../Context/Context"


export const Controls = () => {
  const { Option } = Select;
  const boxContext = useContext(contextFirst)
  const [color, setColor] = useState(`#ffff`)
  const { form, setForm } = boxContext
  const [colortruth, setColortruth] = useState(false)

  const handlecolordisplay = (): void => {
    setColortruth(prev => !prev)
  }
  const Handleform = (event: React.FormEvent<HTMLInputElement>): void => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
    console.log(form)
  }
  return (
    <div className={ControlStyle.ControlsContainer}>
      <div className={ControlStyle.ControlBox}>
        <div className={ControlStyle.Header}>
          <h2>Options</h2>
        </div>
        <div className={ControlStyle.Select}>
          <h3>Inset</h3>
          <Select
            className={ControlStyle.Selectitems}
            style={{ background: "red" }}
            defaultValue="No"
          >
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>

          <h3>Color</h3>
          <div className={ControlStyle.colorConatainer}>
            {
              colortruth &&
              <HexColorPicker
                color={color}
                onChange={setColor}
                className={ControlStyle.Hexcolor}
              />
            }
            <div
              className={ControlStyle.colorPicker}
              onClick={handlecolordisplay}
            >
              {color}
            </div>
          </div>

          <h3>Horizontal offset</h3>
          <input
            type="range"
            id="points"
            name="Horizontaloffset"
            min="-100"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Vertical offset</h3>
          <input
            type="range"
            id="points"
            name="Verticaloffset"
            min="-100"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Spread</h3>
          <input
            type="range"
            id="points"
            name="Blur"
            min="1"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Blur</h3>
          <input
            type="range"
            id="points"
            name="Spread"
            min="0"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />
        </div>
      </div>
    </div>
  )
}
