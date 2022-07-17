import './Middlebar.css'

import MiddlebarRow from './MiddlebarRow'

interface MiddlebarProps {
    notes: Array<Array<string>>
}

export default function Middlebar(props: MiddlebarProps) {
    return (
        <div id="Middlebar">
            <div id="TitleBar">
                <h1 id="Title">Personal notes</h1>
            </div>
            { props.notes.map((v, n) => <MiddlebarRow key={n} title={v[0]} preview={v[1]} />) }
        </div>
    )
}