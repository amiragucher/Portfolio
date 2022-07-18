import MainHeadings from "../Components/MainHeadings/MainHeading"
import styles from '../styles/Home.module.css'
import Subheading from "../Components/MainHeadings/SubHeading"
import NavBar from "../Components/NavBar/NavBar"

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar/>
   <MainHeadings/>
  <Subheading/>
    </div>
  )
}
