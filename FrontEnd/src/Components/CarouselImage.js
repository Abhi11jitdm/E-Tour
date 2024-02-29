import React from "react";

const CarouselImage = ({ src, text }) => {
  return (
    <div
      style={{
        maxWidth: "100%",
        maxHeight: "50%",
        overflow: "hidden",
        marginTop: "50px",
      }}
    >
      <img
        src={src}
        alt={text}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
};

export default CarouselImage;
