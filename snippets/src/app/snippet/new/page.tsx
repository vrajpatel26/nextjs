import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const createSnippet = () => {
    return (
        <form className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
                <Label className='text-xl'>Title</Label>
                <Input type='text' id='title' name='title' className='w-[300px]'/>
            </div>

            <div className='flex flex-col gap-2'>
                <Label className='text-xl'>Code</Label>
                <Textarea id='title' name='title' className='w-[300px] h-[200px]'/>
            </div>

            <Button type='submit' className='w-[300px] mt-5 cursor-pointer'>New</Button>
        </form>
    )
}

export default createSnippet