import { useState } from 'react'

import './Sidebar.css'

import SidebarRow from './SidebarRow'

interface Notebook {
    name: string,
    icon: string,
    active: boolean,
    children: Array<Notebook>
}

interface SidebarProps {
    notebooks: Array<Notebook>
}

export default function Sidebar(props: SidebarProps) {
    
    const [notebooks, setNotebooks] = useState(props.notebooks)

    function toggleActive(k: number) {
        console.log('toggle ' + k.toString())
        setNotebooks(notebooks.map((v, n) => {
            if (n !== k) {
                return {name: v.name, icon: v.icon, active: false, children: v.children} as Notebook
            } else {
                return {name: v.name, icon: v.icon, active: true, children: v.children} as Notebook
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
                { notebooks.map((v, n) => <SidebarRow sKey={n} key={n} name={v.name} icon={v.icon} active={v.active} toggleActive={toggleActive} />)}
            </div>
            {/* <div id="SidebarFooter"></div> */}
        </div>
    )
}