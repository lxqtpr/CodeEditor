import React, {useContext} from 'react';
import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import {EditorContext} from "../../context/context";

const JsEditor: React.FC = (): JSX.Element => {
    const {js, setJs} = useContext(EditorContext)
    return (
        <AceEditor
            placeholder='Write your JS code here!'
            mode='javascript'
            theme='monokai'
            value={js}
            onChange={value => setJs ? setJs ( value ) : ''}
            name='editor_js'
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

export default JsEditor;
