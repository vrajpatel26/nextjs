import { Button } from '@/components/ui/button'
import React from 'react'
import { signIn } from './actions/signin'
import { signOut } from './actions/signout'
import { auth } from '@/Auth'


const page = async() => {
    const session = await auth()
  return (
    <div className='flex justify-around text-xl'>
      <div>Home</div>
      <div className='flex gap-4'>
        <form action={signIn}>
          <Button type='submit'> SignIn</Button>
        </form>
        <form action={signOut}>
          <Button type='submit'>SignOut</Button>
        </form>
      </div>
      {
        session?.user && <div>{JSON.stringify(session.user)}</div>
      }
    </div>
  )
}

export default page