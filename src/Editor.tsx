import './Editor.css'

import EditorHeader from './EditorHeader'
import LexicalEditor from './LexicalEditor'

import SEditor from './slate/SlateEditor'
import LEditor from './lexical/Editor'

export default function Editor() {
    return (
        <div id="Editor">
            <EditorHeader />
            {/* <SEditor /> */}
            {/* <LEditor /> */}
            <div><LexicalEditor /></div>
        </div>
    )
}