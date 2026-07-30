import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const createSnippet = () => {
    async function createSnippet(formData:FormData) {
        "use server"

        const title = formData.get("title") as string
        const code = formData.get("code") as string

        const snippet = await prisma.snippet.create({
            data:{
                title,
                code
            }
        })
        console.log("created snippet",snippet)

        redirect("/")
    }
   return (
  <div className="w-4xl mx-auto mt-10">
    <div className="bg-gray-100 rounded-xl p-8">
      <h1 className="text-3xl font-bold mb-8">Create New Snippet</h1>

      <form action={createSnippet} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="title" className="text-lg font-medium">
            Title
          </Label>

          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter snippet title..."
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="code" className="text-lg font-medium">
            Code
          </Label>

          <Textarea
            id="code"
            name="code"
            placeholder="Paste your code here..."
            className="w-full h-64 resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-fit px-8 cursor-pointer self-end"
        >
          Create Snippet
        </Button>
      </form>
    </div>
  </div>
);
}

export default createSnippet