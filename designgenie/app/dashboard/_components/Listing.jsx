"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import EmptyState from './EmptyState';
import Link from 'next/link';
import { db } from '@/config/db';
import { AiGeneratedImage } from '@/config/schema';
import { eq } from 'drizzle-orm';
import RoomDesignCard from './RoomDesignCard';


function Listing() {
    const { user } = useUser();
    const [userRoomList, setUserRoomList] = useState([]);

    useEffect(() => {
        user && GetUserRoomList();
    }, [user])

    const GetUserRoomList = async () => {
        const result = await db.select().from(AiGeneratedImage)
            .where(eq(AiGeneratedImage.userEmail,user?.primaryEmailAddress));
        setUserRoomList(result);
        console.log(result);
    }

    return (
        <div className="bg-black text-white">
            <div className="relative w-full h-screen">
                <Image
                    src="/livingroom1.jpg" // Ensure the image is in the public directory
                    layout="fill" // Cover the entire div
                    objectFit="full-cover" // Maintain aspect ratio
                    alt="Background"
                    className="opacity-25" // Optional: adjust opacity
                />

                <div className="flex flex-col items-center justify-center p-4 text-center bg-none">
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
                            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                                {userRoomList.map((room, index) => (
                                    <RoomDesignCard key={index} room={room} />
                                ))}
                            </div>
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