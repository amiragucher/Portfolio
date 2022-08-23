import { Carousel } from "antd";
import React from "react";
import Style from "./ImageGallery.module.css";

const ImageGallery = () => (
  <div className={Style.imageContainer}>
   
    <Carousel className={Style.Carousel} autoplay>
      <div>
        
        <img
          className={Style.imageCSS}
          src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
          alt="test"
          />
          </div>

        
     
     <div>
     </div>
        <img
          className={Style.imageCSS}
          src="https://i.imgur.com/n40QdrD.png"
          />
          
     

      {/* <div>
        <img
          className={Style.imageCSS}
          src="https://i.imgur.com/DZQN7GR.png"
        />
      </div>
      <div>
        <img
          className={Style.imageCSS}
          src="https://i.imgur.com/yC2aMtf.png"
        />
      </div>
      <div>
        <img
          className={Style.imageCSS}
          src="https://www.rochdale.gov.uk/images/litter_pick.jpg"
        />
      </div> */}
    </Carousel>
  </div>
);

export default ImageGallery;
