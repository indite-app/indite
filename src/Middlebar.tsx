import { useState } from 'react'

import './Middlebar.css'

import MiddlebarRow from './MiddlebarRow'

interface MiddlebarProps {
    notes: Array<Array<string>>
}

export default function Middlebar(props: MiddlebarProps) {

    const [notes, setNotes] = useState(props.notes)

    function toggleActive(k: number) {
        console.log('toggle ' + k.toString())
        setNotes(notes.map((v, n) => {
            if (n !== k) {
                return [v[0], v[1], 'false']
            } else {
                return [v[0], v[1], 'true']
            }    
        }))
    }

    return (
        <div id="Middlebar">
            <div id="TitleBar">
                <h1 id="Title">Personal notes</h1>
            </div>
            <div id="Notes">
                { notes.map((v, n) => <MiddlebarRow sKey={n} key={n} title={v[0]} preview={v[1]} active={v[2] === 'true' ? true : v[2] === 'false' ? false : false} toggleActive={toggleActive} />) }
            </div>
        </div>
    )
}