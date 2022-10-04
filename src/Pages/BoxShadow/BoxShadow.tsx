import React from 'react'
import BoxShadowStyle from "./BoxShadow.module.scss"
import { Preview } from "../../Components/Preview/Preview"
import { Navigation } from "../../Components/Navigation/Navigation"
export const BoxShadow = () => {
  return (
    <div>
      <div className={BoxShadowStyle.Navigation}>
        <Navigation />
      </div>
      <div className={BoxShadowStyle.Main}>
        <div className={BoxShadowStyle.Controls}>

        </div>
        <div className={BoxShadowStyle.Display}>
          <div className={BoxShadowStyle.styleDisplay}>
            <Preview />
          </div>
        </div>
      </div>
    </div>
  )
}
