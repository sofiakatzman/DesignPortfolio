import ImageGallery from "react-image-gallery";
import React from "react";



function ImageGalleryDisplay({images}){

  return(
    <div>
      <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} />
    </div>
  )
    
    
}

export default ImageGalleryDisplay