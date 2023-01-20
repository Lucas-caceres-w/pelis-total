"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import image from "../../images/portadas.jpg";
import image2 from "../../images/portada2.png";
import image3 from "../../images/portada3.jpg";

function CarouselBoostrap() {
  return (
    <Carousel pause="false">
      <Carousel.Item>
        <Image alt="portada" className="portada" src={image} width={"fill"} height={600} />
      </Carousel.Item>
      <Carousel.Item>
        <Image alt="portada" className="portada" src={image2} width={"fill"} height={600} />
      </Carousel.Item>
      <Carousel.Item>
        <Image alt="portada" className="portada" src={image3} width={"fill"} height={600} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBoostrap;
