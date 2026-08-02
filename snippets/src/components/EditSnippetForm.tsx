'use client'
import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'
import { useState } from 'react'
import { Button } from './ui/button'
import { saveSnippet } from '@/actions'

const EditSnippetForm = ({snippet}:{snippet:Snippet}) => {

    const [code,setCode] = useState(snippet.code)

    const codeChanageEventHandler = (value:string = "") =>{
        setCode(value)
    }

    //we cannot use sevrer action as a inline inside client component 
    // async function saveSnippet (){
    // "use server" 
    // .....    
    // }
    
    const saveSnippetAction = saveSnippet.bind(null ,snippet.id , code)

    return (
        <div className='flex flex-col gap-4'>
            <form action={saveSnippetAction} className='flex items-center justify-between'>
                <h1 className='font-bold text-xl'>Your code Editor : </h1>
                <Button type='submit' className='h-[40px] w-[80px] cursor-pointer' >Save</Button>
            </form>
            <Editor
                height="70vh"
                theme='vs-dark'
                defaultLanguage="javascript"
                defaultValue={code}
                onChange={codeChanageEventHandler}
            />
        </div>
    )
}

export default EditSnippetForm