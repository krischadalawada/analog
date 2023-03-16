import React, { useCallback } from 'react'
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

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null
    }

    const addImage = () => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
    }, [editor])

    return (
        <div className="img-grid">
            <div
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active button' : 'button'}
            >
                bold
            </div>
            <div
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active button' : 'button'}
            >
                italic
            </div>
            <div
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active button' : 'button'}
            >
                strike
            </div>
            <div
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={editor.isActive('code') ? 'is-active button' : 'button'}
            >
                code
            </div>
            <div onClick={() => editor.chain().focus().unsetAllMarks().run()} className='button'>
                clear marks
            </div>
            <div onClick={() => editor.chain().focus().clearNodes().run()} className='button'>
                clear nodes
            </div>
            <div
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active button' : 'button'}
            >
                paragraph
            </div>
            <div
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active button' : 'button'}
            >
                h1
            </div>
            <div
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active button' : 'button'}
            >
                h2
            </div>
            <div
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active button' : 'button'}
            >
                h3
            </div>
            <div
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level: 4 }) ? 'is-active button' : 'button'}
            >
                h4
            </div>
            <div
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? 'is-active button' : 'button'}
            >
                h5
            </div>
            <div
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level: 6 }) ? 'is-active button' : 'button'}
            >
                h6
            </div>
            <div
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active button' : 'button'}
            >
                bullet list
            </div>
            <div
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active button' : 'button'}
            >
                ordered list
            </div>
            <div
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active button' : 'button'}
            >
                code block
            </div>
            <div
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active button' : 'button'}
            >
                blockquote
            </div>
            <div
                onClick={addImage}
                className={editor.isActive('blockquote') ? 'is-active button' : 'button'}
            >
                image
            </div>
            <div onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'is-active button' : 'button'}>
                highlight
            </div>
            <div onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active button' : 'button'}>
                left
            </div>
            <div onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active button' : 'button'}>
                center
            </div>
            <div onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active button' : 'button'}>
                right
            </div>
            <div onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active button' : 'button'}>
                justify
            </div>
            <div onClick={() => editor.chain().focus().setHorizontalRule().run()} className='button'>
                horizontal rule
            </div>
            <div onClick={() => editor.chain().focus().setHardBreak().run()} className='button'>
                hard break
            </div>
            <div onClick={() => editor.chain().focus().undo().run()} className='button'>
                undo
            </div>
            <div onClick={() => editor.chain().focus().redo().run()} className='button'>
                redo
            </div>
            <div onClick={setLink} className='button'>
                setLink
            </div>
            <div onClick={() => editor.chain().focus().unsetLink().run()} disabled={!editor.isActive('link')} className='button'>
                unsetLink
            </div>

            {/*Table*/}
            <div
                onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
                className='button'
            >
                insertTable
            </div>
            <div onClick={() => editor.chain().focus().addColumnBefore().run()} className='button'>
                addColumnBefore
            </div>
            <div onClick={() => editor.chain().focus().addColumnAfter().run()} className='button'>addColumnAfter</div>
            <div onClick={() => editor.chain().focus().deleteColumn().run()} className='button'>deleteColumn</div>
            <div onClick={() => editor.chain().focus().addRowBefore().run()} className='button'>addRowBefore</div>
            <div onClick={() => editor.chain().focus().addRowAfter().run()} className='button'>addRowAfter</div>
            <div onClick={() => editor.chain().focus().deleteRow().run()} className='button'>deleteRow</div>
            <div onClick={() => editor.chain().focus().deleteTable().run()} className='button'>deleteTable</div>
            <div onClick={() => editor.chain().focus().mergeCells().run()} className='button'>mergeCells</div>
            <div onClick={() => editor.chain().focus().splitCell().run()} className='button'>splitCell</div>
            <div onClick={() => editor.chain().focus().toggleHeaderColumn().run()} className='button'>
                toggleHeaderColumn
            </div>
            <div onClick={() => editor.chain().focus().toggleHeaderRow().run()} className='button'>
                toggleHeaderRow
            </div>
            <div onClick={() => editor.chain().focus().toggleHeaderCell().run()} className='button'>
                toggleHeaderCell
            </div>
            <div onClick={() => editor.chain().focus().mergeOrSplit().run()} className='button'>mergeOrSplit</div>
            <div onClick={() => editor.chain().focus().setCellAttribute('colspan', 2).run()} className='button'>
                setCellAttribute
            </div>
            <div onClick={() => editor.chain().focus().fixTables().run()} className='button'>fixTables</div>
            <div onClick={() => editor.chain().focus().goToNextCell().run()} className='button'>goToNextCell</div>
            <div onClick={() => editor.chain().focus().goToPreviousCell().run()} className='button'>
                goToPreviousCell
            </div>
        </div>
    )
}

const TipTapEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Highlight,
            Image,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Link.configure({
                openOnClick: false,
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
        content: ``,
    })

    const html = editor && editor.getHTML().replace(/"/g, "'")

    return (
        <section className='container-lg pt-60 pb-60'>
            <MenuBar editor={editor} />
            <div className='editor'>
                <EditorContent editor={editor} />
            </div>
            <div style={{ lineHeight: 1.2 }}>
                <p>{html}</p>
            </div>
        </section>
    )
}

export default TipTapEditor;