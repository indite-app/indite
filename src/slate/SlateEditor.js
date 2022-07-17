import React, { useState, useCallback } from 'react';

import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'

import { Editor, Transforms, Text } from 'slate'

// Define our own custom set of helpers.
const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    })

    return !!match
  },

  isCodeMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.code === true,
      universal: true,
    })

    return !!match
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code',
    })

    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleCodeMark(editor) {
    const isActive = CustomEditor.isCodeMarkActive(editor)
    Transforms.setNodes(
      editor,
      { code: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleHorizontalRule(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor)
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'hr' },
      { match: n => Editor.isBlock(editor, n) }
    )
  },
}

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
  {
    type: 'hr',
    children: [{ text: '' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const SlateEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      case 'hr':
        return <HorizontalRule {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    <div style={{ margin: '0.8em' }}>
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          if (event.ctrlKey) {
            switch (event.key) {
              case '`': {
                event.preventDefault()
                CustomEditor.toggleCodeMark(editor)
                break
              }

              case 'b': {
                event.preventDefault()
                CustomEditor.toggleBoldMark(editor)
                break
              }

              default: 
            }
          }
        }}
      />
    </Slate>
    </div>
  )
}

const Leaf = props => {
  if (props.leaf.code) {
    return (
      <code><span
        {...props.attributes}
      >
        {props.children}
      </span></code>
    )
  } else {
    return (
      <span
        {...props.attributes}
        style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
      >
        {props.children}
      </span>
    )
  }
}

const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}

const HorizontalRule = props => {
  return (
    <div {...props.attributes} contentEditable={false}>
      {/* {props.children} */}
      <hr />
    </div>
  )
}

export default SlateEditor