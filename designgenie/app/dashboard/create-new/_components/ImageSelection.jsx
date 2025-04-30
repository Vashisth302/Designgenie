"use client";
import Image from 'next/image';
import React, { useState } from 'react';

function ImageSelection({ selectedImage }) { // Destructure as an object
    const [file, setFile] = useState(null);

    const onFileSelected = (event) => {
        console.log(event.target.files[0]);
        setFile(event.target.files[0]);
        if (selectedImage) {
            selectedImage(event.target.files[0]); // Ensure the function exists before calling
        }
    };

    return (
        <div>
            <label className="block text-lg font-medium mb-2">Select Image of Your Room</label>
            <div className="mt-3">
                <label htmlFor="upload-image">
                    <div
                        className={`p-28 border border-blue-950 bg-white rounded-xl flex items-center justify-center cursor-pointer hover:shadow-2xl overflow-hidden
              ${file ? 'p-0 bg-white' : 'p-15'}`}
                    >
                        {!file ? (
                            <Image
                                src="/uploadImage.png"
                                width={70}
                                height={70}
                                alt="Upload Placeholder"
                            />
                        ) : (
                            <Image
                                src={URL.createObjectURL(file)}
                                width={450}
                                height={450}
                                className="object-cover w-[300] h-[300]"
                                alt="Uploaded Room"
                            />
                        )}
                    </div>
                </label>
                <input
                    type="file"
                    accept="image/*"
                    id="upload-image"
                    style={{ display: 'none' }}
                    onChange={onFileSelected}
                />
            </div>
        </div>
    );
}

export default ImageSelection;