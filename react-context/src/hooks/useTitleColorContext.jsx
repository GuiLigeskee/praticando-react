import {useContext, createContext} from "react";
import {TitleColorContext} from "../context/TitleColorContext";

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext);

    if(!context) {
        console.log("context não encontrado!!!");
    }

  return context;
}