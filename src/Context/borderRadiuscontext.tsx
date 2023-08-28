import { useContext,createContext, ReactNode} from "react";
import { BorderRadius } from "../Components/Controls/BorderRadius";

const borderRadius = createContext<any>({})

const borderRadiusProider = (children:ReactNode) => {
    return(
        <borderRadius.Provider value={}>
           { children}
        </borderRadius.Provider>
    )
}