import 'antd/dist/antd.css';
import { useContext } from 'react';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import ControlStyle from './Controls.module.scss';
import { contextFirst } from '../../Context/Context';

export const BorderRadius = () => {
  const boxContext = useContext<any>(contextFirst);
  const [colortruth, setColortruth] = useState<boolean>(false);
  const { color, setColor, form, setForm, handleSeleted, setSelected }: any = boxContext;

  const handleColorChange = (color: any): void => {
    setColor(color.hex);
  };
  const handlecolordisplay = (): void => {
    setColortruth((prev) => !prev);
  };
  const Handleform = (event: React.FormEvent<HTMLInputElement>): void => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelected(event.currentTarget.value);
  };
  return (
    <main className={ControlStyle.ControlsContainer}>
      <section className={ControlStyle.ControlBox}>
        <div className={ControlStyle.Header}>
          <h2>Options</h2>
        </div>
        <div className={ControlStyle.Select}>
          <h3>Inset</h3>
          <select
            className={ControlStyle.Selectitems}
            value={handleSeleted}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <h3>Color</h3>
          <div className={ControlStyle.colorConatainer}>
            {colortruth && (
              <ChromePicker
                className={ControlStyle.Hexcolor}
                color={color}
                onChangeComplete={handleColorChange}
              />
            )}
            <div
              className={ControlStyle.colorPicker}
              onClick={handlecolordisplay}
              style={{ background: `${color}` }}
            >
              {color}
            </div>
          </div>

          <h3>Horizontal offset</h3>
          <input
            type="range"
            id="points"
            name="Horizontaloffset"
            min="-100"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Vertical offset</h3>
          <input
            type="range"
            id="points"
            name="Verticaloffset"
            min="-100"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Spread</h3>
          <input
            type="range"
            id="points"
            name="Blur"
            min="1"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />

          <h3>Blur</h3>
          <input
            type="range"
            id="points"
            name="Spread"
            min="0"
            max="100"
            onChange={Handleform}
            className={ControlStyle.input}
          />
        </div>
      </section>
    </main>
  );
};
