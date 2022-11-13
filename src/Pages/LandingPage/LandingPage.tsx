import Landing from "./LandingPage.module.scss"
import { Link } from "react-router-dom"
import React, { useContext } from 'react'
import { contextFirst } from '../../Context/Context'
import { Navigation } from '../../Components/Navigation/Navigation'

export const LandingPage = () => {
  const darkMode = useContext(contextFirst)
  const { dark } = darkMode
  return (
    <div className={Landing.LandingContianer} style={{ background: `${dark ? "#251b25" : "#d1d1d1"}` }}>
      <div className={Landing.Navigation}>
        <Navigation />
      </div>
      <div className={Landing.ContentGrid}>
        <Link to="/BoxShadow">
          <div className={Landing.Box}>
            <h2>Box Shadow</h2>
          </div>
        </Link>
        <Link to="/Gradient">
          <div className={Landing.Box}>
            <h2>Gradient</h2>
          </div>
        </Link>
        <Link to="/RGBA">
          <div className={Landing.Box}>
            <h2>RGBA</h2>
          </div>
        </Link>
        <Link to="/Transform">
          <div className={Landing.Box}>
            <h2>Transform</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}
