import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselGallery() {
  return (
    <div className="main-carousel">
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.postimg.cc/xCYF6q9h/wallpaperflare-com-wallpaper-1.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://i.postimg.cc/NjF3qyqH/wallpaperflare-com-wallpaper-3.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://i.postimg.cc/x8tbmpdq/wallpaperflare-com-wallpaper-4.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://i.postimg.cc/7hrLKf9F/wallpaperflare-com-wallpaper-5.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselGallery;
