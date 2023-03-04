import React, { useContext } from 'react';
import { contextFirst } from '../../Context/Context';
import { Preview } from '../../Components/Preview/Preview';
import BoxShadowStyle from '../Main stylesheet/Main.module.scss';
import { Controls } from '../../Components/Controls/BoxShadowControls';
import { Navigation } from '../../Components/Navigation/Navigation';

export const BoxShadow = () => {
  const boxContext = useContext(contextFirst);
  const { form, setForm } = boxContext;
  return (
    <div className={BoxShadowStyle.Container}>
      <div className={BoxShadowStyle.Navigation}>
        <Navigation />
      </div>
      <div className={BoxShadowStyle.Main}>
        <div className={BoxShadowStyle.flexContainer}>
          <div className={BoxShadowStyle.Controls}>
            <Controls />
          </div>
          <div className={BoxShadowStyle.Display}>
            <Preview form={form} setForm={setForm} type="box-shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};
