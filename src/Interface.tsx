import './Interface.css'

import Split from 'react-split'

import Sidebar from './Sidebar'
import Middlebar from './Middlebar'
import Editor from './Editor'

export default function Interface() {
    return (
        <div id="Interface">
            <Sidebar notebooks={[['Personal notes', '📒'], ['School notes', '📙'], ['Web', '💻']]} />
            <Middlebar notes={[['Title', 'First words from the note are visible in the preview'], ['Title', 'Preview']]}/>
            <Editor />
        </div>
    )
}