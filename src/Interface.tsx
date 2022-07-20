import './Interface.css'

import Sidebar from './Sidebar'
import Middlebar from './Middlebar'
import Editor from './Editor'

export default function Interface() {
    return (
        <div id="Interface">
            <Sidebar notebooks={[{ name: 'Personal notes', icon: '📒', active: true, children: []}, { name: 'School notes', icon: '📙', active: false, children: [] }, { name: 'Web', icon: '💻', active: false, children: [] }, { name: 'Personal notes', icon: '📕', active: false, children: [] }, { name: 'Personal notes', icon: '🗒', active: false, children: [] }, { name: 'Personal notes', icon: '📘', active: false, children: [] }]} />
            <Middlebar notes={[{title: 'Markdown example', preview: 'A line of text in a paragraph, and some additional text you aren\'t gonna see ever in your life', date: '2 hours', active: true}, { title: 'Title', preview: 'Preview', date: '3 days', active: false}]}/>
            <Editor />
        </div>
    )
}