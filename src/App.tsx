import React from 'react';
import {EditorProvider} from "./context/context";
import CodeBar from "./components/CodeBar/CodeBar";
import s from './App.module.css'
import Preview from "./components/Preview/Preview";

const App:React.FC = ():JSX.Element => {
    return (
        <EditorProvider>
            <CodeBar/>
            <div className={s.main}>
                <Preview/>
            </div>
        </EditorProvider>
    );
};

export default App;
