"use client"
import React, { useState } from 'react';
import ImageSelection from './_components/ImageSelection';
import RoomType from './_components/RoomType';
import DesignType from './_components/DesignType';
import AdditionalReq from './AdditionalReq';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/config/firebaseConfig';
import { useUser } from '@clerk/nextjs';
import CustomLoading from './_components/CustomLoading';
import AiOutputDialog from '../_components/AiOutputDialog';


function CreateNew() {
  
  const{user}=useUser();
  const [formData, setFormData] = useState([]);
  const [loading,setLoading] =useState(false);
  const [aiOutputImage,setAiOutputImage]=useState()
  const [orgImage,setOrgImage]=useState();
  const [openOutputDialog,SetOpenOutputDialog]=useState(false);
  // const[outputResult,setOutputResult]=useState();
  const onHandleInputChange = (value, fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }))

    console.log(formData);
  }

  const GenerateAiImage = async () => {
    setLoading(true); // Output Result
    const rawImageUrl = await SaveRawImageToFirebase();
    const result = await axios.post('/api/resdesign-room', {
      imageUrl: rawImageUrl,
      roomType: formData?.roomType,
      designType: formData?.designType,
      additionalReq: formData?.AdditionalReq,
      userEmail:user?.primaryEmailAddress?.emailAddress
    });
    console.log(result, result.data);
    setAiOutputImage(result.data.result);
    SetOpenOutputDialog(true);
    setLoading(false);
  }

  const SaveRawImageToFirebase = async () => {
    //save image
    const fileName = Date.now() + "_raw.png";
    const ImageRef = ref(storage, 'room-redesign/' + fileName);

    await uploadBytes(ImageRef, formData.image).then(resp => {
      console.log('file Upload...')
    })
    // uploaded file image url
    const downloadUrl = await getDownloadURL(ImageRef);
    console.log(downloadUrl);
    setOrgImage(downloadUrl);
    return downloadUrl;


  }

  return (
    <div>
      <h2 className='font-bold text-4xl text-primary text-center mt-5 mb-3'>Create Your Ideas</h2>
      <p className='text-center text-primary text-xl font-semibold p-1'>Choose a style, and watch as AI instantly redesign your evniroment.</p>

      <div className=' text-center justify-center w-3/4 h-full grid grid-cols-1 md:grid-cols-2 m-20 gap-4'>

        {/*Image selection */}
        <ImageSelection selectedImage={(value) => onHandleInputChange(value, 'image')} />
        {/*Form Input selection */}
        <div>
          {/* {Room Type} */}
          <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} />

          {/* Design Type */}

          <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')} />

          {/* specifiction */}
          <AdditionalReq additionalRequirmentInput={(value) => onHandleInputChange(value, 'additionalReq')} />

          {/* Button to Generate Image */}

          <Button className="text-white text-xl mt-3 px-4 py-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-purple-900 shadow-2xl" onClick={GenerateAiImage} href="#">Generate</Button>

        </div>
      </div>
        <CustomLoading loading={loading}/>
        <AiOutputDialog openDialog={openOutputDialog} closeDialog={()=>SetOpenOutputDialog(false)}
          orgImage={orgImage}
          aiImageUrl={aiOutputImage}
          />
    </div>
  )
}

export default CreateNew 