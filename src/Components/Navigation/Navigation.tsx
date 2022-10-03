import Toggler from "../Toggle/Toggle"
import { FaRegSun } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsFillMoonStarsFill } from "react-icons/bs"
import NavigationStyle from "./Navigation.module.scss"
export const Navigation = () => {
    return (
        <div className={NavigationStyle.NavContainer}>
            <div className={NavigationStyle.elementsDiv}>
                <div className={NavigationStyle.HamburgerTitle}>
                    <span>
                        <GiHamburgerMenu className={NavigationStyle.icon} />
                    </span>
                    <span>
                        <h3>CSS WEB GEN</h3>
                    </span>
                </div>
                <div className={NavigationStyle.DarkMode}>
                    <FaRegSun />
                    <Toggler />
                    <BsFillMoonStarsFill />
                </div>
            </div>
        </div>
    )
}
