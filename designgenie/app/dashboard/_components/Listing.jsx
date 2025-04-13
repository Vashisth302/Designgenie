"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import Image from 'next/image';
import React, { useState } from 'react';
import EmptyState from './EmptyState';
import Link from 'next/link';

function Listing() {
    const { user } = useUser();
    const [userRoomList] = useState([])

    return (
        <div className="bg-black text-white">
            <div className="relative w-full h-screen">
                <Image
                    src="/livingroom1.jpg" // Ensure the image is in the public directory
                    layout="fill" // Cover the entire div
                    objectFit="cover" // Maintain aspect ratio
                    alt="Background"
                    className="opacity-25" // Optional: adjust opacity
                />

                <div className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-5xl font-extrabold text-white mb-4 p-4 shadow-lg">
                        <h1>Hello, {user?.fullName}</h1>
                    </div>

                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-semibold text-white mb-4">Create your comfort place with one click</h2>
                    </div>

                    {userRoomList?.length == 0 ?

                        <EmptyState />
                        :
                        <div>
                            {/*Listing*/}
                        </div>
                    }
                    <div className='"relative z-10 text-2xl flex flex-col items-center justify-center h-full text-center p-4'>
                        <Link href={'/dashboard/create-new'}>
                        <Button className='mt-10 py-6 px-5 text-2xl'> Start</Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Listing;