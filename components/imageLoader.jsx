import React, { useState, useEffect } from "react";

const ImageLoader = ({ mainImageSrc, altImageSrc, altText, classValue, buttonReq=false }) => {
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

  const svgLink = mainImageSrc;

  const handleOpenInNewTab = () => {
    window.open(svgLink, "_blank");
  };

  return (
    <>
      <img
        src={imageSrc}
        className={`${classValue} ${animate}`}
        alt={altText}
      />
      {buttonReq && svgLink.length>0 ? (
        <>
          <button
            className="bg-blue-600 text-white rounded-md my-2"
            onClick={handleOpenInNewTab}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Open Image in New Tab
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ImageLoader;
