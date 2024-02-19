import Image from "next/image";
import React, { useState, useEffect } from "react";

const ImageLoader = ({ mainImageSrc, altImageSrc, altText, classValue }) => {
  const [imageLoaded, setImageLoaded] = useState(false);


  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="w-full h-full">
      {!imageLoaded && altImageSrc && (
        <img
          src={altImageSrc}
          alt={altText}
          className={`w-full h-full animate-pulse ${classValue}`}
          loading="lazy"
        />
      )}
      <Image
        src={mainImageSrc}
        alt={altText}
        width={1000000}
        height={1000000}
        className={`w-full h-full ${classValue} ${imageLoaded ? "" : "hidden"}`}
        loading="eager"
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageLoader;
