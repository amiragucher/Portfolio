import { Carousel } from "antd";
import React from "react";
import 'antd/dist/antd.css';

export default function ImageGallery (){ 
  return (
  // <div className=" flex justify-center self-center item-center w-full ">
    <Carousel className="flex justify-center self-center sm:mr-[15em] sm:ml-[15em]"autoplay>
        <img
          src="SlideFive.svg"
        />
      
      <img
        src="SlideFour.svg"
      />
       <img
        src="SlideThree.svg"
      />
      <img
        src="SlideTwo.svg"
      />
      <img
        src="SlideOne.svg"
      />
     
    </Carousel>
  //  </div>
);

  }
