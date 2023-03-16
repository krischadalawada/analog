import React, { useState, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

const TipTapRender = (props) => {
  const editor = useEditor({
    editable: false,
    content: `${props.content && props.content}`,
    extensions: [StarterKit,
      Highlight,
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: true,
      }),
      Table.configure({
        HTMLAttributes: {
          class: 'my-custom-class',
        },
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}

export default TipTapRender;