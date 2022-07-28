import './Interface.css'

import Sidebar from './Sidebar'
import Middlebar from './Middlebar'
import Editor from './Editor'

export default function Interface() {
    return (
        <div id="Interface">
            <Sidebar notebooks={[{ name: 'Personal notes', icon: '📒', active: false, children: [], indent: 0 }, { name: 'School notes', icon: '📙', active: false, children: [{ name: 'Personal notes', icon: '📒', active: false, children: [], indent: 0 }, { name: 'School notes', icon: '📙', active: false, children: [{ name: 'Personal notes', icon: '📒', active: false, children: [], indent: 0 }, { name: 'School notes', icon: '📙', active: false, children: [{ name: 'School notes', icon: '📙', active: false, children: [{ name: 'Personal notes', icon: '📒', active: false, children: [], indent: 0 }, { name: 'School notes', icon: '📙', active: false, children: [{ name: 'Personal notes', icon: '📒', active: false, children: [], indent: 0 }, { name: 'School notes', icon: '📙', active: false, children: [], indent: 0 }], indent: 0  }], indent: 0 }], indent: 0 }], indent: 0  }], indent: 0 }, { name: 'Web', icon: '💻', active: false, children: [], indent: 0  }, { name: 'Personal notes', icon: '📕', active: false, children: [], indent: 0  }, { name: 'Personal notes', icon: '🗒', active: true, children: [], indent: 0  }, { name: 'Personal notes', icon: '📘', active: false, children: [], indent: 0  }]} />
            <Middlebar notes={[{title: 'Markdown example', preview: 'Slate is flexible enough to add **decorations** that can format text', date: '2 hours', active: true}, {title: 'Title', preview: 'Preview', date: '3 days', active: false}, {title: 'Title', preview: 'Preview', date: '3 days', active: false}, {title: 'Title', preview: 'Preview', date: '3 days', active: false}]}/>
            <Editor />
        </div>
    )
}