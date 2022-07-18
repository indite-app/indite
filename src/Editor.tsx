import './Editor.css'

import EditorHeader from './EditorHeader'
import SEditor from './slate/SlateEditor'

export default function Editor() {
    return (
        <div id="Editor">
            <EditorHeader />
            <SEditor />
        </div>
    )
}