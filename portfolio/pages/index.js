import MainHeadings from "../Components/MainHeadings/MainHeading"
import styles from '../styles/Home.module.css'
import Subheading from "../Components/MainHeadings/SubHeading"
import NavBar from "../Components/NavBar/NavBar"
import Avatar from "../Components/Avatar/Avatar"
import HomePageContainer from "../Components/HomePageContainer/HomePageContainer"
import MainTitleContainer from "../Components/HomePageContainer/MainTitleContainer"
import AboutMe from "../Components/AboutMe/AboutMeArea";
import Plug from "../Components/Plug/LowerPlug"


export default function Home() {
  return (
    <div>
      <NavBar/>
      <HomePageContainer>
      <Plug/>
      <MainTitleContainer>
      <MainHeadings/>
      <Subheading/>
      </MainTitleContainer>
      <Avatar/>
      </HomePageContainer>
      <AboutMe/>  
    </div>
  )
}
