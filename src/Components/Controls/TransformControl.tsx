import React from 'react'
import 'antd/dist/antd.css';
import { useContext } from "react"
import ControlStyle from "./Controls.module.scss"
import { contextFirst } from "../../Context/Context"


export const TransformControls = () => {
  const boxContext = useContext<any>(contextFirst)
  const { TransForm,setTransForm }: any = boxContext

  const Handleform = (event: React.FormEvent<HTMLInputElement>): void => {
    setTransForm ({ ...TransForm, [event.currentTarget.name]: event.currentTarget.value })
    console.log(TransForm)
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
            name="Scale"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Rotate</h3>
          <input
            type="range"
            id="points"
            name="Rotate"
            min="-100"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Translate X</h3>
          <input
            type="range"
            id="points"
            name="TranslateX"
            min="0"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Translate Y</h3>
          <input
            type="range"
            id="points"
            name="TranslateY"
            min="-100"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Skew X</h3>
          <input
            type="range"
            id="points"
            name="SkewX"
            min="0"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Skew Y</h3>
          <input
            type="range"
            id="points"
            name="SkewY"
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

