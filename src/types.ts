import {Dispatch, ReactNode, SetStateAction} from "react";

export interface contextProps  {
    children: ReactNode
}
export interface contextValues{
    html :  string
    css: string
    js : string
    setHtml? :  Dispatch<SetStateAction<string>>
    setCss?: Dispatch<SetStateAction<string>>
    setJs? : Dispatch<SetStateAction<string>>
}