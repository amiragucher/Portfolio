import MainHeadings from "../Components/MainHeadings/MainHeading"
import styles from '../styles/Home.module.css'
import Subheading from "../Components/MainHeadings/SubHeading"
import NavBar from "../Components/NavBar/NavBar"
import Avatar from "../Components/Avatar/Avatar"

export default function Home() {
  return (
    <div>
      <NavBar/>
      <MainHeadings/>
      <Subheading/>
      <Avatar/>
    </div>
  )
}
