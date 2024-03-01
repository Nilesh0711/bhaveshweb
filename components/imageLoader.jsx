import React, { useState, useEffect } from "react";

const ImageLoader = ({ mainImageSrc, altImageSrc, altText, classValue }) => {
  const [imageSrc, setImageSrc] = useState(altImageSrc);
  const [animate, setanimate] = useState("animate-pulse");

  useEffect(() => {
    const image = new Image();
    image.src = mainImageSrc;

    image.onload = () => {
      setImageSrc(mainImageSrc);
      setanimate("");
    };
  }, [mainImageSrc]);

  return (
    <img src={imageSrc} className={`${classValue} ${animate}`} alt={altText} />
  );
};

export default ImageLoader;