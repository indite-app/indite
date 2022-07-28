import { useState } from 'react'

import { Notebook } from './Sidebar'

interface SidebarRowProps {
    k: number,
    name: string,
    icon: string,
    indent: number,
    children: Array<Notebook>,
    active: boolean,
    toggleActive: Function
}

export default function SidebarRow(props: SidebarRowProps) {

    const [childrenCollapsed, setChildrenCollapsed] = useState(false)

    const [children, setChildren] = useState(props.children)

    function toggleActive(k: number) {
        setChildren(children.map((v, n) => {
            if (n !== k) {
                return {name: v.name, icon: v.icon, indent: v.indent, children: v.children, active: false}
            } else {
                return {name: v.name, icon: v.icon, indent: v.indent, children: v.children.map((e, i) => { return {name: e.name, icon: e.icon, indent: e.indent, children: e.children, active: false} as Notebook }), active: true}
            }
        }))
    }

    return (
        <div>
            <div className={props.active ? "SidebarRow active" : "SidebarRow"} onClick={() => { props.toggleActive(props.k) }}>
                {/* { props.indent } */}
                { [...Array(props.indent)].map((v, n) => <div key={n} className="SidebarRowSpacer" />) }
                <div className="SidebarRowIcon">{ props.icon }</div>
                { props.name }
            </div>
            <div className="SidebarRowChildren">
                { children.map((v, n) => <SidebarRow k={n} key={n} name={v.name} icon={v.icon} indent={props.indent + 1} children={v.children} active={props.active ? v.active : false} toggleActive={toggleActive} />)}
            </div>
        </div>
    )
}
