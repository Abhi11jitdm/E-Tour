import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";

function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage src="/imgs/slide1.jpg" text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src="/imgs/slide2.jpg" text="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
