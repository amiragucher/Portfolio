import MainHeadings from "../Components/MainHeadings/MainHeading"
import styles from '../styles/Home.module.css'
import Subheading from "../Components/MainHeadings/SubHeading"
import NavBar from "../Components/NavBar/NavBar"
import Avatar from "../Components/Avatar/Avatar"
import HomePageContainer from "../Components/HomePageContainer/HomePageContainer"
import MainTitleContainer from "../Components/HomePageContainer/MainTitleContainer"
import AboutMe from "../Components/AboutMe/AboutMeArea";
import QrCode from "../Components/QrCode/QrCode"
// import UpperPlug from "../Components/UpperPlug/UpperPlug";
// import LowerPlug from "../Components/LowerPlug/LowerPlug";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <HomePageContainer>
      {/* <UpperPlug/> */}
      {/* <LowerPlug/> */}
      <MainTitleContainer>
      <MainHeadings/>
      <Subheading/>
      <QrCode/>
      </MainTitleContainer>
      <Avatar/>
      </HomePageContainer>
      <AboutMe/>  
    </div>
  )
}
