import React, {createContext, useState} from 'react'
import {contextProps, contextValues} from "../types";

const defaultValues = {
    html: '',
    css: '',
    js: ''
}
const EditorContext = createContext<contextValues> ( defaultValues )

const EditorProvider = ( {children}: contextProps ) => {
    const [html, setHtml] = useState<string> ( '' )
    const [css, setCss] = useState<string> ( '' )
    const [js, setJs] = useState<string> ( '' )
    const values: contextValues = {
        html, css, js, setHtml, setCss, setJs
    }
    return (
        <EditorContext.Provider value={values}>
            {children}
        </EditorContext.Provider>
    )
}

export {EditorProvider, EditorContext}