import React, {useContext, useMemo} from 'react';
import s from './Preview.module.css'
import {EditorContext} from "../../context/context";

const Preview: React.FC = (): JSX.Element => {
    const {html, css, js} = useContext ( EditorContext )
    const document = useMemo ( () => {
        if (!html && !css && !js) return
        return `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <style>${css}</style>
        </head>
            <body>
            ${html}
            <script>${js}</script>
            </body>
        </html>
        `
    }, [html, css, js] )
    return (
        <div className={s.content}>
            {document ? <iframe title='preview' className={s.preview} srcDoc={document}/> :
                <div className={s.loading}>Your code will be displayed here</div>}
        </div>
    );
};

export default Preview;
