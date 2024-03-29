import { useState } from 'react'

import './Sidebar.css'

import SidebarRow from './SidebarRow'

export interface Notebook {
    name: string,
    icon: string,
    indent: number,
    children: Array<Notebook>,
    active: boolean
}

interface SidebarProps {
    notebooks: Array<Notebook>
}

export default function Sidebar(props: SidebarProps) {

    const [notebooks, setNotebooks] = useState(props.notebooks)

    function toggleActive(k: number) {
        setNotebooks(notebooks.map((v, n) => {
            if (n !== k) {
                return {name: v.name, icon: v.icon, indent: v.indent, children: v.children, active: false}
            } else {
                return {name: v.name, icon: v.icon, indent: v.indent, children: v.children, active: true}
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
                { notebooks.map((v, n) => <SidebarRow k={n} key={n} name={v.name} icon={v.icon} indent={v.indent} children={v.children} active={v.active} toggleActive={toggleActive} />)}
            </div>
            {/* <div id="SidebarFooter"></div> */}
        </div>
    )
}