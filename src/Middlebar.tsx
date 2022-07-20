import { useState } from 'react'

import './Middlebar.css'

import MiddlebarRow from './MiddlebarRow'

interface Note {
    title: string,
    preview: string,
    date: string,
    active: boolean
}

interface MiddlebarProps {
    notes: Array<Note>
}

export default function Middlebar(props: MiddlebarProps) {

    const [notes, setNotes] = useState(props.notes)

    function toggleActive(k: number) {
        console.log('toggle ' + k.toString())
        setNotes(notes.map((v, n) => {
            if (n !== k) {
                return {title: v.title, preview: v.preview, date: v.date, active: false} as Note
            } else {
                return {title: v.title, preview: v.preview, date: v.date, active: true} as Note
            }    
        }))
    }

    return (
        <div id="Middlebar">
            <div id="TitleBar">
                <div className="TitlebarSider"></div>
                <div><h1 id="Title">Personal notes</h1></div>
                <div className="TitlebarSider"><div></div></div>
            </div>
            <div id="Notes">
                { notes.map((v, n) => <MiddlebarRow sKey={n} key={n} title={v.title} preview={v.preview} date={v.date} active={v.active} toggleActive={toggleActive} />) }
            </div>
        </div>
    )
}