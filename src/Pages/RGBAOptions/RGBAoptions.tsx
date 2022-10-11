import React, { useContext } from 'react'
import GradientStyle from "../Main stylesheet/Main.module.scss"
import { contextFirst } from '../../Context/Context'
import { Preview } from '../../Components/Preview/Preview'
import { Navigation } from '../../Components/Navigation/Navigation'
import { Controls } from "../../Components/Controls/BoxShadowControls"
export const RGBAoptions = () => {
  const boxContext = useContext(contextFirst)
  const { form, setForm } = boxContext
  return (
    <div className={GradientStyle.Container}>
      <div className={GradientStyle.Navigation}>
        <Navigation />
      </div>
      <div className={GradientStyle.Main}>
        <div className={GradientStyle.flexContainer}>
          <div className={GradientStyle.Controls}>
            <Controls />
          </div>
          <div className={GradientStyle.Display}>
            <Preview form={form} />
          </div>
        </div>
      </div>
    </div>
  )
}
