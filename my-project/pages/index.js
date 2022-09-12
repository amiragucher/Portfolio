import styles from '../styles/Home.module.css'
import Navbar from "../Components/Navbar/Navbar";
import MainTitle from '../Components/MainTitle/MainTitle';
import Avatar from '../Components/Avatar/Avatar';
import AboutMe from '../Components/AboutMe/AboutMe';
import ImageGallery from '../Components/ImageGallery/ImageGallery';
import Style from "../Components/MainTitle/Text.module.css"
import Toolbox from '../Components/ToolBox/ToolBox';
import Toggle from '../Components/Navbar/Toggle';



export default function Home() {
  return (
   <div className="bg-[#02979D]">
    <Toggle/>
   <div className="flex">
    <MainTitle/>
    <Avatar/>
    </div>
    <div>
    <AboutMe/>
     </div>
    <div className={Style.Titles}>
    <h1 className="flex justify-center text-6xl mb-4 mt-5 text-[#FF9D00]">UI/UX Designs</h1>
    </div>
    <ImageGallery/>
    <div className={Style.Titles}>
    <h1 className="flex justify-center text-6xl mb-4 mt-5 text-[#FF9D00]">ToolBox</h1>
    </div>
    <Toolbox/>
    </div>
  )
}
