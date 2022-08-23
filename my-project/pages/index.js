import styles from '../styles/Home.module.css'
import Navbar from "../Components/Navbar/Navbar";
import MainTitle from '../Components/MainTitle/MainTitle';
import Avatar from '../Components/Avatar/Avatar';
import AboutMe from '../Components/AboutMe/AboutMe';
import ImageGallery from '../Components/ImageGallery/ImageGallery';



export default function Home() {
  return (
  <div className="bg-[#02979D]">
        <Navbar/>
    <div className="flex">
      <MainTitle/>
        <Avatar/>
    </div>
  <div>
        <AboutMe/>
  </div>
        
    <h1 className="flex justify-center text-6xl mb-4 mt-5 text-white">UI/UX Designs</h1>
       <ImageGallery/>

         </div>
  )
}
