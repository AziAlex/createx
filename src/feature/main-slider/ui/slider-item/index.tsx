import React from 'react';

import Image from "next/image";
import OrangeBtn from "@/shared/ui/btns/orange-btn";
import img from "/public/main-page/slider-bg-image.jpg"

import cl from "./style.module.scss"

const MainSliderItem = () => {
  return (
    <div className={cl.sliderItem}>
      <div className={cl.sliderContent}>
        <h2>CREATE<span>X</span> CONSTRUCTION</h2>
        <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed.
          Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.</p>
        <div>
          <button>Learn more about us</button>
          <OrangeBtn title="SUBMIT REQUEST"/>
        </div>
      </div>
      <Image src={img} alt="slider" fill/>
    </div>
  );
};

export default MainSliderItem;