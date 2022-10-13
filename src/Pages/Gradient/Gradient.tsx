import React, { useContext } from 'react'
import GradientStyle from "../Main stylesheet/Main.module.scss"
import { contextFirst } from '../../Context/Context'
import { Preview } from '../../Components/Preview/Preview'
import { Navigation } from '../../Components/Navigation/Navigation'
import { GradientControls } from "../../Components/Controls/GradientControl"
export const Gradient = () => {
  const boxContext = useContext(contextFirst)
  const { form } = boxContext
  return (
    <div className={GradientStyle.Container}>
      <div className={GradientStyle.Navigation}>
        <Navigation />
      </div>
      <div className={GradientStyle.Main}>
        <div className={GradientStyle.flexContainer}>
          <div className={GradientStyle.Controls}>
            <GradientControls />
          </div>
          <div className={GradientStyle.Display}>
            <Preview form={form} type="Gradient" />
          </div>
        </div>
      </div>
    </div>
  )
}
