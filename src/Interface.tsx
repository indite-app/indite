import './Interface.css'

import Sidebar from './Sidebar'
import Middlebar from './Middlebar'
import Editor from './Editor'

export default function Interface() {
    return (
        <div id="Interface">
            <Sidebar notebooks={[['Personal notes', '📒', 'true'], ['School notes', '📙', 'false'], ['Web', '💻', 'false'], ['Personal notes', '📕', 'false'], ['Personal notes', '🗒', 'false'], ['Personal notes', '📘', 'false'], ['Personal notes', '📒', 'false'], ['School notes', '📙', 'false'], ['Web', '💻', 'false'], ['Personal notes', '📕', 'false'], ['Personal notes', '🗒', 'false'], ['Personal notes', '📘', 'false'], ['Personal notes', '📒', 'false'], ['School notes', '📙', 'false'], ['Web', '💻', 'false'], ['Personal notes', '📕', 'false'], ['Personal notes', '🗒', 'false'], ['Personal notes', '📘', 'false'], ['Personal notes', '📒', 'false'], ['School notes', '📙', 'false'], ['Web', '💻', 'false'], ['Personal notes', '📕', 'false'], ['Personal notes', '🗒', 'false'], ['Personal notes', '📘', 'false']]} />
            <Middlebar notes={[{title: 'Markdown example', preview: 'A line of text in a paragraph, and some additional text you aren\'t gonna see ever in your life', date: '3 days', active: true}, { title: 'Title', preview: 'Preview', date: '5 days', active: false}]}/>
            <Editor />
        </div>
    )
}