import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'


function CustomLoading({ loading }) {
  return (
    <AlertDialog open={loading}>

      <AlertDialogContent>
        <div className="flex flex-col justify-center items-center my-10 ">
          <Image src="/loader.gif" alt="loading"
          width={200}
          height={200}
          />
          <div>
            <h2>Redesign Loading...</h2>
            <h3>Do not Refresh</h3>
          </div>
        </div>

      </AlertDialogContent>
    </AlertDialog>

  )
}

export default CustomLoading