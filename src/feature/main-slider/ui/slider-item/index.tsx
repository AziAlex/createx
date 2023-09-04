import React from 'react';

import cl from "./style.module.scss"
import OrangeBtn from "@/shared/ui/btns/orange-btn";

const MainSliderItem = () => {
  return (
    <div className={cl.sliderItem}>
      <h2>CREATEX CONSTRUCTION</h2>
      <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed.
        Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.</p>
      <div>
        <button>Learn more about us</button>
        <OrangeBtn title="SUBMIT REQUEST"/>
      </div>
    </div>
  );
};

export default MainSliderItem;