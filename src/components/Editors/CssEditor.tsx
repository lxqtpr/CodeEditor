import React, {useContext} from 'react';
import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";
import {EditorContext} from "../../context/context";

const CssEditor: React.FC = (): JSX.Element => {

    const {css, setCss} = useContext(EditorContext)

    return (
        <AceEditor
            placeholder='Write your CSS code here!'
            mode='css'
            theme='monokai'
            name='editor_css'
            value = {css}
            onChange={value => setCss ? setCss ( value ) : ''}
            fontSize= {17}
            height={'100%'}
            width={'100%'}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 2
            }}
        />
    );
};

export default CssEditor;
