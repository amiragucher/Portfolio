import styles from '../styles/Home.module.css'
import Navbar from "../Components/Navbar/Navbar";
import MainTitle from '../Components/MainTitle/MainTitle';
import Avatar from '../Components/Avatar/Avatar';
import AboutMe from '../Components/AboutMe/AboutMe';



export default function Home() {
  return (
        <>
        <Navbar/>
        <div className="flex">
        <MainTitle/>
        <Avatar/>
        </div>
        <div>
        <AboutMe/>
    </div>
    </>
  )
}
