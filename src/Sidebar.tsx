import { useState } from 'react'
import './Sidebar.css'

import SidebarRow from './SidebarRow'

interface SidebarProps {
    notebooks: Array<Array<string>>
}

export default function Sidebar(props: SidebarProps) {
    
    const [notebooks, setNotebooks] = useState(props.notebooks)

    function toggleActive(k: number) {
        console.log('toggle ' + k.toString())
        setNotebooks(notebooks.map((v, n) => {
            if (n !== k) {
                return [v[0], v[1], 'false']
            } else {
                return [v[0], v[1], 'true']
            }    
        }))
    }

    return (
        <div id="Sidebar">
            <div id="SidebarHeader">
                <div id="Icon"></div>
                <div id="Info">
                    <div id="Name">Enrike Churin</div>
                    <div id="Sync">Synced at 16:04:45</div>
                </div>
            </div>
            <div id="Notebooks">
                { notebooks.map((v, n) => <SidebarRow sKey={n} key={n} name={v[0]} icon={v[1]} active={v[2] === 'true' ? true : v[2] === 'false' ? false : false} toggleActive={toggleActive} />)}
            </div>
            {/* <div id="SidebarFooter"></div> */}
        </div>
    )
}