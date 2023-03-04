import { useState } from 'react';
import { useContext } from 'react';
import Toggler from '../Toggle/Toggle';
import { Link } from 'react-router-dom';
import { FaRegSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { contextFirst } from '../../Context/Context';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import NavigationStyle from './Navigation.module.scss';

export const Navigation = () => {
  const darkMode = useContext(contextFirst);
  const { dark } = darkMode;
  const [burger, setBurger] = useState<boolean>(false);
  const HandleState = (): void => {
    setBurger((prev) => !prev);
  };
  return (
    <div
      className={NavigationStyle.NavContainer}
      style={{ background: `${dark ? '#251b25' : '#d1d1d1'}` }}
    >
      <div className={NavigationStyle.elementsDiv}>
        <div className={NavigationStyle.HamburgerTitle}>
          <div className={NavigationStyle.HamburgerBlock}>
            <ul style={{ display: `${burger ? 'block' : 'none'}` }}>
              <li>
                <Link to="/BoxShadow">BoxShadow</Link>
              </li>
              <li>
                <Link to="/Gradient">Gradient</Link>
              </li>
              <li>
                <Link to="/RGBA">RGBA</Link>
              </li>
              <li>
                <Link to="/Transform">Transform</Link>
              </li>
            </ul>
          </div>
          <span
            onClick={HandleState}
            style={{ color: `${dark ? 'whitesmoke' : 'black'}` }}
          >
            <GiHamburgerMenu className={NavigationStyle.icon} />
          </span>
          <span>
            <Link to="/">
              <h3 style={{ color: `${dark ? 'whitesmoke' : 'black'}` }}>
                CSS WEB GEN
              </h3>
            </Link>
          </span>
        </div>
        <div
          className={NavigationStyle.DarkMode}
          style={{ color: `${dark ? 'whitesmoke' : 'black'}` }}
        >
          <FaRegSun />
          <Toggler />
          <BsFillMoonStarsFill />
        </div>
      </div>
    </div>
  );
};
