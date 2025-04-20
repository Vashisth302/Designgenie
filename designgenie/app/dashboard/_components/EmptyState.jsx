import Image from 'next/image'
import React from 'react'

function EmptyState() {
  return (
    <div className='flex items-center bg-none justify-center mt-4'>
     <Image src={'/demo.png'} width={600} height={400} alt='Demo image'/>
    </div>
  )
}

export default EmptyState