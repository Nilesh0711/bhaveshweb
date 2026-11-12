import React, { useState, useEffect } from "react";
import { getAssetPath } from "../lib/assets";

const ImageLoader = ({ mainImageSrc, altImageSrc, altText, classValue, buttonReq = false }) => {
  const resolvedMain = getAssetPath(mainImageSrc);
  const resolvedAlt = getAssetPath(altImageSrc);

  const [imageSrc, setImageSrc] = useState(resolvedAlt || resolvedMain);
  const [animate, setAnimate] = useState(resolvedAlt ? "animate-pulse" : "");

  useEffect(() => {
    if (!resolvedMain) return;
    const image = new Image();
    image.src = resolvedMain;

    image.onload = () => {
      setImageSrc(resolvedMain);
      setAnimate("");
    };

    image.onerror = () => {
      setAnimate("");
    };
  }, [resolvedMain]);

  const handleOpenInNewTab = () => {
    if (resolvedMain) {
      window.open(resolvedMain, "_blank", "noopener,noreferrer");
    }
  };

  if (!buttonReq || !resolvedMain) {
    return (
      <img
        src={imageSrc}
        className={`${classValue || ""} ${animate} transition-opacity duration-300`}
        alt={altText || "Image"}
        loading="lazy"
      />
    );
  }

  return (
    <div className="flex flex-col items-start w-full">
      <img
        src={imageSrc}
        className={`${classValue || ""} ${animate} transition-opacity duration-300`}
        alt={altText || "Image"}
        loading="lazy"
      />
      <button
        type="button"
        onClick={handleOpenInNewTab}
        className="mt-3 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Open Image in New Tab
        <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </button>
    </div>
  );
};

export default ImageLoader;
