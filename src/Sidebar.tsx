import './Sidebar.css'

import SidebarRow from './SidebarRow'

interface SidebarProps {
    notebooks: Array<Array<string>>
}

export default function Sidebar(props: SidebarProps) {
    function handleSelect() {
        return
    }

    return (
        <div id="Sidebar">
            <div id="SidebarHeader"></div>
            <div id="Notebooks">
                { props.notebooks.map((v, n) => <SidebarRow key={n} name={v[0]} icon={v[1]}  />)}
                <SidebarRow key={3} name={'Indite app'} icon={'✍️'} />
            </div>
        </div>
    )
}