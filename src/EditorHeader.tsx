export default function EditorHeader() {
    return (
        <div id="EditorHeader">
            <input tabIndex={-1} placeholder="Untitled" defaultValue='Markdown example' onKeyUp={(e) => { if (e.key === "Enter") { e.target.blur() } } }></input>
        </div>
    )
}