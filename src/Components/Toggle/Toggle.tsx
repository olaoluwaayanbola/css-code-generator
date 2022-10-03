import 'antd/dist/antd.css';
import { Switch } from 'antd';
import { useContext } from "react"
import { contextFirst } from '../../Context/Context'

export const Toggler = () => {
  const first: any = useContext(contextFirst)
  const { dark, trigger } = first
  console.log(dark)
  return (
    <>
      <Switch onClick={trigger} style={{background:"#122675"}}/>
    </>
  )
}


export default Toggler;