import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselPlus = ({ pics, prof }) => {

    const carouselItems = pics
        ? pics.map((pic, index) => {
              return (
                  <Carousel.Item>
                      <img
                          className="d-block w-100 carousel-item-img"
                          src={pic.src}
                          alt="First slide"
                          style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                              opacity: "0.95",
                          }}
                      />
                      <Carousel.Caption>
                          <h4>{pic.heading}</h4>
                          {/* <p style={{fontSize: "14px"}}>{pic.caption}</p> */}
                      </Carousel.Caption>
                  </Carousel.Item>
              );
          })
        : null;

    return (
        <Carousel className="shadow" fade>
            {carouselItems}
        </Carousel>
    );
};

export default CarouselPlus;
