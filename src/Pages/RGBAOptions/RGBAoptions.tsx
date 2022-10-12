import React, { useContext } from 'react'
import GradientStyle from "../Main stylesheet/Main.module.scss"
import { contextFirst } from '../../Context/Context'
import { Preview } from '../../Components/Preview/Preview'
import { Navigation } from '../../Components/Navigation/Navigation'
import { RGBAControls } from '../../Components/Controls/RGBAControls'
export const RGBAoptions = () => {
  let type = 'background'
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
            <RGBAControls />
          </div>
          <div className={GradientStyle.Display}>
            <Preview form={form} type="background-color"/>
          </div>
        </div>
      </div>
    </div>
  )
}
