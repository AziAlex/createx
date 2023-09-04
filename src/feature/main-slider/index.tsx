"use client"

import React from 'react';
import Slider from "react-slick";
import SliderItem from "@/feature/main-slider/ui/slider-item";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const items = [0, 1, 2, 3]

  return (
    <Slider
      arrows={false}
      slidesToScroll={1}
      slidesToShow={1}
      infinite={true}
      speed={500}
    >
      {items.map(item => (
        <SliderItem key={item}/>
      ))}
    </Slider>
  );
};

export default MainSlider;