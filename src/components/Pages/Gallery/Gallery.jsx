import React from "react";
import './Gallery.css'
import ImageGalleryDisplay from "./ImageGalleryDisplay/ImageGalleryDisplay";




function Gallery() {

    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnailTitle:" thumbnail image title"
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
        },
      ];

  // Define custom CSS styles with min-width and max-width

  return (
    <div className="design-categories">
      <ImageGalleryDisplay images={images} />
    </div>
  );
}

export default Gallery;