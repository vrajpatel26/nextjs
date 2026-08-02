'use client'
import { Editor } from '@monaco-editor/react'
import React from 'react'

const EditSnippetForm = () => {
    return (
        <div>
            <Editor
                height="90vh"
                defaultLanguage="javascript"
                defaultValue="// some comment"
            />
        </div>
    )
}

export default EditSnippetForm