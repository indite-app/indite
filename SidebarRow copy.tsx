import { useState } from 'react'

import { Notebook } from './src/Sidebar'

interface SidebarRowProps {
    icon: string,
    name: string,
    active: boolean,
    sKey: number,
    toggleActive: Function,
    childrenNotebooks: Array<Notebook>,
    indent: number
}

export default function SidebarRow(props: SidebarRowProps) {

    const [notebooks, setNotebooks] = useState(props.childrenNotebooks)

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
        <div>
            <div className={props.active ? "SidebarRow active" : "SidebarRow"} onClick={() => { props.toggleActive(props.sKey) }}>
                { props.indent }
                { [...Array(props.indent)].map((v, n) => <div className="SidebarRowSpacer" />) }
                <div className="SidebarRowIcon">{ props.icon }</div>
                { props.name }
            </div>
            <div className="SidebarRowChildren">
                { notebooks.map((v, n) => <SidebarRow sKey={n} key={n} name={v.name} icon={v.icon[0] + v.icon[1]} active={v.active} toggleActive={toggleActive} childrenNotebooks={v.children} indent={v.indent + 1} />)}
            </div>
        </div>
    )
}