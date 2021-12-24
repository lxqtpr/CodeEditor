import React, {useState} from 'react';
import s from './CodeBar.module.css'
import HtmlEditor from "../Editors/HtmlEditor";
import CssEditor from '../Editors/CssEditor';
import JsEditor from "../Editors/JsEditor";

const CodeBar: React.FC = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState<string> ( 'html' )
    const Tabs: string[] = ['html', 'css', 'js']
    return (
        <div className={s.codebar}>
            <nav className={s.tab}>
                {Tabs.map ( ( tab ) => <button
                    onClick={() => setActiveTab ( tab )}
                    className={`${s.item} ${activeTab === tab ? s.activeTab : ''}`}>
                    {tab}
                </button> )}
            </nav>
            <div className={s.editor}>
                {activeTab === 'html' ? <HtmlEditor/> : null}
                {activeTab === 'css' ? <CssEditor/> : null}
                {activeTab === 'js' ? <JsEditor/> : null}
            </div>
        </div>
    );
};

export default CodeBar;
