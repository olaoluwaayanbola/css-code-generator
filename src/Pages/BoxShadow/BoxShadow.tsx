import React, { useState, useContext } from 'react'
import BoxShadowStyle from "./BoxShadow.module.scss"
import { Preview } from "../../Components/Preview/Preview"
import { Controls } from "../../Components/Controls/BoxShadowControls"
import { Navigation } from "../../Components/Navigation/Navigation"
import { contextFirst } from '../../Context/Context'

export const BoxShadow = () => {
  const boxContext = useContext(contextFirst)
  const { form, setForm } = boxContext
  return (
    <div className={BoxShadowStyle.BoxShadowContainer}>
      <div className={BoxShadowStyle.Navigation}>
        <Navigation />
      </div>
      <div className={BoxShadowStyle.Main}>
        <div className={BoxShadowStyle.flexContainer}>
          <div className={BoxShadowStyle.Controls}>
            <Controls />
          </div>
          <div className={BoxShadowStyle.Display}>
            <Preview form={form} setForm={setForm} />
          </div>
        </div>
      </div>
    </div>
  )
}
