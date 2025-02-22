import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/styles.css";
import image from "../assets/react.svg";

const ImageCarousel = () => {
  const images = [
    { id: 1, src: image, alt: "Product 1" },
    { id: 2, src: image, alt: "Product 2" },
    { id: 3, src: image, alt: "Product 3" },
    { id: 4, src: image, alt: "Product 4" },
    { id: 5, src: image, alt: "Product 5" },
    { id: 6, src: image, alt: "Product 6" },
    { id: 7, src: image, alt: "Product 7" },
    { id: 8, src: image, alt: "Product 8" },
    { id: 9, src: image, alt: "Product 9" },
  ];

  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }

  return (
    <Carousel showThumbs={false} autoPlay={false} infiniteLoop>
      {groupedImages.map((group, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {group.map((img) => (
            <div key={img.id} style={{ height: "70px", width: "70px" }}>
              <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
