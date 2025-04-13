import Image from "next/image";
import React, { useState } from "react";

function DesignType({ selectedDesignType }) { // Correctly destructure the prop
  const Designs = [
    {
      name: "Modern",
      image: "/livingroom8.jpg",
      alt: "modern",
    },
    {
      name: "Industrial",
      image: "/livingroom6.jpg",
      alt: "industrial",
    },
    {
      name: "Traditional",
      image: "/bedroom2.jpg",
      alt: "traditional",
    },
    {
      name: "Rustic",
      image: "/bedroom1.jpg",
      alt: "rustic",
    },
  ];

  const [selectedOption, setSelectedOption] = useState();
  return (
    <div className="mt-5 p-3">
      <label className="text-gray-700">Select Interior Design Type</label>
      <div
        className="grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {Designs.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.name);
              selectedDesignType(design.name); // Correctly call the passed function
            }}
            className="cursor-pointer"
          >
            <Image
              src={design.image}
              width={100}
              height={100}
              className={`h-[120px] w-[170px] ml-3 rounded-md
              hover:scale-105 transition-all
              ${design.name === selectedOption && "border-4 border-purple-900 rounded-md p-1"}`}
              alt={design.alt}
            />
            <h2 className="text-center justify-center">{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignType;
