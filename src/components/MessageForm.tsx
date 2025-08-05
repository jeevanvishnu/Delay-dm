import React from 'react'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Button } from './ui/button'

const MessageForm = () => {
  return (
    <div className=' mx-auto border bg-white space-y-4 rounded-lg p-6'>
        <h2 className='text-2xl font-bold text-gray-800'>Dm Delay Button</h2>

        <Textarea placeholder='Type'/>
        <Input placeholder='Delay in secound' value={2}/>
        <Button>send with delay</Button>
    </div>
  )
}

export default MessageForm