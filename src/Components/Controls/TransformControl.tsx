import 'antd/dist/antd.css';
import { useContext } from "react"
import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import ControlStyle from "./Controls.module.scss"
import { contextFirst } from "../../Context/Context"


export const TransformControls = () => {
  const boxContext = useContext<any>(contextFirst)
  const {  form, setForm }: any = boxContext

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
          <h3>Scale</h3>
          <input
            type="number"
            id="points"
            name="Blur"
            onChange={Handleform}
            className={ControlStyle.input}
          />
          <h3>Rotate</h3>
          <input
            type="range"
            id="points"
            name="Verticaloffset"
            min="-100"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />
          <h3>Translate X</h3>
          <input
            type="range"
            id="points"
            name="Spread"
            min="0"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />
          <h3>Translate Y</h3>
          <input
            type="range"
            id="points"
            name="Horizontaloffset"
            min="-100"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />
          <h3>Skew X</h3>
          <input
            type="range"
            id="points"
            name="Spread"
            min="0"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />
          <h3>Skew Y</h3>
          <input
            type="range"
            id="points"
            name="Horizontaloffset"
            min="-100"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

        </div>
      </div>
    </div>
  )
}
