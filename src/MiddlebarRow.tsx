interface MiddlebarRowProps {
    title: string,
    preview: string
}

export default function MiddlebarRow(props: MiddlebarRowProps) {
    return (
        <div className="MiddlebarRow">
            <h2 className="MiddlebarRowTitle">{ props.title }</h2>
            <p className="MiddlebarRowPreview">{ props.preview }...</p>
        </div>
    )
}