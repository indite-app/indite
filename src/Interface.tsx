import './Interface.css'

import Sidebar from './Sidebar'
import Middlebar from './Middlebar'
import Editor from './Editor'

export default function Interface() {
    return (
        <div id="Interface">
            <Sidebar notebooks={[['Personal notes', '📒', 'true'], ['School notes', '📙', 'false'], ['Web', '💻', 'false'], ['Personal notes', '📕', 'false'], ['Personal notes', '🗒', 'false'], ['Personal notes', '📘', 'false'], ['Personal notes', '📒', 'false'], ['School notes', '📙', 'false'], ['Web', '💻', 'false'], ['Personal notes', '📕', 'false'], ['Personal notes', '🗒', 'false'], ['Personal notes', '📘', 'false'], ['Personal notes', '📒', 'false'], ['School notes', '📙', 'false'], ['Web', '💻', 'false'], ['Personal notes', '📕', 'false'], ['Personal notes', '🗒', 'false'], ['Personal notes', '📘', 'false'], ['Personal notes', '📒', 'false'], ['School notes', '📙', 'false'], ['Web', '💻', 'false'], ['Personal notes', '📕', 'false'], ['Personal notes', '🗒', 'false'], ['Personal notes', '📘', 'false']]} />
            <Middlebar notes={[['Markdown example', 'A line of text in a paragraph', 'true'], ['Title', 'Preview', 'false'], ['Title', 'Preview', 'false'], ['Markdown example', 'A line of text in a paragraph', 'false'], ['Title', 'Preview', 'false'], ['Title', 'Preview', 'false'], ['Title', 'Preview', 'false'], ['Title', 'Preview', 'false'], ['Title', 'Preview', 'false'], ['Title', 'Preview', 'false']]}/>
            <Editor />
        </div>
    )
}