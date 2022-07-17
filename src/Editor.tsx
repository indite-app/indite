import './Editor.css'

import EditorHeader from './EditorHeader'
import Ed from './slate/SlateEditor'

export default function Editor() {
    return (
        <div id="Editor">
            <EditorHeader />
            <Ed />
        </div>
    )
}