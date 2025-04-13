import Image from 'next/image'
import React from 'react'

function EmptyState() {
  return (
    <div className='flex items-center justify-center mt-4'>
     <Image src={'/demo.png'} width={600} height={400} />
    </div>
  )
}

export default EmptyState