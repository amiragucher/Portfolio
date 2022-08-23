import { Carousel } from "antd";
import React from "react";
import Style from "./ImageGallery.module.css";
import 'antd/dist/antd.css';

const ImageGallery = () => (
  // <div className=" flex justify-center self-center item-center w-full ">
    <Carousel className="flex justify-center self-center h-[50%] w-[70%] mr-0"autoplay>
        <img
          className={Style.imageCSS}
          src="SlideOne.png"
        />
      
      <img
        className={Style.imageCSS}
        src="SlideTwo.png"
      />
       <img
        className={Style.imageCSS}
        src="SlideThree.png"
      />
     
    </Carousel>
  //  </div>
);

export default ImageGallery;
