import { useState } from 'react'

import './Sidebar.css'

import SidebarRow from './src/SidebarRow'

export interface Notebook {
    name: string,
    icon: string,
    active: boolean,
    children: Array<Notebook>,
    indent: number
}

interface SidebarProps {
    notebooks: Array<Notebook>
}

export default function Sidebar(props: SidebarProps) {
    
    const [notebooks, setNotebooks] = useState(props.notebooks)

    function toggleActive(k: number) {
        setNotebooks(notebooks.map((v, n) => {
            if (n !== k) {
                return {name: v.name, icon: v.icon, active: false, children: v.children, indent: v.indent} as Notebook
            } else {
                return {name: v.name, icon: v.icon, active: true, children: v.children, indent: v.indent} as Notebook
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
                { notebooks.map((v, n) => <SidebarRow sKey={n} key={n} name={v.name} icon={v.icon[0]+v.icon[1]} active={v.active} toggleActive={toggleActive} childrenNotebooks={v.children} indent={v.indent} />)}
            </div>
            {/* <div id="SidebarFooter"></div> */}
        </div>
    )
}