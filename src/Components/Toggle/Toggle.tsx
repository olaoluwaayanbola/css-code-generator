import 'antd/dist/antd.css';
import { Switch } from 'antd';
import { useContext } from 'react';
import { contextFirst } from '../../Context/Context';

export const Toggler = () => {
  const first: any = useContext(contextFirst);
  const { trigger } = first;
  return (
    <>
      <Switch onClick={trigger} style={{ background: '#526edd' }} />
    </>
  );
};

export default Toggler;
