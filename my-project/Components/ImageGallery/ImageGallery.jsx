import { Carousel } from "antd";
import React from "react";
import 'antd/dist/antd.css';

const ImageGallery = () => (
  // <div className=" flex justify-center self-center item-center w-full ">
    <Carousel className="flex justify-center self-center sm:mr-[15em] sm:ml-[15em]"autoplay>
        <img
          src="SlideOne.svg"
        />
      
      <img
        src="SlideTwo.svg"
      />
       <img
        src="SlideThree.svg"
      />
     
    </Carousel>
  //  </div>
);

export default ImageGallery;
