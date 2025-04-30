import { Button } from "@/components/ui/button";
import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <div>
        <div className='p-3 shadow-sm flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <Image src={'/logo.png'} width={60} height={60} alt='logo' />
            <h2 className='text-2xl font-bold  text-pink-500'>DESIGN</h2>
            <span className='font-bold text-2xl text-purple-500 '> GENIE </span>
          </div>

          <div className='flex gap-4 items-center'>
            <div className='text-xl font-normal flex gap-3 p-2 items-center'>
              <Link href={'/dashboard'}>
                <Button className="text-white text-xl px-4 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-purple-900 shadow-2xl" href="http://localhost:3000/dashboard">Redesign yours</Button>
              </Link>
            </div>
          </div>
        </div>


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
                <h1>Hello, User</h1>
              </div>

              <div className="max-w-2xl">
                <h2 className="text-4xl font-semibold text-white mb-4">Create your comfort place with one click</h2>
              </div>
              <div className='flex items-center bg-none justify-center mt-4'>
                <Image src={'/demo.png'} width={600} height={400} alt='Demo image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      );
}