"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Header() {
    const {userDetail,setUserDetail}=useContext(UserDetailContext);

  return (
    <div className='p-3 shadow-sm flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <Image src={'/logo.png'} width={60} height={60} alt='logo'/>
            <h2 className='text-2xl font-bold  text-pink-500'>DESIGN</h2>
	        <span className='font-bold text-2xl text-purple-500 '> GENIE </span>
        </div>

        <div className='flex gap-4 items-center'>
            <div className='text-xl font-normal flex gap-3 p-2 items-center'>
		        <Button className="text-white text-xl px-4 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-purple-900 shadow-2xl" href="#">Explor</Button>
                <Button className="text-white text-xl px-4 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-purple-900 shadow-2xl" href="#">Gallery</Button>
                <Link href={'/dashboard/create-new'}>
                <Button className="text-white text-xl px-4 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-purple-900 shadow-2xl" href="http://localhost:3000/dashboard/create-new">Redesign yours</Button>
                </Link>
                <UserButton className="h-30 w-52 px-4 py-2 text-xl"/>
            </div>

        </div>
    </div>
  )
}

export default Header
