interface SidebarRowProps {
    icon: string,
    name: string,
    active: boolean,
    sKey: number,
    toggleActive: Function
}

export default function SidebarRow(props: SidebarRowProps) {
    return (
        <div className={props.active ? "SidebarRow active" : "SidebarRow"} onClick={() => { props.toggleActive(props.sKey) }}>
            <div className="SidebarRowIcon">{ props.icon }</div>
            { props.name }
        </div>
    )
}