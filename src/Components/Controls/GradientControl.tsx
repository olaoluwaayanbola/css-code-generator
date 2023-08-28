import 'antd/dist/antd.css';
import { useContext } from 'react';
import { HuePicker } from 'react-color';
import ControlStyle from './Controls.module.scss';
import { contextFirst } from '../../Context/Context';


export const GradientControls = () => {
  const boxContext = useContext<any>(contextFirst);
  const {
    Handlecolors,
    SetColors,
    Handlecolorstwo,
    SetColorstwo,
    SetColorsthree,
  } = boxContext;
  const handleColorChange = (color: any): void => {
    SetColors({ background: color.hex });
  };
  const handleColorChangetwo = (color: any): void => {
    SetColorstwo({ background: color.hex });
  };
  const handleColorChangethree = (
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    SetColorsthree(event.currentTarget.value);
  };
  const StyleBlocks = [
    { flow: 'to right', type: 'linear-gradient' },
    { flow: 'to bottom', type: 'linear-gradient' },
    { flow: 135 + 'deg', type: 'linear-gradient' },
    { flow: 135 + 'deg', type: 'linear-gradient' },
    { flow: 'ellipse at center', type: 'radial-gradient' },
  ];
  return (
    <div className={ControlStyle.ControlsContainer}>
      <div className={ControlStyle.ControlBox}>
        <div className={ControlStyle.Header}>
          <h2>Options</h2>
        </div>
        <div className={ControlStyle.Select}>
          <h3>Degree Transition</h3>
          <input
            type="range"
            id="points"
            name="Blur"
            min="1"
            max="360"
            onChange={handleColorChangethree}
            className={ControlStyle.input}
          />
          <h3>Color</h3>
          <div className={ControlStyle.colorConatainer}>
            <div className={ControlStyle.Pickerone}>
              <HuePicker
                width={'90%'}
                color={Handlecolors.background}
                onChangeComplete={handleColorChange}
              />
            </div>
            <br />
            <div className={ControlStyle.Pickertwo}>
              <HuePicker
                width={'90%'}
                color={Handlecolorstwo.background}
                onChangeComplete={handleColorChangetwo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
