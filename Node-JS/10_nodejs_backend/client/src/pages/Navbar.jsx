import { Button } from '@/components/ui/button'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-gray-600'>
      <div className='flex items-center justify-between p-2'>
        <h1 className='font-bold text-lg'>{"UV MERN Stack"}</h1>
        <Button>Logout</Button>
      </div>
    </div>
  )
}

export default Navbar