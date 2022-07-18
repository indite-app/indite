import { useState } from 'react'

interface MiddlebarRowProps {
    title: string,
    preview: string,
    active: boolean,
    toggleActive: Function,
    sKey: number
}

export default function MiddlebarRow(props: MiddlebarRowProps) {
    return (
        <div className={props.active ? "MiddlebarRow active" : "MiddlebarRow"} onClick={() => { props.toggleActive(props.sKey) }}>
            <h2 className="MiddlebarRowTitle">{ props.title }</h2>
            <p className="MiddlebarRowPreview">{ props.preview }...</p>
        </div>
    )
}