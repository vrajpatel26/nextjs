
import EditSnippetForm from '@/components/EditSnippetForm'
import React from 'react'

const editSnippet = async({params}:{params:Promise <{id:string}>}) => {

  const id = (await params).id
  

  return (
    <EditSnippetForm/>
  )
}

export default editSnippet