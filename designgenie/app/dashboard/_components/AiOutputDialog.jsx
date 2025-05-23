import React from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { Button } from '@/components/ui/button';
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

function AiOutputDialog({openDialog,closeDialog, aiImage, orgImage}) {
  return (
    <AlertDialog open={openDialog}>
    
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Result:</AlertDialogTitle>
        <ReactBeforeSliderComponent
    firstImage={{
        imageUrl:aiImage
    }}
    secondImage={{
        imageUrl:orgImage
    } }
/>
        <Button onClick={()=>closeDialog(false)}>Close</Button>
      </AlertDialogHeader>
      
    </AlertDialogContent>
  </AlertDialog>
  
  )
}

export default AiOutputDialog