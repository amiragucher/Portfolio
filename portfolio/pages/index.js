import MainHeadings from "../Components/MainHeadings/MainHeading"
import styles from '../styles/Home.module.css'
import Subheading from "../Components/MainHeadings/SubHeading"
import NavBar from "../Components/NavBar/NavBar"
import Avatar from "../Components/Avatar/Avatar"
import HomePageContainer from "../Components/HomePageContainer/HomePageContainer"
import MainTitleContainer from "../Components/HomePageContainer/MainTitleContainer"


export default function Home() {
  return (
    <div>
      <NavBar/>
      <HomePageContainer>
        <MainTitleContainer>
      <MainHeadings/>
      <Subheading/>
      </MainTitleContainer>
      <Avatar/>
      </HomePageContainer>
      
    </div>
  )
}
