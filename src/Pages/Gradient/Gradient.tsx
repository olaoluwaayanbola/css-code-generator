import React from 'react'
import GradientStyle from "./Gradient.module.scss"
import { Navigation } from '../../Components/Navigation/Navigation'
export const Gradient = () => {
  return (
    <div className={GradientStyle.Conatianer}>
      <div className={GradientStyle.Navigation}>
        <Navigation />
      </div>
    </div>
  )
}
