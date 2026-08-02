
import EditSnippetForm from '@/components/EditSnippetForm'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import React from 'react'

const editSnippet = async({params}:{params:Promise <{id:string}>}) => {

  const id = parseInt((await params).id)
  
  const snippet = await prisma.snippet.findUnique({
    where:{
      id
    }
  })

  if(!snippet) return notFound();

  return (
    <EditSnippetForm snippet={snippet}/>
  )
}

export default editSnippet