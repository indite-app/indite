interface SidebarRowProps {
    icon: string,
    name: string
}

export default function SidebarRow(props: SidebarRowProps) {
    return (
        <div className="SidebarRow">
            {/* <svg className="SidebarRowIcon" href="./notebook.svg"></svg> */}
            { props.icon === '✍️' ? <div style={{width: '1em' }}></div> : <div></div> }
            <div className="SidebarRowIcon">{ props.icon }</div>
            { props.name }
        </div>
    )
}